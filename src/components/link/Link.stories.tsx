/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from 'react';

import { Link } from './Link';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/Link',
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col items-start gap-8">
        <Link href="#">リンク</Link>

        <Link href="https://www.digital.go.jp" target="_blank">
          外部リンク
        </Link>

        <p>
          これは<Link href="#">文中のリンク</Link>です。
        </p>
      </div>
    );
  },
};
