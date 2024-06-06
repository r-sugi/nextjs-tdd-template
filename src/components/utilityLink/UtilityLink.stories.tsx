/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from 'react';

import { UtilityLink } from './UtilityLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/UtilityLink',
  component: UtilityLink,
  tags: ['autodocs'],
} satisfies Meta<typeof UtilityLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col items-start gap-8">
        <UtilityLink href="#">リンク</UtilityLink>

        <UtilityLink href="https://www.digital.go.jp" target="_blank">
          外部リンク
        </UtilityLink>
      </div>
    );
  },
};
