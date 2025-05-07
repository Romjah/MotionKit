import { BaseAnimation } from './base';
import { TransitionOptions, TransitionState } from '../types';

export class Transition extends BaseAnimation {
  protected options: TransitionOptions;
  private currentState: string = 'initial';

  constructor(element: HTMLElement, options: Partial<TransitionOptions> = {}) {
    super(element, options);
    this.options = {
      duration: 300,
      easing: 'ease',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards',
      states: {
        initial: {
          opacity: 1,
          transform: 'none',
        },
        enter: {
          opacity: 1,
          transform: 'translateY(0)',
        },
        exit: {
          opacity: 0,
          transform: 'translateY(20px)',
        },
      },
      ...options,
    };

    this.initializeElement();
  }

  private initializeElement(): void {
    // Styles de base
    this.element.style.transition = `all ${this.options.duration}ms ${this.options.easing}`;
    this.element.style.willChange = 'opacity, transform';

    // Appliquer l'état initial
    this.setState('initial');
  }

  private getStateStyles(state: string): TransitionState {
    const stateStyles = this.options.states[state];
    if (!stateStyles) {
      throw new Error(`State "${state}" not defined in transition options`);
    }
    return stateStyles;
  }

  public setState(state: string): void {
    if (state === this.currentState) return;

    const styles = this.getStateStyles(state);
    Object.entries(styles).forEach(([property, value]) => {
      if (value !== undefined) {
        this.element.style[property as any] = value.toString();
      }
    });

    this.currentState = state;
  }

  public addState(name: string, styles: TransitionState): void {
    this.options.states[name] = styles;
  }

  public removeState(name: string): void {
    if (name === 'initial') {
      throw new Error('Cannot remove initial state');
    }
    delete this.options.states[name];
  }

  public getCurrentState(): string {
    return this.currentState;
  }

  public getAvailableStates(): string[] {
    return Object.keys(this.options.states);
  }

  public updateOptions(newOptions: Partial<TransitionOptions>): void {
    this.options = { ...this.options, ...newOptions };
    this.element.style.transition = `all ${this.options.duration}ms ${this.options.easing}`;
  }

  public destroy(): void {
    this.setState('initial');
  }

  // Predefined transitions
  static fade(element: HTMLElement): Transition {
    return new Transition(element, {
      states: {
        initial: { opacity: 1 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      },
    });
  }

  static slide(element: HTMLElement): Transition {
    return new Transition(element, {
      states: {
        initial: { transform: 'translateX(0)' },
        enter: { transform: 'translateX(0)' },
        exit: { transform: 'translateX(-100%)' },
      },
    });
  }

  static scale(element: HTMLElement): Transition {
    return new Transition(element, {
      states: {
        initial: { transform: 'scale(1)' },
        enter: { transform: 'scale(1)' },
        exit: { transform: 'scale(0)' },
      },
    });
  }

  static flip(element: HTMLElement): Transition {
    return new Transition(element, {
      states: {
        initial: { transform: 'rotateY(0deg)' },
        enter: { transform: 'rotateY(0deg)' },
        exit: { transform: 'rotateY(180deg)' },
      },
    });
  }

  public fadeIn(): Promise<void> {
    const keyframes = [
      { opacity: 0, transform: 'scale(0.95)' },
      { opacity: 1, transform: 'scale(1)' }
    ];

    this.createAnimation(keyframes);
    return this.play();
  }

  public fadeOut(): Promise<void> {
    const keyframes = [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.95)' }
    ];

    this.createAnimation(keyframes);
    return this.play();
  }

  public slideIn(direction: 'left' | 'right' | 'top' | 'bottom' = 'left'): Promise<void> {
    const distance = 20;
    let transform = '';

    switch (direction) {
      case 'left':
        transform = `translateX(-${distance}px)`;
        break;
      case 'right':
        transform = `translateX(${distance}px)`;
        break;
      case 'top':
        transform = `translateY(-${distance}px)`;
        break;
      case 'bottom':
        transform = `translateY(${distance}px)`;
        break;
    }

    const keyframes = [
      { opacity: 0, transform },
      { opacity: 1, transform: 'translate(0, 0)' }
    ];

    this.createAnimation(keyframes);
    return this.play();
  }

  public slideOut(direction: 'left' | 'right' | 'top' | 'bottom' = 'left'): Promise<void> {
    const distance = 20;
    let transform = '';

    switch (direction) {
      case 'left':
        transform = `translateX(-${distance}px)`;
        break;
      case 'right':
        transform = `translateX(${distance}px)`;
        break;
      case 'top':
        transform = `translateY(-${distance}px)`;
        break;
      case 'bottom':
        transform = `translateY(${distance}px)`;
        break;
    }

    const keyframes = [
      { opacity: 1, transform: 'translate(0, 0)' },
      { opacity: 0, transform }
    ];

    this.createAnimation(keyframes);
    return this.play();
  }

  public scaleIn(): Promise<void> {
    const keyframes = [
      { opacity: 0, transform: 'scale(0.8)' },
      { opacity: 1, transform: 'scale(1)' }
    ];

    this.createAnimation(keyframes);
    return this.play();
  }

  public scaleOut(): Promise<void> {
    const keyframes = [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.8)' }
    ];

    this.createAnimation(keyframes);
    return this.play();
  }

  public custom(property: string, from: string | number, to: string | number): Promise<void> {
    const keyframes = [
      { [property]: from },
      { [property]: to }
    ];

    this.createAnimation(keyframes);
    return this.play();
  }
} 