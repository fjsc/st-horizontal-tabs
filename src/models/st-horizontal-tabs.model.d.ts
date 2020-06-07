export declare enum StHorizontalTabStatus {
    warning = "warning",
    error = "error"
}
export interface StHorizontalTab {
    id: string;
    text: string;
    status?: StHorizontalTabStatus;
}
export interface StHorizontalTabSchema {
    id: string;
    text: TranslateableElement;
}
export interface TranslateableElement {
    key: string;
    translate: boolean;
}
//# sourceMappingURL=st-horizontal-tabs.model.d.ts.map