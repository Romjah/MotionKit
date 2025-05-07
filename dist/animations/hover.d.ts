import { BaseAnimation } from './base';
import { HoverOptions } from '../types';
export declare class Hover extends BaseAnimation {
    protected options: HoverOptions;
    private isHovered;
    constructor(element: HTMLElement, options?: Partial<HoverOptions>);
    private initializeElement;
    private handleMouseEnter;
    private handleMouseLeave;
    private applyHoverStyles;
    private resetStyles;
    updateOptions(newOptions: Partial<HoverOptions>): void;
    destroy(): void;
    static lift(element: HTMLElement): Hover;
    static rotate(element: HTMLElement): Hover;
    static bounce(element: HTMLElement): Hover;
    static glow(element: HTMLElement): Hover;
}
