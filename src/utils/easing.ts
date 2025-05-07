import { EasingFunction } from '../types';

export const getEasingFunction = (easing: EasingFunction): ((t: number) => number) => {
  switch (easing) {
    case 'linear':
      return (t: number) => t;
    case 'ease':
      return (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    case 'ease-in':
      return (t: number) => t * t;
    case 'ease-out':
      return (t: number) => t * (2 - t);
    case 'ease-in-out':
      return (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    default:
      if (easing.startsWith('cubic-bezier(')) {
        const matches = easing.match(/cubic-bezier\(([^)]+)\)/);
        if (matches && matches[1]) {
          const [p1, p2, p3, p4] = matches[1].split(',').map(Number);
          return (t: number) => {
            const cx = 3 * p1;
            const bx = 3 * (p3 - p1) - cx;
            const ax = 1 - cx - bx;
            const cy = 3 * p2;
            const by = 3 * (p4 - p2) - cy;
            const ay = 1 - cy - by;
            const sampleCurveX = (t: number) => ((ax * t + bx) * t + cx) * t;
            const sampleCurveY = (t: number) => ((ay * t + by) * t + cy) * t;
            const sampleCurveDerivativeX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
            const solveCurveX = (x: number) => {
              let t2 = x;
              for (let i = 0; i < 8; i++) {
                const x2 = sampleCurveX(t2) - x;
                if (Math.abs(x2) < 1e-6) return t2;
                const d2 = sampleCurveDerivativeX(t2);
                if (Math.abs(d2) < 1e-6) break;
                t2 = t2 - x2 / d2;
              }
              return t2;
            };
            return sampleCurveY(solveCurveX(x));
          };
        }
      }
      return (t: number) => t;
  }
}; 