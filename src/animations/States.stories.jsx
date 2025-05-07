import React, { useEffect, useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { States } from './states';

const meta = {
  title: 'Animations/States',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Le composant States permet d'afficher différents états visuels (succès, erreur, info, etc.) avec icône, message et animation. Idéal pour le feedback utilisateur.",
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const StatesDemo = (props) => {
  const { options = {}, initialState = 'success' } = props || {};
  const elementRef = useRef(null);
  const statesRef = useRef();
  const [currentState, setCurrentState] = useState(initialState);

  useEffect(() => {
    if (elementRef.current) {
      statesRef.current = new States(elementRef.current, {
        ...options,
        state: currentState,
      });
    }

    return () => {
      if (statesRef.current && statesRef.current.destroy) {
        statesRef.current.destroy();
      }
    };
  }, [options, currentState]);

  const cycleState = () => {
    const states = [
      'success',
      'error',
      'warning',
      'info',
      'loading',
    ];
    const currentIndex = states.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % states.length;
    setCurrentState(states[nextIndex]);
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
        onClick={cycleState}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Change State
      </button>
    </div>
  );
};

export const Success = {
  render: () => <StatesDemo initialState="success" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Affiche l'état de succès avec icône ✓, couleurs vertes et animation d'apparition.",
      },
    },
  },
};

export const Error = {
  render: () => <StatesDemo initialState="error" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Affiche l'état d'erreur avec icône ✕, couleurs rouges et animation d'apparition.",
      },
    },
  },
};

export const Warning = {
  render: () => <StatesDemo initialState="warning" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Affiche l'état d'avertissement avec icône ⚠, couleurs orange et animation d'apparition.",
      },
    },
  },
};

export const Info = {
  render: () => <StatesDemo initialState="info" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Affiche l'état d'information avec icône ℹ, couleurs bleues et animation d'apparition.",
      },
    },
  },
};

export const Loading = {
  render: () => <StatesDemo initialState="loading" options={{}} />,
  parameters: {
    docs: {
      description: {
        story: "Affiche l'état de chargement avec icône ⟳, couleurs grises et animation de rotation sur l'icône.",
      },
    },
  },
};

export const WithMessage = {
  render: () => (
    <StatesDemo
      options={{
        message: 'This is a custom message',
        icon: true,
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Affiche un état personnalisé avec message et icône. Permet d'afficher n'importe quel texte d'information ou de feedback.",
      },
    },
  },
}; 