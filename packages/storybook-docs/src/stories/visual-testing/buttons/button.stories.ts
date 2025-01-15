/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button-collection';

type Element = Components.IxButton & { defaultSlot: string };

const meta = {
  title: 'Visual-Testing',
  tags: [],
  render: () => html`<button-collection></button-collection>`,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Buttons: Story = {};

Buttons.play = async ({ canvasElement }) => {
  canvasElement.style.setProperty('--ix-spinner-animation-duration', '0s');
  canvasElement.classList.add('percy-selector-placeholder');
};
