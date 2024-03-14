import { ClientLogger } from "@/lib/clientLogger";
import { Component, ErrorInfo, ReactNode } from "react";

type ErrorBoundaryState = { error?: { code?: string; message?: string } };
type ErrorBoundaryProps = { children: ReactNode };

// TODO: 非検査例外（例: DBのメモリが足りない、DBの容量を超えた、NetworkErrorとか）
// AppRESTErrorHandlerをErrorBoundaryに実装して、'unhandledrejection'イベント時にErrorBoundaryが表示されるようにする
// 明示的にcatchできず、ランタイムで発生(throw)した際に自動的にErrorBoundaryが呼ばれる(と思う)
export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: ErrorBoundaryState = {};

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }
  static getDerivedStateFromError(error?: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { error: { code: error?.name, message: error?.message } };
  }

  componentDidCatch(err: Error, errInfo: ErrorInfo) {
    // You can use your own error logging service here
    new ClientLogger().error({
      error: err,
      info: errInfo,
    });
  }

  render() {
    if (this.state.error) {
      return <div>{JSON.stringify(this.state.error, null, 2)}</div>;
    }

    return this.props.children;
  }
}
