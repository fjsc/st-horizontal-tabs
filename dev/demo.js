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
import { LitElement, html, customElement } from 'lit-element';
import '../st-horizontal-tabs';
let DemoSnippet = class DemoSnippet extends LitElement {
    constructor() {
        super(...arguments);
        this.options = [{
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
        this.activeOption = this.options[0];
    }
    render() {
        return html `<st-horizontal-tabs
            .options="${this.options}"
            .activeOption="${this.activeOption}"
            ></st-horizontal-tabs>`;
    }
};
DemoSnippet = __decorate([
    customElement('demo-snippet')
], DemoSnippet);
export { DemoSnippet };
//# sourceMappingURL=demo.js.map