import { BaseAnimation } from './base';
import { TransitionOptions, TransitionState } from '../types';
export declare class Transition extends BaseAnimation {
    protected options: TransitionOptions;
    private currentState;
    constructor(element: HTMLElement, options?: Partial<TransitionOptions>);
    private initializeElement;
    private getStateStyles;
    setState(state: string): void;
    addState(name: string, styles: TransitionState): void;
    removeState(name: string): void;
    getCurrentState(): string;
    getAvailableStates(): string[];
    updateOptions(newOptions: Partial<TransitionOptions>): void;
    destroy(): void;
    static fade(element: HTMLElement): Transition;
    static slide(element: HTMLElement): Transition;
    static scale(element: HTMLElement): Transition;
    static flip(element: HTMLElement): Transition;
    fadeIn(): Promise<void>;
    fadeOut(): Promise<void>;
    slideIn(direction?: 'left' | 'right' | 'top' | 'bottom'): Promise<void>;
    slideOut(direction?: 'left' | 'right' | 'top' | 'bottom'): Promise<void>;
    scaleIn(): Promise<void>;
    scaleOut(): Promise<void>;
    custom(property: string, from: string | number, to: string | number): Promise<void>;
}
