import React, { useRef, useEffect } from 'react';
import { useSpring, animated, to } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import {
  Container,
} from './styles';

const GestureCard = ({ children }) => {
  useEffect(() => {
    const preventDefault = e => e.preventDefault();
    document.addEventListener('gesturestart', preventDefault);
    document.addEventListener('gesturechange', preventDefault);

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 300, friction: 40 },
    })
  );

  useGesture(
    {
      onDrag: ({ event, active, offset: [x, y] }) => {
        event.preventDefault();
        return api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.05 });
      },
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ dragging }) => !dragging && api({
        rotateX: 0,
        rotateY: 0,
        scale: 1.05,
      }),
      onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event }) => {
        event.preventDefault();
      },
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <animated.div
      ref={domTarget}
      className="card"
      style={{
        transform: 'perspective(600px)',
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
      }}>
      <animated.div style={{ height: 'auto' }}>
        <Container>
          {children}
        </Container>
      </animated.div>
    </animated.div>
  );
};

export default GestureCard;

