import { AnimationOptions } from '../types';
export declare class BaseAnimation {
    protected element: HTMLElement;
    protected options: AnimationOptions;
    protected animation: Animation | null;
    constructor(element: HTMLElement, options?: Partial<AnimationOptions>);
    protected createAnimation(keyframes: Keyframe[]): void;
    play(): Promise<void>;
    pause(): void;
    resume(): void;
    cancel(): void;
    finish(): void;
    reverse(): void;
    updatePlaybackRate(rate: number): void;
    getCurrentTime(): number;
    isPlaying(): boolean;
    isPaused(): boolean;
    isFinished(): boolean;
    updateOptions(newOptions: Partial<AnimationOptions>): void;
    destroy(): void;
}
