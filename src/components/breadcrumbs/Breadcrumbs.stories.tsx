/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from 'react';

import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from './Breadcrumbs';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <Breadcrumbs>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="home">
            ホーム
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="organization">
            組織情報
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="a">
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="b">
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className="text-oln-14N-1" isCurrent>
          長いページタイトルが入ります長いページタイトルが入ります
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  },
};
