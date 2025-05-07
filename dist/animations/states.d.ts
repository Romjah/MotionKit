import { BaseAnimation } from './base';
import { StateOptions } from '../types';
export declare class States extends BaseAnimation {
    protected options: StateOptions;
    private icon;
    private message;
    constructor(element: HTMLElement, options?: Partial<StateOptions>);
    private initializeElement;
    private createIcon;
    private createMessage;
    private getStateStyles;
    private getIconContent;
    setState(state: 'success' | 'error' | 'warning' | 'info' | 'loading'): void;
    setMessage(message: string): void;
    setIcon(show: boolean): void;
    destroy(): void;
}
