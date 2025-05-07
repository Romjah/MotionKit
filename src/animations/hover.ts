import { BaseAnimation } from './base';
import { HoverOptions } from '../types';

export class Hover extends BaseAnimation {
  protected options: HoverOptions;
  private isHovered: boolean = false;

  constructor(element: HTMLElement, options: Partial<HoverOptions> = {}) {
    super(element, options);
    this.options = {
      duration: 300,
      easing: 'ease',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards',
      scale: 1.05,
      rotate: 0,
      translateX: 0,
      translateY: 0,
      shadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      ...options,
    };

    this.initializeElement();
  }

  private initializeElement(): void {
    // Styles de base
    this.element.style.transition = `all ${this.options.duration}ms ${this.options.easing}`;
    this.element.style.cursor = 'pointer';
    this.element.style.willChange = 'transform, box-shadow';

    // Ajouter les événements
    this.element.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    this.element.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }

  private handleMouseEnter(): void {
    this.isHovered = true;
    this.applyHoverStyles();
  }

  private handleMouseLeave(): void {
    this.isHovered = false;
    this.resetStyles();
  }

  private applyHoverStyles(): void {
    const transform = [
      `scale(${this.options.scale})`,
      `rotate(${this.options.rotate}deg)`,
      `translate(${this.options.translateX}px, ${this.options.translateY}px)`,
    ].join(' ');

    this.element.style.transform = transform;
    this.element.style.boxShadow = this.options.shadow || 'none';
  }

  private resetStyles(): void {
    this.element.style.transform = 'none';
    this.element.style.boxShadow = 'none';
  }

  public updateOptions(newOptions: Partial<HoverOptions>): void {
    this.options = { ...this.options, ...newOptions };
    this.element.style.transition = `all ${this.options.duration}ms ${this.options.easing}`;
    
    if (this.isHovered) {
      this.applyHoverStyles();
    }
  }

  public destroy(): void {
    this.element.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
    this.element.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
    this.resetStyles();
  }

  // Predefined hover effects
  static lift(element: HTMLElement): Hover {
    return new Hover(element, {
      scale: 1.05,
      translateY: -5,
    });
  }

  static rotate(element: HTMLElement): Hover {
    return new Hover(element, {
      rotate: 5,
    });
  }

  static bounce(element: HTMLElement): Hover {
    return new Hover(element, {
      translateY: -10,
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    });
  }

  static glow(element: HTMLElement): Hover {
    const hover = new Hover(element, {
      scale: 1.05,
    });

    element.style.transition = 'box-shadow 0.3s ease-in-out';
    element.addEventListener('mouseenter', () => {
      element.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
    });
    element.addEventListener('mouseleave', () => {
      element.style.boxShadow = 'none';
    });

    return hover;
  }
} 