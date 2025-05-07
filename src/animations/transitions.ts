import { TransitionOptions } from '../types';

export class Transition {
  private element: HTMLElement;
  private options: TransitionOptions;

  constructor(element: HTMLElement, options: Partial<TransitionOptions> = {}) {
    this.element = element;
    this.options = {
      duration: 300,
      easing: 'ease-in-out',
      states: {
        initial: { opacity: 1 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      },
      ...options,
    };
  }

  fadeIn(): Animation {
    return this.element.animate(
      [
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        duration: this.options.duration,
        easing: this.options.easing,
        fill: 'forwards',
      }
    );
  }

  fadeOut(): Animation {
    return this.element.animate(
      [
        { opacity: 1 },
        { opacity: 0 },
      ],
      {
        duration: this.options.duration,
        easing: this.options.easing,
        fill: 'forwards',
      }
    );
  }

  slideIn(direction: 'left' | 'right' | 'top' | 'bottom' = 'left'): Animation {
    const translate = {
      left: ['-100%', '0%'],
      right: ['100%', '0%'],
      top: ['0%', '-100%'],
      bottom: ['0%', '100%'],
    };

    const property = direction === 'left' || direction === 'right' ? 'translateX' : 'translateY';

    return this.element.animate(
      [
        { [property]: translate[direction][0] },
        { [property]: translate[direction][1] },
      ],
      {
        duration: this.options.duration,
        easing: this.options.easing,
        fill: 'forwards',
      }
    );
  }

  slideOut(direction: 'left' | 'right' | 'top' | 'bottom' = 'left'): Animation {
    const translate = {
      left: ['0%', '-100%'],
      right: ['0%', '100%'],
      top: ['0%', '-100%'],
      bottom: ['0%', '100%'],
    };

    const property = direction === 'left' || direction === 'right' ? 'translateX' : 'translateY';

    return this.element.animate(
      [
        { [property]: translate[direction][0] },
        { [property]: translate[direction][1] },
      ],
      {
        duration: this.options.duration,
        easing: this.options.easing,
        fill: 'forwards',
      }
    );
  }
} 