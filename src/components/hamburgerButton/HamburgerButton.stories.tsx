/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React, { useState } from 'react';

import { HamburgerButton } from './HamburgerButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/HamburgerButton',
  component: HamburgerButton,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['row', 'col'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof HamburgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: 'メニュー',
    align: 'row',
    isOpen: false,
  },
  render: () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div className="m-4 flex flex-col gap-4">
        <HamburgerButton
          align={'row'}
          aria-controls="menu"
          aria-expanded={isMenuOpen}
          isOpen={isMenuOpen}
          label={isMenuOpen ? '閉じる' : 'メニュー'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="h-40 w-60 border border-solid-grey-420 p-4" id="menu">
            メニューを表示中
          </div>
        )}
      </div>
    );
  },
};

export const Variant: Story = {
  args: {
    label: 'メニュー',
    align: 'row',
    isOpen: false,
  },
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <section>
          <h2 className="mb-8 text-std-32B-5">横型</h2>
          <div className="flex flex-col gap-4">
            <HamburgerButton align={'row'} isOpen={false} label={'メニュー'} />
            <HamburgerButton align={'row'} isOpen={true} label={'閉じる'} />
          </div>
        </section>
        <section>
          <h2 className="mb-8 text-std-32B-5">縦型</h2>
          <div className="flex flex-col gap-4">
            <HamburgerButton align={'col'} isOpen={false} label={'メニュー'} />
            <HamburgerButton align={'col'} isOpen={true} label={'閉じる'} />
          </div>
        </section>
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    label: 'メニュー',
    align: 'row',
    isOpen: false,
  },
};
