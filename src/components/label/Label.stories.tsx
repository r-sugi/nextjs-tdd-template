/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from 'react';

import { Label } from './Label';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <Label>ラベル</Label>
        <Label isDisabled={true}>ラベル</Label>
      </div>
    );
  },
};
