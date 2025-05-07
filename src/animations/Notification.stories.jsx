import React, { useEffect, useRef } from 'react';
import { Notification } from './notifications';

const meta = {
  title: 'Animations/Notification',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Le composant Notification permet d'afficher des messages contextuels (succès, erreur, info, etc.) à différentes positions de l'écran, avec animation et options de personnalisation.",
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const NotificationDemo = (props) => {
  const { options = {}, message = 'This is a notification' } = props || {};
  const notificationRef = useRef();

  useEffect(() => {
    // Créer la notification dans le body
    const container = document.createElement('div');
    document.body.appendChild(container);

    notificationRef.current = new Notification(container, options);
    notificationRef.current.show(message);

    return () => {
      if (notificationRef.current && notificationRef.current.destroy) {
        notificationRef.current.destroy();
      }
      container.remove();
    };
  }, [options, message]);

  return null; // Pas de conteneur React à rendre
};

export const Success = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'success',
        position: 'top-right',
      }}
      message="Operation completed successfully!"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification de succès (verte) affichée en haut à droite, idéale pour confirmer une action réussie.",
      },
    },
  },
};

export const Error = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'error',
        position: 'top-right',
      }}
      message="An error occurred. Please try again."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'erreur (rouge) affichée en haut à droite, pour signaler un problème ou une action échouée.",
      },
    },
  },
};

export const Warning = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'warning',
        position: 'top-right',
      }}
      message="Please review your changes before proceeding."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'avertissement (orange) affichée en haut à droite, pour attirer l'attention sur une action à valider.",
      },
    },
  },
};

export const Info = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'info',
        position: 'top-right',
      }}
      message="New updates are available."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'information (bleue) affichée en haut à droite, pour informer l'utilisateur d'une nouveauté ou d'un message neutre.",
      },
    },
  },
};

export const TopLeft = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'info',
        position: 'top-left',
      }}
      message="Notification in top-left corner"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'information affichée en haut à gauche de l'écran.",
      },
    },
  },
};

export const BottomRight = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'info',
        position: 'bottom-right',
      }}
      message="Notification in bottom-right corner"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'information affichée en bas à droite de l'écran.",
      },
    },
  },
};

export const BottomLeft = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'info',
        position: 'bottom-left',
      }}
      message="Notification in bottom-left corner"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'information affichée en bas à gauche de l'écran.",
      },
    },
  },
};

export const TopCenter = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'info',
        position: 'top-center',
      }}
      message="Notification in top-center"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'information affichée en haut au centre de l'écran.",
      },
    },
  },
};

export const BottomCenter = {
  render: () => (
    <NotificationDemo
      options={{
        type: 'info',
        position: 'bottom-center',
      }}
      message="Notification in bottom-center"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification d'information affichée en bas au centre de l'écran.",
      },
    },
  },
}; 