/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import type { ComponentProps } from 'react';

export const olStyle = 'pl-8 list-decimal [&_&]:list-lower-latin';

export type OlProps = ComponentProps<'ol'>;

export const Ol = (props: OlProps) => {
  const { children, className, ...rest } = props;

  return (
    <ol className={`${olStyle} ${className ?? ''}`} {...rest}>
      {children}
    </ol>
  );
};
