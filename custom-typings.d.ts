// declaration.d.ts
declare module '*.css';

declare module '!!raw-loader!*' {
const contents: string
export = contents
}