import { LitElement, TemplateResult } from 'lit-element';
import '../src/components/st-horizontal-tabs';
import { StHorizontalTab } from '../src/models/st-horizontal-tabs.model';
import '../.config/demo-template/demo-template';
/** DEMO REQUIRED IMPORTS */
export declare class DemoSnippet extends LitElement {
    protected options: StHorizontalTab[];
    protected activeOption: StHorizontalTab;
    description: string;
    render(): TemplateResult;
    changedOption(event: any): void;
}
//# sourceMappingURL=demo-snippet.d.ts.map