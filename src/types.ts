export type EasingFunction = 
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | `cubic-bezier(${number},${number},${number},${number})`;

export type PlaybackDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
export type FillMode = 'none' | 'forwards' | 'backwards' | 'both' | 'auto';

export interface BaseOptions {
  duration: number;
  easing: EasingFunction;
  delay: number;
  iterations: number;
  direction: PlaybackDirection;
  fill: FillMode;
}

export interface AnimationOptions extends Partial<BaseOptions> {
  onStart?: () => void;
  onEnd?: () => void;
  onCancel?: () => void;
}

export interface TransitionState {
  opacity?: number;
  transform?: string;
  [key: string]: string | number | undefined;
}

export interface TransitionOptions extends Partial<BaseOptions> {
  states: Record<string, TransitionState>;
}

export interface NotificationOptions extends Partial<BaseOptions> {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  type?: 'success' | 'error' | 'warning' | 'info';
  message?: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export interface LoadingOptions extends Partial<BaseOptions> {
  type?: 'spinner' | 'dots' | 'pulse' | 'wave';
  color?: string;
  size?: number;
  thickness?: number;
}

export interface StateOptions extends Partial<BaseOptions> {
  state?: 'success' | 'error' | 'warning' | 'info' | 'loading';
  icon?: boolean;
  message?: string;
}

export interface HoverOptions extends Partial<BaseOptions> {
  scale?: number;
  rotate?: number;
  translateX?: number;
  translateY?: number;
  shadow?: string;
} 