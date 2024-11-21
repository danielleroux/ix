/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { setPlatformHelpers } from '@stencil/core';

async function setupIcons() {
  if (typeof window === 'undefined') {
    return;
  }

  const iconComponent = window.customElements.get('ix-icon');
  if (iconComponent) {
    return;
  }

  console.warn(
    'ix-icon web component not loaded. Using local fallback version'
  );

  const ixIcons = await import('@siemens/ix-icons/loader');
  await ixIcons.defineCustomElements();
}

export function handlePlatformHelpers(config: IxConfig) {
  const platformHelpers: Pick<IxConfig, 'ael' | 'rel' | 'ce'> = {};

  if (config.ael) {
    platformHelpers.ael = config.ael;
  }

  if (config.rel) {
    platformHelpers.rel = config.rel;
  }

  if (config.ce) {
    platformHelpers.ce = config.ce;
  }

  setPlatformHelpers(platformHelpers);
}

export type IxConfig = {
  ael?: (
    el: unknown,
    name: string,
    cb: (...args: unknown[]) => unknown,
    opts: unknown
  ) => void;
  rel?: (
    el: unknown,
    name: string,
    cb: (...args: unknown[]) => unknown,
    opts: unknown
  ) => void;
  ce?: (eventName: string, opts: unknown) => unknown;
};

export default async function (config?: IxConfig) {
  await setupIcons();
  handlePlatformHelpers(config || {});
}
