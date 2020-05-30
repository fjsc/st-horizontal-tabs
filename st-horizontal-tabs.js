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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import { StHorizontalTabStatus } from './st-horizontal-tabs.model';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let StHorizontalTabs = class StHorizontalTabs extends LitElement {
    constructor() {
        super(...arguments);
        /** An array of StHorizontalTab objects (see below) that defines the links
         * that will appear and that will be disabled
         */
        this.options = [];
    }
    render() {
        return html `
    <nav class="st-horizontal-tabs">
      ${this.options.map((option, i) => html `
      <a class="tab ${this.getTabClasses(option)}"
        @click="${this.activateOption(option)}"
        href="javascript:void(0)"
        id="${this.qaTag + '-tab-' + i}">${option.text}</a>`)}
      <slot></slot>
    </nav>`;
    }
    activateOption(option) {
        this.activeOption = option;
        let myEvent = new CustomEvent('changed-option', {
            detail: option,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }
    getTabClasses(tab) {
        const classes = [];
        if (tab.status) {
            classes.push(StHorizontalTabStatus[tab.status]);
        }
        if (this.activeOption === tab) {
            classes.push('tab--active');
        }
        return classes.join(' ');
    }
};
StHorizontalTabs.styles = css `
    :host {
      display: block;
    }

    .st-horizontal-tabs {
      position: relative;
      display: flex;
      width: 100%;
      list-style: none;
   }
   
   .tab {
      display: inline-block;
      text-align: center;
      box-sizing: border-box;
      line-height: 1;
      padding: 0 30px 7px 30px;
      margin-top: auto;
      cursor: pointer;
   }
  
  .tab--active {
    padding-bottom: 5px;
  }
   
  .line {
      display: block;
      transition: .4s ease-in-out 0s;
   }
  `;
__decorate([
    property()
], StHorizontalTabs.prototype, "activeOption", void 0);
__decorate([
    property()
], StHorizontalTabs.prototype, "options", void 0);
__decorate([
    property()
], StHorizontalTabs.prototype, "qaTag", void 0);
StHorizontalTabs = __decorate([
    customElement('st-horizontal-tabs')
], StHorizontalTabs);
export { StHorizontalTabs };
//# sourceMappingURL=st-horizontal-tabs.js.map