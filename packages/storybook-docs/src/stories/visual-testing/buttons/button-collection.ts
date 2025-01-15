/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('button-collection')
export class ButtonCollection extends LitElement {
  override render() {
    return html`
      <h1>Buttons</h1>
      <ix-button>Hallo</ix-button>
      <ix-button variant="secondary">Hallo</ix-button>
      <ix-button variant="danger">Hallo</ix-button>
      <ix-button outline>Hallo</ix-button>
      <ix-button variant="secondary" outline>Hallo</ix-button>
      <ix-button variant="danger" outline>Hallo</ix-button>
      <ix-button ghost>Hallo</ix-button>
      <ix-button variant="secondary" ghost>Hallo</ix-button>
      <ix-button variant="danger" ghost>Hallo</ix-button>

      <ix-button disabled>Hallo</ix-button>
      <ix-button disabled variant="secondary">Hallo</ix-button>
      <ix-button disabled variant="danger">Hallo</ix-button>
      <ix-button disabled outline>Hallo</ix-button>
      <ix-button disabled variant="secondary" outline>Hallo</ix-button>
      <ix-button disabled variant="danger" outline>Hallo</ix-button>
      <ix-button disabled ghost>Hallo</ix-button>
      <ix-button disabled variant="secondary" ghost>Hallo</ix-button>
      <ix-button disabled variant="danger" ghost>Hallo</ix-button>

      <h1>Loading Buttons</h1>
      <ix-button loading>Hallo</ix-button>
      <ix-button loading variant="secondary">Hallo</ix-button>
      <ix-button loading variant="danger">Hallo</ix-button>
      <ix-button loading outline>Hallo</ix-button>
      <ix-button loading variant="secondary" outline>Hallo</ix-button>
      <ix-button loading variant="danger" outline>Hallo</ix-button>
      <ix-button loading ghost>Hallo</ix-button>
      <ix-button loading variant="secondary" ghost>Hallo</ix-button>
      <ix-button loading variant="danger" ghost>Hallo</ix-button>

      <ix-button loading disabled>Hallo</ix-button>
      <ix-button loading disabled variant="secondary">Hallo</ix-button>
      <ix-button loading disabled variant="danger">Hallo</ix-button>
      <ix-button loading disabled outline>Hallo</ix-button>
      <ix-button loading disabled variant="secondary" outline>Hallo</ix-button>
      <ix-button loading disabled variant="danger" outline>Hallo</ix-button>
      <ix-button loading disabled ghost>Hallo</ix-button>
      <ix-button loading disabled variant="secondary" ghost>Hallo</ix-button>
      <ix-button loading disabled variant="danger" ghost>Hallo</ix-button>

      <h1>Button Group</h1>
      <div class="btn-group">
        <ix-button outline>Left</ix-button>
        <ix-button>Middle</ix-button>
        <ix-button outline>Right</ix-button>
      </div>
    `;
  }
}
