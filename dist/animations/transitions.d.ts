import { TransitionOptions } from '../types';
export declare class Transition {
    private element;
    private options;
    constructor(element: HTMLElement, options?: Partial<TransitionOptions>);
    fadeIn(): Animation;
    fadeOut(): Animation;
    slideIn(direction?: 'left' | 'right' | 'top' | 'bottom'): Animation;
    slideOut(direction?: 'left' | 'right' | 'top' | 'bottom'): Animation;
}
