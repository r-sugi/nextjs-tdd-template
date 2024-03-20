import { ClientError } from "@/error/transformer/clientAppError.transformer";
import { Component, ReactNode } from "react";
import { ErrorScreen } from "../ErrorScreen";

type Props = {
  children: ReactNode;
  render: ({ error }: { error: ClientError }) => ReactNode;
};

type ErrorBoundaryState = {
  render: ({ error }: { error: ClientError }) => ReactNode;
  error?: ClientError;
};

// TODO: 非検査例外（例: DBのメモリが足りない、DBの容量を超えた、NetworkErrorとか）
// AppRESTErrorHandlerをErrorBoundaryに実装して、'unhandledrejection'イベント時にErrorBoundaryが表示されるようにする
// 明示的にcatchできず、ランタイムで発生(throw)した際に自動的にErrorBoundaryが呼ばれる(と思う)

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
