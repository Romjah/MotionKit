import React, { useEffect, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './loading';

const meta = {
  title: 'Animations/Loading',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const LoadingDemo = (props) => {
  const { options = {}, type } = props || {};
  const elementRef = useRef(null);
  const loadingRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      loadingRef.current = new Loading(elementRef.current, {
        ...options,
        type,
      });
    }

    return () => {
      if (loadingRef.current && loadingRef.current.destroy) {
        loadingRef.current.destroy();
      }
    };
  }, [options, type]);

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
    />
  );
};

export const Spinner = {
  render: () => <LoadingDemo type="spinner" options={{}} />,
};

export const Dots = {
  render: () => <LoadingDemo type="dots" options={{}} />,
};

export const Pulse = {
  render: () => <LoadingDemo type="pulse" options={{}} />,
};

export const Wave = {
  render: () => <LoadingDemo type="wave" options={{}} />,
};

export const CustomColor = {
  render: () => (
    <LoadingDemo
      type="spinner"
      options={{
        color: '#ff0000',
        size: 40,
        thickness: 4,
      }}
    />
  ),
}; 