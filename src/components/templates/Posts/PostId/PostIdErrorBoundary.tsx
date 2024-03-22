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
    if (error?.severity != null && error?.severity !== "error") {
      // fatal, criticalの場合は再throwして全体のErrorBoundaryで処理する
      throw error;
    }
    return { error };
  }

  componentDidCatch(err: Error, errInfo: ErrorInfo) {
    // You can use your own error logging service here
    // TODO: loggerを使ってOK?
    new ClientLogger().error({
      error: err,
      info: errInfo,
    });
  }

  // TODO: ErrorBoundary.tsxにも追加する必要があるか
  componentDidMount() {
    window.addEventListener(
      "unhandledrejection",
      (e: PromiseRejectionEvent) => {
        throw new Error(e.reason);
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      (e: PromiseRejectionEvent) => {
        throw new Error(e.reason);
      }
    );
  }

  render(): ReactNode {
    // 個別にエラーを描画したい場合はrenderを渡す
    if (this.state.render && this.state.error) {
      return this.state.render({ error: this.state.error });
    }

    if (this.state.error && process.env.NODE_ENV === "production") {
      return <ErrorScreen error={this.state.error} />;
    }

    if (this.state.error) {
      return <div>{JSON.stringify(this.state.error, null, 2)}</div>;
    }

    return this.props.children;
  }
}
