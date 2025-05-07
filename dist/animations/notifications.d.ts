import { NotificationOptions } from '../types';
export declare class Notification {
    private element;
    private options;
    private container;
    constructor(element: HTMLElement, options?: Partial<NotificationOptions>);
    private createContainer;
    private getTypeStyles;
    show(message: string): Animation;
    private getInitialTransform;
    hide(): void;
    destroy(): void;
}
