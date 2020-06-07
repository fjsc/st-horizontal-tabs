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

import { LitElement, html, customElement, TemplateResult, internalProperty } from 'lit-element';
import '../src/components/st-horizontal-tabs'
import { StHorizontalTab } from '../src/models/st-horizontal-tabs.model';


/** NOT CHANGE!! */
const demoCode = require('!!raw-loader!./demo-snippet')
import '../.config/demo-template/demo-template';
/** DEMO REQUIRED IMPORTS */


@customElement('demo-snippet')
export class DemoSnippet extends LitElement {

  @internalProperty()
  protected options: StHorizontalTab[] = [{
    id: 'tab1',
    text: 'Tab number 1'
  }, {
    id: 'tab2',
    text: 'Tab number 2'
  }];

  @internalProperty()
  protected activeOption: StHorizontalTab = this.options[0];

  @internalProperty()
  public description: string = 'Horizontal tabs component enables the user to interact with the view. Use when the application requires split view into multiple sections.';

  render(): TemplateResult {
    return html`
      <demo-template 
        componentName="St Horizontal Tabs"
        componentDescription="${this.description}"
        sourceCode="${demoCode.default}">


        <st-horizontal-tabs 
          .options="${this.options}"
          .activeOption="${this.activeOption}"
          @changed-option="${this.changedOption}"></st-horizontal-tabs>


      </demo-template>
    `;
  }

  public changedOption(event): void {
    this.activeOption = event.detail;
  }
}
