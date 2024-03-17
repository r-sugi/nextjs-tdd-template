import { FC } from "react";
import { ClientErrorResult } from "@/error/filter/clientAppError.filter";

type Props = {
  error: ClientErrorResult;
};

// TODO: 非検査例外（例: DBのメモリが足りない、DBの容量を超えた、NetworkErrorとか）
// AppRESTErrorHandlerをErrorBoundaryに実装して、'unhandledrejection'イベント時にErrorBoundaryが表示されるようにする
// 明示的にcatchできず、ランタイムで発生(throw)した際に自動的にErrorBoundaryが呼ばれる(と思う)
// PostId専用
export class PostIdErrorBoundary extends Component<ErrorBoundaryProps> {
  state: ErrorBoundaryState = {};

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(error?: Error) {
    if (error?.severity !== "error") {
      throw error; // ここでthrowすると、ErrorBoundary.tsxが呼ばれる(or renderで明示的に呼ぶ)
    }

    return { error: { code: error?.name, message: error?.message } };
  }

  render(): ReactNode {
    // TODO: サーバー側のパターンと一緒
    // this.props.render

    // Root
    if (this.state.error.severity) {
      return this.state.error;
    }

    if (this.state.error && process.env.NODE_ENV === "production") {
      return <ErrorScreen {...mtgErrorMessage} />;
    }
    if (this.state.error) {
      return <div>{JSON.stringify(this.state.error, null, 2)}</div>;
    }

    return this.props.children;
  }
}
