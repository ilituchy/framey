import { GatsbyImage } from 'gatsby-plugin-image';
import { animated, useTransition } from 'react-spring';
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import FramerMain from "../FramerMain";
import { PortalFrame } from '../MainImage';
import Draggy from '../Draggy';
import GestureCard from '../GestureCard';
import NavBar from '../NavBar';
import Intro from '../Intro';
import {
  MainWrapper,
  ImgWrapper,
  DragWrapper,
} from './styles';

const Main = ({ wall, logo, frames, images }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [portalElement, setPortalElement] = useState(null);
  const [savedImages, setSavedImages] = useState([]);

  const saveImage = () => {
    setSavedImages(prevArray => [...prevArray, portalElement]);
    setEditModal(false);
  }

  const hideIntro = () => {
    setShowIntro(false);
  }

  const navTransition = useTransition(showIntro, {
    from: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
  });

  return (
    <MainWrapper>
      {editModal && <FramerMain
        frames={frames}
        images={images}
        close={() => setEditModal(false)}
        setPortalElement={setPortalElement}
      />}
      {navTransition((values, showIntro) => !showIntro && <animated.div style={values}>
          <NavBar
            logo={logo}
            createNew={() => setEditModal(true)}
            editModal={editModal}
            close={() => setEditModal(false)}
            saveImage={saveImage}
          />
        </animated.div>
      )}
      <GatsbyImage image={wall} alt="Blank concrete wall."/>
      <Intro show={showIntro} hideIntro={hideIntro}/>
      {!showIntro && <DragWrapper>
        {savedImages && savedImages.map((element, index) => (
          <GestureCard key={index} horizontal={element.props.horizontal}>
            {element}
          </GestureCard>
        ))} 
      </DragWrapper>}
    </MainWrapper>
  );
}

export default Main;
