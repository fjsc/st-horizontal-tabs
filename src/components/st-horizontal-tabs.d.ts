import { LitElement, TemplateResult } from 'lit-element';
import { StHorizontalTab } from '../models/st-horizontal-tabs.model';
export declare class StHorizontalTabs extends LitElement {
    static styles: import("lit-element").CSSResult;
    /** Current active option */
    activeOption: StHorizontalTab;
    /** An array of StHorizontalTab objects (see below) that defines the links
     * that will appear and that will be disabled
     */
    options: StHorizontalTab[];
    /** Prefix used to generate the id values for qa tests */
    qaTag: string;
    render(): TemplateResult;
    /**
     * Returns single tab
     * @param option
     * @param index
     */
    getTabElement(option: StHorizontalTab, index: number): TemplateResult;
    activateOption(option: StHorizontalTab): void;
    getTabClasses(tab: StHorizontalTab): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'st-horizontal-tabs': StHorizontalTabs;
    }
}
//# sourceMappingURL=st-horizontal-tabs.d.ts.map