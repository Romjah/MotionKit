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
  render: () => <HoverDemo options={{ scale: 1.05 }} effect={undefined} />,
  parameters: {
    docs: {
      description: {
        story: "Effet de base : agrandissement léger au survol (scale uniquement).",
      },
    },
  },
};

export const Lift = {
  render: () => <HoverDemo options={{ scale: 1.1, rotate: 0 }} effect={undefined} />,
  parameters: {
    docs: {
      description: {
        story: "Effet 'Lift' : l'élément se soulève légèrement (scale 1.1, pas de rotation).",
      },
    },
  },
};

export const Rotate = {
  render: () => <HoverDemo options={{ scale: 1, rotate: 10 }} effect={undefined} />,
  parameters: {
    docs: {
      description: {
        story: "Effet 'Rotate' : l'élément pivote de 10° au survol (sans scale).",
      },
    },
  },
};

export const Bounce = {
  render: () => <HoverDemo options={{ scale: 1.15, easing: 'cubic-bezier(.68,-0.55,.27,1.55)', duration: 400 }} effect={undefined} />,
  parameters: {
    docs: {
      description: {
        story: "Effet 'Bounce' : rebond élastique au survol (scale 1.15, easing personnalisé).",
      },
    },
  },
};

export const Glow = {
  render: () => <HoverDemo options={{ shadow: '0 0 16px 4px #4a90e2', scale: 1.05 }} effect={undefined} />,
  parameters: {
    docs: {
      description: {
        story: "Effet 'Glow' : l'élément émet une lueur (ombre portée, scale léger).",
      },
    },
  },
}; 