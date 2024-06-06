/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import type { ComponentProps } from 'react';

export type LabelProps = ComponentProps<'label'> & {
  isDisabled?: boolean;
};

export const Label = (props: LabelProps) => {
  const { children, className, isDisabled, ...rest } = props;

  return (
    <label
      className={`
        flex w-fit items-center gap-2 text-dns-16B-2
        ${isDisabled ? 'text-solid-grey-420' : 'text-solid-grey-900'}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </label>
  );
};
