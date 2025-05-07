import React, { useEffect, useRef } from 'react';
import { Notification } from './notifications';

const meta = {
  title: 'Animations/Notification',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const NotificationDemo = (props) => {
  const { options = {}, message = 'This is a notification' } = props || {};
  const elementRef = useRef(null);
  const notificationRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      notificationRef.current = new Notification(elementRef.current, options);
      notificationRef.current.show(message);
    }

    return () => {
      if (notificationRef.current && notificationRef.current.destroy) {
        notificationRef.current.destroy();
      }
    };
  }, [options, message]);

  return <div ref={elementRef} />;
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
}; 