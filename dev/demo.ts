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

import { LitElement, html, customElement } from 'lit-element';
import '../st-horizontal-tabs';
import { StHorizontalTab } from '../st-horizontal-tabs.model';

@customElement('demo-snippet')
export class DemoSnippet extends LitElement {

  public options: StHorizontalTab[] = [{
    id: 'option-1',
    text: 'Option1'
  },
  {
    id: 'option-2',
    text: 'Option2'
  },
  {
    id: 'option-3',
    text: 'Option3'
  }];

  public activeOption: StHorizontalTab = this.options[0];

  render() {
    return html`<st-horizontal-tabs
            .options="${this.options}"
            .activeOption="${this.activeOption}"></st-horizontal-tabs>`;
  }


}


