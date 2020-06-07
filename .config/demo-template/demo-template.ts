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

import { LitElement, html, customElement, TemplateResult, property, css, internalProperty, unsafeCSS } from 'lit-element';
import '../../src/components/st-horizontal-tabs';
import styles from './demo-template.css';

enum TemplateSections {
    demo = 'Demo',
    api = 'Api',
    sourceCode = 'Source Code'
}

@customElement('demo-template')
export class DemoTemplate extends LitElement {

  @property() componentName: string;
  @property() componentDescription: string;
  @property() sourceCode: string;

  static styles = css`${unsafeCSS(styles)}`;

  @internalProperty()
  public currentSection: TemplateSections = TemplateSections.demo;

  render(): TemplateResult {
    return html`
    <div class="demo-template">
        <h1 class="demo-template__title">${this.componentName}</h1>
        <hr class="demo-template__hr">
        <div class="demo-template__description">${this.componentDescription}</div>
        <div class="demo-template__separator"></div>
        
        ${this.getTabs()}
        
        <div class="demo-template__content">
            ${this.currentSection === TemplateSections.sourceCode ? 
                html`<textarea>${this.sourceCode}</textarea>` : ''
            }
            <!--<wc-monaco-editor language="markdown"></wc-monaco-editor>-->
            ${this.currentSection === TemplateSections.demo ? html`
                <div class="content">
                    <slot></slot>
                </div>
            ` : ''}
        </div>

    </div>
    `;
  }

  public getTabs() {
    return html`
      <div class="tabs">
        ${Object.keys(TemplateSections).map((key: string) => 
        html `
            <div @click="${() => this.setTab(TemplateSections[key])}" 
                class="tab ${this.currentSection === TemplateSections[key] ? 'tab--active': ''}">
                ${TemplateSections[key]}
            </div>
        `)}
      </div>
    `
  }

  public setTab(tab: TemplateSections) {
      this.currentSection = tab;
  }
}
