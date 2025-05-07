import { BaseAnimation } from './base';
import { LoadingOptions } from '../types';
export declare class Loading extends BaseAnimation {
    protected options: LoadingOptions;
    private container;
    constructor(element: HTMLElement, options?: Partial<LoadingOptions>);
    private createContainer;
    private initializeElement;
    private createSpinner;
    private createDots;
    private createPulse;
    private createWave;
    updateOptions(newOptions: Partial<LoadingOptions>): void;
    destroy(): void;
}
