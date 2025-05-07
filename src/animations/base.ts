import { AnimationOptions } from '../types';

export class BaseAnimation {
  protected element: HTMLElement;
  protected options: AnimationOptions;
  protected animation: Animation | null = null;

  constructor(element: HTMLElement, options: Partial<AnimationOptions> = {}) {
    this.element = element;
    this.options = {
      duration: 300,
      easing: 'ease',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards',
      ...options,
    };
  }

  protected createAnimation(keyframes: Keyframe[]): void {
    this.animation = this.element.animate(keyframes, {
      duration: this.options.duration,
      easing: this.options.easing,
      delay: this.options.delay,
      iterations: this.options.iterations,
      direction: this.options.direction,
      fill: this.options.fill,
    });

    if (this.options.onStart) {
      this.animation.addEventListener('start', this.options.onStart);
    }

    if (this.options.onEnd) {
      this.animation.addEventListener('finish', this.options.onEnd);
    }

    if (this.options.onCancel) {
      this.animation.addEventListener('cancel', this.options.onCancel);
    }
  }

  public play(): Promise<void> {
    if (!this.animation) {
      throw new Error('No animation created');
    }
    return this.animation.play() as unknown as Promise<void>;
  }

  public pause(): void {
    if (this.animation) {
      this.animation.pause();
    }
  }

  public resume(): void {
    if (this.animation) {
      this.animation.play();
    }
  }

  public cancel(): void {
    if (this.animation) {
      this.animation.cancel();
    }
  }

  public finish(): void {
    if (this.animation) {
      this.animation.finish();
    }
  }

  public reverse(): void {
    if (this.animation) {
      this.animation.reverse();
    }
  }

  public updatePlaybackRate(rate: number): void {
    if (this.animation) {
      this.animation.playbackRate = rate;
    }
  }

  public getCurrentTime(): number {
    return this.animation ? this.animation.currentTime as number : 0;
  }

  public isPlaying(): boolean {
    return this.animation ? this.animation.playState === 'running' : false;
  }

  public isPaused(): boolean {
    return this.animation ? this.animation.playState === 'paused' : false;
  }

  public isFinished(): boolean {
    return this.animation ? this.animation.playState === 'finished' : false;
  }

  public updateOptions(newOptions: Partial<AnimationOptions>): void {
    this.options = { ...this.options, ...newOptions };
  }

  public destroy(): void {
    if (this.animation) {
      if (this.options.onStart) {
        this.animation.removeEventListener('start', this.options.onStart);
      }
      if (this.options.onEnd) {
        this.animation.removeEventListener('finish', this.options.onEnd);
      }
      if (this.options.onCancel) {
        this.animation.removeEventListener('cancel', this.options.onCancel);
      }
      this.animation.cancel();
      this.animation = null;
    }
  }
} 