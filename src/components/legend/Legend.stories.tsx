/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from 'react';

import { Legend } from './Legend';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/Legend',
  component: Legend,
  tags: ['autodocs'],
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <Legend>凡例</Legend>
        <Legend isDisabled={true}>凡例</Legend>
      </div>
    );
  },
};
