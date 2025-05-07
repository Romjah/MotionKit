import { NotificationOptions } from '../types';

export class Notification {
  private element: HTMLElement;
  private options: NotificationOptions;
  private container: HTMLElement;

  constructor(element: HTMLElement, options: Partial<NotificationOptions> = {}) {
    this.element = element;
    this.options = {
      duration: 300,
      easing: 'ease-in-out',
      position: 'top-right',
      type: 'info',
      ...options,
    };
    this.container = this.createContainer();
  }

  private createContainer(): HTMLElement {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.zIndex = '1000';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    container.style.padding = '20px';

    // Position the container
    switch (this.options.position) {
      case 'top-right':
        container.style.top = '0';
        container.style.right = '0';
        break;
      case 'top-left':
        container.style.top = '0';
        container.style.left = '0';
        break;
      case 'bottom-right':
        container.style.bottom = '0';
        container.style.right = '0';
        break;
      case 'bottom-left':
        container.style.bottom = '0';
        container.style.left = '0';
        break;
      case 'top-center':
        container.style.top = '0';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        break;
      case 'bottom-center':
        container.style.bottom = '0';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        break;
    }

    document.body.appendChild(container);
    return container;
  }

  private getTypeStyles(): Partial<CSSStyleDeclaration> {
    const baseStyles = {
      padding: '12px 24px',
      borderRadius: '4px',
      color: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      margin: '0',
      maxWidth: '300px',
      wordBreak: 'break-word' as const,
    };

    const typeStyles = {
      success: {
        backgroundColor: '#2ecc71',
      },
      error: {
        backgroundColor: '#e74c3c',
      },
      warning: {
        backgroundColor: '#f1c40f',
        color: '#2c3e50',
      },
      info: {
        backgroundColor: '#3498db',
      },
    };

    return {
      ...baseStyles,
      ...typeStyles[this.options.type || 'info'],
    };
  }

  show(message: string): Animation {
    // Apply styles to the element
    Object.assign(this.element.style, this.getTypeStyles());
    this.element.textContent = message;

    // Add to container
    this.container.appendChild(this.element);

    // Animate in
    const animation = this.element.animate(
      [
        { 
          opacity: 0,
          transform: this.getInitialTransform(),
        },
        { 
          opacity: 1,
          transform: 'none',
        },
      ],
      {
        duration: this.options.duration,
        easing: this.options.easing,
        fill: 'forwards',
      }
    );

    // Auto remove after animation
    animation.onfinish = () => {
      setTimeout(() => {
        this.hide();
      }, 3000); // Show for 3 seconds
    };

    return animation;
  }

  private getInitialTransform(): string {
    switch (this.options.position) {
      case 'top-right':
      case 'top-left':
      case 'top-center':
        return 'translateY(-100%)';
      case 'bottom-right':
      case 'bottom-left':
      case 'bottom-center':
        return 'translateY(100%)';
      default:
        return 'translateY(-100%)';
    }
  }

  hide(): void {
    const animation = this.element.animate(
      [
        { 
          opacity: 1,
          transform: 'none',
        },
        { 
          opacity: 0,
          transform: this.getInitialTransform(),
        },
      ],
      {
        duration: this.options.duration,
        easing: this.options.easing,
        fill: 'forwards',
      }
    );

    animation.onfinish = () => {
      this.element.remove();
    };
  }

  destroy(): void {
    this.hide();
    this.container.remove();
  }
} 