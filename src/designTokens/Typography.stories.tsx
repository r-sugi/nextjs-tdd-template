/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/tokens
 */
import React, { Fragment } from 'react';

import { Typography } from './Typography';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tokens/Typography',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return <Typography />;
  },
};
