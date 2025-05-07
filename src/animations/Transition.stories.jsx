import React, { useEffect, useRef, useState } from 'react';
import { Transition } from './transition';

const meta = {
  title: 'Animations/Transition',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const TransitionDemo = (props) => {
  const { options = {} } = props || {};
  const elementRef = useRef(null);
  const transitionRef = useRef();
  const [currentState, setCurrentState] = useState('initial');

  useEffect(() => {
    if (elementRef.current) {
      transitionRef.current = new Transition(elementRef.current, options);
    }

    return () => {
      if (transitionRef.current && transitionRef.current.destroy) {
        transitionRef.current.destroy();
      }
    };
  }, [options]);

  const toggleState = () => {
    const nextState = currentState === 'initial' ? 'exit' : 'initial';
    if (transitionRef.current) {
      transitionRef.current.setState(nextState);
    }
    setCurrentState(nextState);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
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
        {currentState}
      </div>
      <button
        onClick={toggleState}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Toggle State
      </button>
    </div>
  );
};

export const Fade = {
  render: () => (
    <TransitionDemo
      options={{
        states: {
          initial: { opacity: 1 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        },
        duration: 300,
      }}
    />
  ),
};

export const Slide = {
  render: () => (
    <TransitionDemo
      options={{
        states: {
          initial: { transform: 'translateX(0)' },
          enter: { transform: 'translateX(0)' },
          exit: { transform: 'translateX(-100%)' },
        },
        duration: 300,
      }}
    />
  ),
};

export const Scale = {
  render: () => (
    <TransitionDemo
      options={{
        states: {
          initial: { transform: 'scale(1)' },
          enter: { transform: 'scale(1)' },
          exit: { transform: 'scale(0)' },
        },
        duration: 300,
      }}
    />
  ),
};

export const Flip = {
  render: () => (
    <TransitionDemo
      options={{
        states: {
          initial: { transform: 'rotateY(0deg)' },
          enter: { transform: 'rotateY(0deg)' },
          exit: { transform: 'rotateY(180deg)' },
        },
        duration: 300,
      }}
    />
  ),
};

export const Combined = {
  render: () => (
    <TransitionDemo
      options={{
        states: {
          initial: {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
          enter: {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
          exit: {
            opacity: 0,
            transform: 'translateY(20px) scale(0.9)',
          },
        },
        duration: 300,
      }}
    />
  ),
};

export const CustomDuration = {
  render: () => (
    <TransitionDemo
      options={{
        states: {
          initial: { opacity: 1 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        },
        duration: 500,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    />
  ),
}; 