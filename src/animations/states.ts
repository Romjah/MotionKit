import { BaseAnimation } from './base';
import { StateOptions } from '../types';

export class States extends BaseAnimation {
  protected options: StateOptions;
  private icon: HTMLElement | null = null;
  private message: HTMLElement | null = null;

  constructor(element: HTMLElement, options: Partial<StateOptions> = {}) {
    super(element, options);
    this.options = {
      duration: 300,
      easing: 'ease',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards',
      state: 'info',
      icon: true,
      message: '',
      ...options,
    };

    // Initialiser l'élément
    this.initializeElement();
  }

  private initializeElement(): void {
    // Styles de base
    this.element.style.position = 'relative';
    this.element.style.display = 'inline-flex';
    this.element.style.alignItems = 'center';
    this.element.style.gap = '8px';
    this.element.style.padding = '8px 16px';
    this.element.style.borderRadius = '4px';
    this.element.style.transition = 'all 0.3s ease';

    // Créer l'icône si nécessaire
    if (this.options.icon) {
      this.createIcon();
    }

    // Créer le message si nécessaire
    if (this.options.message) {
      this.createMessage();
    }

    // Appliquer l'état initial
    this.setState(this.options.state as 'info' | 'success' | 'error' | 'warning' | 'loading');
  }

  private createIcon(): void {
    this.icon = document.createElement('div');
    this.icon.style.display = 'flex';
    this.icon.style.alignItems = 'center';
    this.icon.style.justifyContent = 'center';
    this.icon.style.width = '20px';
    this.icon.style.height = '20px';
    this.element.appendChild(this.icon);
  }

  private createMessage(): void {
    this.message = document.createElement('span');
    this.message.textContent = this.options.message || '';
    this.message.style.fontSize = '14px';
    this.element.appendChild(this.message);
  }

  private getStateStyles(): { background: string; color: string; border: string } {
    const styles = {
      success: {
        background: '#e8f5e9',
        color: '#2e7d32',
        border: '1px solid #a5d6a7',
      },
      error: {
        background: '#ffebee',
        color: '#c62828',
        border: '1px solid #ef9a9a',
      },
      warning: {
        background: '#fff3e0',
        color: '#ef6c00',
        border: '1px solid #ffcc80',
      },
      info: {
        background: '#e3f2fd',
        color: '#1565c0',
        border: '1px solid #90caf9',
      },
      loading: {
        background: '#f5f5f5',
        color: '#616161',
        border: '1px solid #e0e0e0',
      },
    } as const;

    return styles[this.options.state || 'info'];
  }

  private getIconContent(): string {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
      loading: '⟳',
    } as const;

    return icons[this.options.state || 'info'];
  }

  public setState(state: 'success' | 'error' | 'warning' | 'info' | 'loading'): void {
    this.options.state = state;
    const styles = this.getStateStyles();

    // Appliquer les styles
    Object.assign(this.element.style, {
      backgroundColor: styles.background,
      color: styles.color,
      border: styles.border,
    });

    // Mettre à jour l'icône
    if (this.icon) {
      this.icon.textContent = this.getIconContent();
      if (state === 'loading') {
        this.icon.style.animation = 'spin 1s linear infinite';
      } else {
        this.icon.style.animation = 'none';
      }
    }

    // Animer le changement d'état
    const keyframes = [
      { opacity: 0.5, transform: 'scale(0.95)' },
      { opacity: 1, transform: 'scale(1)' }
    ];

    this.createAnimation(keyframes);
    this.play();
  }

  public setMessage(message: string): void {
    this.options.message = message;
    if (this.message) {
      this.message.textContent = message;
    } else if (message) {
      this.createMessage();
    }
  }

  public setIcon(show: boolean): void {
    if (show && !this.icon) {
      this.createIcon();
    } else if (!show && this.icon) {
      this.icon.remove();
      this.icon = null;
    }
  }

  public destroy(): void {
    super.destroy();
    if (this.icon) {
      this.icon.remove();
    }
    if (this.message) {
      this.message.remove();
    }
  }
} 