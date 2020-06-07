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

import {customElement, html, internalProperty, LitElement, TemplateResult} from 'lit-element';
import '../src/components/st-horizontal-tabs';
import {StHorizontalTab} from '../src/models/st-horizontal-tabs.model';
import '../.config/demo-template/demo-template';


/** NOT CHANGE!! */
const demoCode = require('!!raw-loader!./demo-snippet');
const sourceCode = require('!!raw-loader!../src/components/st-horizontal-tabs');

/** DEMO REQUIRED IMPORTS */


@customElement('demo-snippet')
export class DemoSnippet extends LitElement {

  @internalProperty()
  protected options: StHorizontalTab[] = [{
    id: 'tab1',
    text: 'Tab number 1',
  }, {
    id: 'tab2',
    text: 'Tab number 2',
  }];

  @internalProperty()
  protected activeOption: StHorizontalTab = this.options[0];

  @internalProperty()
  public description: string = 'Horizontal tabs component enables the user to interact with the view. Use when the application requires split view into multiple sections.';

  @internalProperty()
  public design: string = 'Tabs appear in a single, non-scrollable row, above their content. The width of each tab is dependent on its label. To ensure that all tabs appear in the container, avoid using more than seven tabs and limit labels to one or two words.';

  render(): TemplateResult {
    return html`
      <demo-template
        componentName="St Horizontal Tabs"
        componentDescription="${this.description}"
        designBehavior="${this.design}"
        sourceCode="${sourceCode.default}"
        demoSourceCode="${demoCode.default}">

       <section slot="content">
          <st-horizontal-tabs
          .options="${this.options}"
          .activeOption="${this.activeOption}"
          @changed-option="${this.changedOption}"></st-horizontal-tabs>
       </section>

       <section slot="usage">
        <ul class="list">
            <li> Use tabs for alternate views within the sidenav, the aside or main content area.</li>
            <li> Don’t use tabs to break user interactions into a series of steps. Serial workflows are best presented in a wizard. </li>
            <li> Avoid using tabs in cards and modals.</li>
            <li> Ensure that the content in each view is independent of the content in other views.</li>
            <li> Don’t force users to navigate back and forth to compare data–keep such content in the same view.</li>
            <li> Avoid cross-linking between tabs.</li>
            <li> If the content within a view is broad, divide it into subsections.</li>
            <li> Users should not have to move between tabs in order to complete a task</li>
            <li> Favor nouns over verbs, for example, Settings, Permissions, and Performance.</li>
            <li> Use title-style caps.</li>
            <li> Avoid using icons in labels.</li>
         </ul>
       </section>

      </demo-template>
    `;
  }

  public changedOption(event): void {
    this.activeOption = event.detail;
  }
}
