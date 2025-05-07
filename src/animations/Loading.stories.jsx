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
  const size = options.size || 40;

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
      role="status"
      aria-label="Chargement"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export const Spinner = {
  render: () => <LoadingDemo type="spinner" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Indicateur de chargement classique (spinner rotatif).",
      },
    },
  },
};

export const Dots = {
  render: () => <LoadingDemo type="dots" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Trois points qui rebondissent pour indiquer un chargement léger.",
      },
    },
  },
};

export const Pulse = {
  render: () => <LoadingDemo type="pulse" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Cercle qui pulse pour un effet subtil de chargement.",
      },
    },
  },
};

export const Wave = {
  render: () => <LoadingDemo type="wave" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Barre d'ondulation, idéale pour le chargement de contenu.",
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: "Exemple de personnalisation : spinner rouge, taille et épaisseur modifiées.",
      },
    },
  },
}; 