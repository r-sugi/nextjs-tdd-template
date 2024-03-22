import { ClientError } from "@/error/transformer/clientAppError.transformer";
import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorScreen } from "../../../../pages/_error.screen";
import { ClientLogger } from "@/lib/clientLogger";

type Props = {
  children: ReactNode;
  render?: ({ error }: { error: ClientError }) => ReactNode | undefined;
};

type ErrorBoundaryState = {
  render?: ({ error }: { error: ClientError }) => ReactNode | undefined;
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
      ["error", "fatal"].includes(error.severity)
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
      return this.state.render({ error: this.state.error });
    }
    // デフォルトで描画する場合
    if (this.state.error) {
      return <ErrorScreen error={this.state.error} />;
    }

    return this.props.children;
  }
}
