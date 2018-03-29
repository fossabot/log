import { Chalk } from 'chalk';
export interface IOptions {
    title?: string;
    color?: Chalk;
    length?: number;
    middle?: boolean;
}
export interface IContent {
    [key: string]: string | number | boolean;
}
export default function log(content: IContent, option: IOptions): void;
