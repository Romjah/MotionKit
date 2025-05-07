import { BaseAnimation } from './base';
import { NotificationOptions } from '../types';

export class Notification extends BaseAnimation {
  protected options: NotificationOptions;
  private container: HTMLElement;
  private messageElement: HTMLElement;
  private timer: number | null = null;

  constructor(element: HTMLElement, options: Partial<NotificationOptions> = {}) {
    super(element, options);
    this.options = {
      duration: 300,
      easing: 'ease',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards',
      position: 'top-right',
      type: 'info',
      message: '',
      autoClose: true,
      autoCloseDelay: 5000,
      ...options,
    };

    this.container = this.createContainer();
    this.messageElement = this.createMessageElement();
    this.createCloseButton();
    this.initializeElement();
  }

  private createContainer(): HTMLElement {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.padding = '12px 20px';
    container.style.borderRadius = '4px';
    container.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    container.style.minWidth = '300px';
    container.style.maxWidth = '400px';
    container.style.zIndex = '9999';

    // Position
    switch (this.options.position) {
      case 'top-left':
        container.style.top = '20px';
        container.style.left = '20px';
        break;
      case 'top-right':
        container.style.top = '20px';
        container.style.right = '20px';
        break;
      case 'bottom-left':
        container.style.bottom = '20px';
        container.style.left = '20px';
        break;
      case 'bottom-right':
        container.style.bottom = '20px';
        container.style.right = '20px';
        break;
      case 'top-center':
        container.style.top = '20px';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        break;
      case 'bottom-center':
        container.style.bottom = '20px';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        break;
      default:
        container.style.top = '20px';
        container.style.right = '20px';
    }

    // Type
    switch (this.options.type) {
      case 'success':
        container.style.backgroundColor = '#e8f5e9';
        container.style.color = '#2e7d32';
        container.style.border = '1px solid #a5d6a7';
        break;
      case 'error':
        container.style.backgroundColor = '#ffebee';
        container.style.color = '#c62828';
        container.style.border = '1px solid #ef9a9a';
        break;
      case 'warning':
        container.style.backgroundColor = '#fff3e0';
        container.style.color = '#ef6c00';
        container.style.border = '1px solid #ffcc80';
        break;
      case 'info':
      default:
        container.style.backgroundColor = '#e3f2fd';
        container.style.color = '#1565c0';
        container.style.border = '1px solid #90caf9';
    }

    this.element.appendChild(container);
    return container;
  }

  private createMessageElement(): HTMLElement {
    const message = document.createElement('div');
    message.style.flex = '1';
    message.style.marginRight = '12px';
    message.textContent = this.options.message || '';
    this.container.appendChild(message);
    return message;
  }

  private createCloseButton(): void {
    const button = document.createElement('button');
    button.innerHTML = '×';
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.color = 'inherit';
    button.style.fontSize = '20px';
    button.style.cursor = 'pointer';
    button.style.padding = '0';
    button.style.lineHeight = '1';
    button.style.opacity = '0.7';
    button.addEventListener('mouseover', () => {
      button.style.opacity = '1';
    });
    button.addEventListener('mouseout', () => {
      button.style.opacity = '0.7';
    });
    button.addEventListener('click', () => this.close());
    this.container.appendChild(button);
  }

  private initializeElement(): void {
    // Animation d'entrée
    const keyframes = [
      { opacity: 0, transform: 'translateY(-20px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ];

    this.createAnimation(keyframes);
    this.play();

    // Auto-close
    if (this.options.autoClose) {
      this.timer = window.setTimeout(() => {
        this.close();
      }, this.options.autoCloseDelay);
    }
  }

  public setMessage(message: string): void {
    this.options.message = message;
    this.messageElement.textContent = message;
  }

  public close(): Promise<void> {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    const keyframes = [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-20px)' }
    ];

    this.createAnimation(keyframes);
    return this.play().then(() => {
      this.destroy();
    });
  }

  public destroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    super.destroy();
    this.container.remove();
  }
} 