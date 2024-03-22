import { ClientErrorObject } from "@/error/transformer/clientAppError.transformer";
import { ClientLogger } from "@/lib/clientLogger";
import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorScreen } from "./_error.screen";

type ErrorBoundaryState = { error?: Error };
type ErrorBoundaryProps = { children: ReactNode };

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: ErrorBoundaryState = {
    error: undefined,
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }
  // TODO: 型の指定がErrorになってしまう。ClientErrorObjectにしたい
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  // TODO: 型の指定がErrorになってしまう。ClientErrorObjectにしたい
  componentDidCatch(error: Error, errInfo: ErrorInfo) {
    this.setState({
      error,
    });

    new ClientLogger().error({
      error,
      errInfo,
    });
  }

  render() {
    // npm run startの場合はこちらが表示される
    if (this.state.error) {
      return <ErrorScreen error={this.state.error} />;
    }
    // 開発環境の場合はこちらが表示される
    return this.props.children;
  }
}
