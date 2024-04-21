import { ClientLogger } from "@/lib/clientLogger";
import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorScreen } from "./_error.screen";
import { ErrorTransformer } from "@/error/transformer/error.transformer";
import { ClientError } from "@/error/errors/clientError";

type ErrorBoundaryState = { error?: Error };
type ErrorBoundaryProps = { children: ReactNode };

const expectedErrorNames = [
  "TypeError", // 例: TypeError: Cannot read properties of null by sessionStorage value is null
];

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: ErrorBoundaryState = {
    error: undefined,
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    if (expectedErrorNames.includes(error?.name ?? "")) {
      return {
        error: {
          code: error?.name,
          message: error?.message,
          stack: error?.stack,
        },
      };
    }
    // CriticalErrorが増える、、
    throw new FatalError(error?.message, {
      code: error?.name,
      cause: error, // エラーが発生した箇所
      stack: error?.stack, // 直前でthrowしたファイル catchの都度appendする
    });
  }

  componentDidCatch(err: Error, errInfo: ErrorInfo) {
    if (err instanceof ClientError) {
      this.setState(() => {
        return {
          error: err,
        };
      });
    } else {
      this.setState(() => {
        return {
          error: new ErrorTransformer().transform(err),
        };
      });
    }

    new ClientLogger().error({
      err,
      errInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorScreen
          error={this.state.error}
          onReset={() => {
            this.setState(() => {
              return {
                error: undefined,
              };
            });
          }}
        />
      );
    }

    return this.props.children;
  }
}
