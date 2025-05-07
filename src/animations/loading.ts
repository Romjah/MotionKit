import { BaseAnimation } from './base';
import { LoadingOptions } from '../types';

export class Loading extends BaseAnimation {
  protected options: LoadingOptions;
  private container: HTMLElement;

  constructor(element: HTMLElement, options: Partial<LoadingOptions> = {}) {
    super(element, options);
    this.options = {
      duration: 1000,
      easing: 'linear',
      delay: 0,
      iterations: Infinity,
      direction: 'normal',
      fill: 'none',
      type: 'spinner',
      color: '#4a90e2',
      size: 40,
      thickness: 3,
      ...options,
    };

    this.container = this.createContainer();
    this.initializeElement();
  }

  private createContainer(): HTMLElement {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.width = `${this.options.size}px`;
    container.style.height = `${this.options.size}px`;
    this.element.appendChild(container);
    return container;
  }

  private initializeElement(): void {
    switch (this.options.type) {
      case 'spinner':
        this.createSpinner();
        break;
      case 'dots':
        this.createDots();
        break;
      case 'pulse':
        this.createPulse();
        break;
      case 'wave':
        this.createWave();
        break;
      default:
        this.createSpinner();
    }
  }

  private createSpinner(): void {
    const spinner = document.createElement('div');
    spinner.style.width = '100%';
    spinner.style.height = '100%';
    spinner.style.border = `${this.options.thickness}px solid rgba(0, 0, 0, 0.1)`;
    spinner.style.borderTopColor = this.options.color || '#4a90e2';
    spinner.style.borderRadius = '50%';
    this.container.appendChild(spinner);

    const keyframes = [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ];

    this.createAnimation(keyframes);
    this.play();
  }

  private createDots(): void {
    const dotSize = (this.options.size || 40) / 4;
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.style.width = `${dotSize}px`;
      dot.style.height = `${dotSize}px`;
      dot.style.backgroundColor = this.options.color || '#4a90e2';
      dot.style.borderRadius = '50%';
      dot.style.margin = '0 4px';
      this.container.appendChild(dot);

      const keyframes = [
        { transform: 'translateY(0)', opacity: '0.3' },
        { transform: 'translateY(-100%)', opacity: '1' },
        { transform: 'translateY(0)', opacity: '0.3' }
      ];

      this.createAnimation(keyframes);
      if (this.animation) {
        this.animation.startTime = (this.options.delay || 0) + (i * (this.options.duration || 1000) / 3);
      }
    }
  }

  private createPulse(): void {
    const pulse = document.createElement('div');
    pulse.style.width = '100%';
    pulse.style.height = '100%';
    pulse.style.backgroundColor = this.options.color || '#4a90e2';
    pulse.style.borderRadius = '50%';
    this.container.appendChild(pulse);

    const keyframes = [
      { transform: 'scale(0.5)', opacity: '0.3' },
      { transform: 'scale(1)', opacity: '1' },
      { transform: 'scale(0.5)', opacity: '0.3' }
    ];

    this.createAnimation(keyframes);
    this.play();
  }

  private createWave(): void {
    const barWidth = this.options.thickness || 3;
    const gap = barWidth;
    const numBars = Math.floor((this.options.size || 40) / (barWidth + gap));

    for (let i = 0; i < numBars; i++) {
      const bar = document.createElement('div');
      bar.style.width = `${barWidth}px`;
      bar.style.height = '100%';
      bar.style.backgroundColor = this.options.color || '#4a90e2';
      bar.style.margin = `0 ${gap/2}px`;
      this.container.appendChild(bar);

      const keyframes = [
        { transform: 'scaleY(0.4)' },
        { transform: 'scaleY(1)' },
        { transform: 'scaleY(0.4)' }
      ];

      this.createAnimation(keyframes);
      if (this.animation) {
        this.animation.startTime = (this.options.delay || 0) + (i * (this.options.duration || 1000) / numBars);
      }
    }
  }

  public updateOptions(newOptions: Partial<LoadingOptions>): void {
    this.options = { ...this.options, ...newOptions };
    this.container.innerHTML = '';
    this.initializeElement();
  }

  public destroy(): void {
    super.destroy();
    this.container.remove();
  }
} 