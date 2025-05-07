import React, { useEffect, useRef } from 'react';
import { Hover } from './hover';

const meta = {
  title: 'Animations/Hover',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const HoverDemo = (props) => {
  const { options = {}, effect } = props || {};
  const elementRef = useRef(null);
  const hoverRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      if (effect) {
        hoverRef.current = Hover[effect](elementRef.current);
      } else {
        hoverRef.current = new Hover(elementRef.current, options);
      }
    }

    return () => {
      if (hoverRef.current && hoverRef.current.destroy) {
        hoverRef.current.destroy();
      }
    };
  }, [options, effect]);

  return (
    <div
      ref={elementRef}
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: '#4a90e2',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      Hover me
    </div>
  );
};

export const Default = {
  render: () => <HoverDemo options={{ scale: 1.1, rotate: 5 }} effect={undefined} />,
};

export const Lift = {
  render: () => <HoverDemo options={{}} effect="lift" />,
};

export const Rotate = {
  render: () => <HoverDemo options={{}} effect="rotate" />,
};

export const Bounce = {
  render: () => <HoverDemo options={{}} effect="bounce" />,
};

export const Glow = {
  render: () => <HoverDemo options={{}} effect="glow" />,
}; 