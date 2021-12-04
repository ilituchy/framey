import { navigate } from 'gatsby';
import React, { useState, useRef } from 'react';
import Frames from '../Frames';
import MainImage from '../MainImage';
import Images from '../Images';
import NavBar from '../NavBar';
import ReactDOM from 'react-dom';
import {
  colors,
  innerColors,
} from '../../content/colors';
import {
  FramerWrapper,
  MainFlexWrapper,
  TextWrapper,
  ImagesFlex,
  Direction,
  DirectionWrapper,
  MatWrapper,
  ControlsWrapper,
  FrameFlex,
  ColorsWrapper,
  ColorCard,
  Disclaimer,
  MainColors,
  SecondaryColors,
  LogoWrapper,
  TitleFlex,
  Close,
} from './styles';

const FramerMain = ({ frames, images, setPortalElement }) => {
  const [selectedFrame, setSelectedFrame] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const [selectedMat, setSelectedMat] = useState(0);
  const [matColor, setMatColor] = useState('#ffffff');
  const [innerMatColor, setInnerMatColor] = useState('none');
  const [horizontal, setHorizontal] = useState(true);

  return (
    ReactDOM.createPortal(
      <>
        <Disclaimer>Sorry, Framey does not support this small of a screen size :(</Disclaimer>
        <FramerWrapper>
          <MainFlexWrapper>
            <FrameFlex>
              <Frames horizontal={horizontal} frames={frames} select={setSelectedFrame}/>
              <ControlsWrapper>
                <DirectionWrapper>
                  <Direction horizontal={horizontal} trueHorizontal onClick={() => setHorizontal(true)}>
                    <span>Horizontal</span>
                  </Direction>
                  <Direction horizontal={horizontal} trueHorizontal={false} onClick={() => setHorizontal(false)}>
                    <span>Vertical</span>
                  </Direction>
                </DirectionWrapper>
                <MatWrapper>
                  <h2>Mat</h2>
                  <input onChange={(e) => setSelectedMat(parseInt(e.target.value))} type="range" step="6" min="1" max="100" className="slider" value={selectedMat}/>
                  <ColorsWrapper>
                    <MainColors>
                      <p>Mat Color</p>
                      {colors.map(color => (
                        <ColorCard onClick={() => setMatColor(color.color)} key={color.title} color={color.color}>
                          <h6>{color.title}</h6>
                        </ColorCard>
                      ))}
                    </MainColors>
                    <SecondaryColors>
                      <p>Inner Mat Color</p>
                      <ColorCard onClick={() => setInnerMatColor('none')} color={'white'}>
                        <h6>None</h6>
                      </ColorCard>
                      {innerColors.map(color => (
                        <ColorCard onClick={() => setInnerMatColor(color.color)} key={color.title} color={color.color}>
                          <h6>{color.title}</h6>
                        </ColorCard>
                      ))}
                    </SecondaryColors>
                  </ColorsWrapper>
                </MatWrapper>
                {/* <ButtonsWrapper>
                  <button className="first" onClick={() => setSelectedMat(1)}>Small</button>
                  <button className="second" onClick={() => setSelectedMat(2)}>Medium</button>
                  <button className="third" onClick={() => setSelectedMat(3)}>Large</button>
                </ButtonsWrapper> */}
              </ControlsWrapper>
            </FrameFlex>
            <ImagesFlex>
              <Images images={images} select={setSelectedImage}/>
              <MainImage
                horizontal={horizontal}
                image={selectedImage}
                frame={selectedFrame}
                mat={selectedMat}
                matColor={matColor}
                innerMatColor={innerMatColor}
                setPortalElement={setPortalElement}
              />
            </ImagesFlex>
          </MainFlexWrapper>
        </FramerWrapper>
      </>,
    document.body)
  );
}

export default FramerMain;
