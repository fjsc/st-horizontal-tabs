import { LitElement, TemplateResult } from 'lit-element';
import '../../src/components/st-horizontal-tabs';
declare enum TemplateSections {
    demo = "Demo",
    api = "Api",
    sourceCode = "Source Code"
}
export declare class DemoTemplate extends LitElement {
    componentName: string;
    componentDescription: string;
    sourceCode: string;
    static styles: import("lit-element").CSSResult;
    currentSection: TemplateSections;
    render(): TemplateResult;
    getTabs(): TemplateResult;
    setTab(tab: TemplateSections): void;
}
export {};
//# sourceMappingURL=demo-template.d.ts.map