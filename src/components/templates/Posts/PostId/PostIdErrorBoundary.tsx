import {
  ClientError,
  ErrorTransformer,
} from "@/error/transformer/error.transformer";
import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorScreen } from "../../../../pages/_error.screen";
import { ClientLogger } from "@/lib/clientLogger";

type Props = {
  children: ReactNode;
  render?: ({
    error,
    onReset,
  }: {
    error: ClientError;
    onReset: () => void;
  }) => ReactNode | undefined;
};

type ErrorBoundaryState = {
  render?: ({
    error,
    onReset,
  }: {
    error: ClientError;
    onReset: () => void;
  }) => ReactNode | undefined;
  error?: ClientError;
};

export class PostIdErrorBoundary extends Component<Props, ErrorBoundaryState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      render: props.render,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: ClientError) {
    if (
      error?.severity != null &&
      ["critial", "fatal"].includes(error.severity)
    ) {
      // 明示的にfatal, criticalにしたものは全体のErrorBoundaryで補足する
      throw error;
    } else if (error?.severity == null) {
      // 補足できなかったものは全体のErrorBoundaryで補足する
      throw error;
    }
    return { error };
  }

  componentDidCatch(err: Error, errInfo: ErrorInfo) {
    // You can use your own error logging service here
    if (err instanceof ClientError) {
      this.setState((state) => {
        return {
          render: state.render,
          error: err,
        };
      });
    } else {
      this.setState((state) => {
        return {
          render: state.render,
          error: new ErrorTransformer().transform(err),
        };
      });
    }

    new ClientLogger().error({
      error: err,
      info: errInfo,
    });
  }

  componentDidMount() {
    window.addEventListener(
      "unhandledrejection",
      (e: PromiseRejectionEvent) => {
        // 全体のErrorBoundaryで補足する
        // TODO: エラーの型 unhandledrejectionの場合の値を入れる
        throw new Error(e.reason, { cause: e.reason });
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      (e: PromiseRejectionEvent) => {
        // 全体のErrorBoundaryで補足する
        throw new Error(e.reason, { cause: e.reason });
      }
    );
  }

  render(): ReactNode {
    // 個別にエラーを描画したい場合はrenderを渡す
    if (this.state.render && this.state.error) {
      return this.state.render({
        error: this.state.error,
        onReset: () => {
          this.setState((prev) => {
            return {
              error: undefined,
              render: prev.render,
            };
          });
        },
      });
    }
    // デフォルトで描画する場合
    if (this.state.error) {
      return (
        <ErrorScreen
          error={this.state.error}
          onReset={() => {
            this.setState((prev) => {
              return {
                error: undefined,
                render: prev.render,
              };
            });
          }}
        />
      );
    }
    return this.props.children;
  }
}
