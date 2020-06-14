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

import { LitElement, html, customElement, property, css, unsafeCSS, TemplateResult } from 'lit-element';
import { StHorizontalTab, StHorizontalTabStatus } from '../models/st-horizontal-tabs.model';

import styles from './st-horizontal-tabs.css';

/**
 * Documentation StHorizontalTabs
 * @noInheritDoc
 */
@customElement('st-horizontal-tabs')
export class StHorizontalTabs extends LitElement {

  /**
   * @ignore
   */
  static styles = css`${unsafeCSS(styles)}`;

  /** Current active option */
  @property()
  public activeOption: StHorizontalTab;

  /** An array of StHorizontalTab objects (see below) that defines the links
   * that will appear and that will be disabled
   */
  @property()
  public options: StHorizontalTab[] = [];

  /** Prefix used to generate the id values for qa tests */
  @property()
  public qaTag: string;

  render(): TemplateResult {
    return html`
    <nav class="st-horizontal-tabs">
      ${
        this.options.map(
          (option: StHorizontalTab, i: number) => this.getTabElement(option, i)
        )
      }
      <slot></slot>
    </nav>`;
  }

  /**
   * Returns single tab
   * @param option
   * @param index
   */
  public getTabElement(option: StHorizontalTab, index: number): TemplateResult {
    return html`
      <a class="tab ${this.getTabClasses(option)}"
        @click="${() => this.activateOption(option)}"
        href="javascript:void(0)"
        id="${this.qaTag + '-tab-' + index}">${option.text}</a>
    `;
  }

  public activateOption(option: StHorizontalTab): void {
    const myEvent = new CustomEvent('changed-option', {
      detail: option
    });
    this.dispatchEvent(myEvent);
  }

  public getTabClasses(tab: StHorizontalTab): string {
    const classes: Array<string> = [];
    if (tab.status) {
      classes.push(StHorizontalTabStatus[tab.status]);
    }

    if (this.activeOption === tab) {
      classes.push('tab--active');
    }
    return classes.join(' ');
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'st-horizontal-tabs': StHorizontalTabs;
  }
}
