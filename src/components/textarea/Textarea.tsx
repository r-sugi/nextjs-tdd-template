/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import { type ComponentProps, forwardRef } from 'react';


export type TextareaProps = ComponentProps<'textarea'> & {
  isError?: boolean;
  rows?: number;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function createTextarea(props, ref){
  const { className, isError, rows, ...rest } = props;

  return (
    <textarea
      className={`
        rounded-8 min-w-80 max-w-full bg-white p-4 text-std-16N-7 text-solid-grey-900
        ${
          rows
            ? 'h-auto'
            : 'min-h-[calc(3lh+2rem+2px)] max-h-[calc(10lh+2rem+2px)] [field-sizing:content]'
        }
        ${isError ? 'border-2 border-error-1' : 'border border-solid-grey-900'}
        focus:border-transparent focus:outline focus:outline-4 focus:outline-focus-yellow
        disabled:border-solid-grey-420 disabled:bg-solid-grey-50
        ${className ?? ''}
      `}
      ref={ref}
      rows={rows}
      {...rest}
    />
  );
});
