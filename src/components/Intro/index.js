import React, { useEffect, useState } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import { easeCubic } from 'd3-ease';
import {
  IntroWrapper,
} from './styles';

const NUM_TRANS = [
  {
    fig: 'Welcome',
    height: 120,
    delay: 200,
    duration: 1300,
    tension: 50,
  },
  {
    fig: 'to',
    height: 300,
    delay: 200,
    duration: 900,
    tension: 250,
  },
  {
    fig: 'Framey',
    height: 60,
    delay: 100,
    duration: 1100,
    tension: 250,
  },
  {
    fig: '.studio',
    height: 300,
    delay: 200,
    duration: 1000,
    tension: 250,
  },
];

const Intro = ({ show, hideIntro }) => {

  const mainTransition = useTransition(NUM_TRANS, {
    from: ({ height }) => ({ opacity: 0, transform: `translate3d(0,-${height}px,0)`}),
    enter: {  opacity: 1, transform: 'translate3d(0,0px,0)'},
    leave: ({ height }) => ({  opacity: 0, transform: `translate3d(0,-${height}px,0)`}),
    delay: ({ delay }) => (delay),
    config: ({ duration, tension }) => ({ duration, tension, bounce: 5, }),
  });
  
  const subHeaderStyles = useSpring({
    to: [
      { opacity: 1, height: 80, color: '#3A506B' },
    ],
    from: { opacity: 0, height: 0, color: 'white' },
    delay: 1700,
    config: {
      duration: 1000,
    },
  });

  const buttonStyles = useSpring({
    to: [
      { opacity: 1, x: 0 },
    ],
    from: { opacity: 0, x: -200 },
    delay: 2700,
    config: {
      frequency: .7,
      damping: .4,
      easing: easeCubic,
    }
  });

  const [ref, { width }] = useMeasure()

  const fillButton = useSpring({
    to: [
      { width, },
    ],
    from: { width: 0 },
    delay: 3500,
    config: {
      duration: 1200,
      easing: easeCubic
    },
  });

  const easyFadeIn = useSpring({
    to: [
      { opacity: 1, },
    ],
    from: { opacity: 0 },
    delay: 3500,
    config: {
      duration: 900,
      easing: easeCubic
    },
  });

  return (
    <IntroWrapper show={show}>
      {show && <>
        <div style={{ display: 'flex' }}>
          {mainTransition((style, item) => (
            <animated.div style={style}>
              <h1 className={item.fig}>{item.fig}</h1>
            </animated.div>
          ))}
        </div>
        <animated.div className="subheader" style={subHeaderStyles}>
          A digital framing experience
        </animated.div>
        <animated.div className="buttonWrapper" style={buttonStyles} onClick={() => hideIntro()}>
          <div ref={ref} className="button">
            <animated.div className="fill" style={fillButton} />
            <animated.div className="text" style={easyFadeIn}>Get Started &#8594;</animated.div>
          </div>
        </animated.div>
      </>}
    </IntroWrapper>
  );
};

export default Intro;
