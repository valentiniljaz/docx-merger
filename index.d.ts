import type { OutputType, generateAsync } from 'jszip';

export interface DocxMergerOptions {
    pageBreak?: boolean;
    style?: string;
}

export default class DocxMerger {
    initialize(options: DocxMergerOptions, files: Buffer[]): Promise<void>;
    save<T extends OutputType>(outputType: T): ReturnType<typeof generateAsync<T>>;
}