import { ClientLogger } from "@/lib/clientLogger";
import { Component, ErrorInfo, ReactNode } from "react";

type ErrorBoundaryState = { error?: { code?: string; message?: string } };
type ErrorBoundaryProps = { children: ReactNode };

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
