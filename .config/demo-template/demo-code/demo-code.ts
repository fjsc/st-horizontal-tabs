/*
 * © 2020 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import '@vanillawc/wc-markdown/index'

import 'prismjs';
import 'prismjs/components/prism-typescript';
import styles from 'prismjs/themes/prism.css';

declare var Prism;

@customElement('demo-code')
export class DemoCode extends LitElement {

  @property() code: string;
  @property() language: string;

  static styles = css`${unsafeCSS(styles)}`;

  render(): TemplateResult {
    return html`
      <pre class="language-${this.language}">
        <code id="code" class="language-${this.language}">${this.code}</code>
      </pre>
    `;
  }

  public updated() {
    Prism.highlightElement(this.shadowRoot.getElementById('code'));
  }

}
