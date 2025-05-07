import { BaseAnimation } from './base';
import { NotificationOptions } from '../types';
export declare class Notification extends BaseAnimation {
    protected options: NotificationOptions;
    private container;
    private messageElement;
    private timer;
    constructor(element: HTMLElement, options?: Partial<NotificationOptions>);
    private createContainer;
    private createMessageElement;
    private createCloseButton;
    private initializeElement;
    setMessage(message: string): void;
    close(): Promise<void>;
    destroy(): void;
}
