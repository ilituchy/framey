import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import {
  NavBarWrapper,
  LogoWrapper,
  TitleFlex,
  Close,
} from './styles';

const NavBar = ({ logo, createNew, close, editModal, saveImage }) => (
  <NavBarWrapper editModal={editModal}>
    <TitleFlex>
      <LogoWrapper editModal={editModal}>
        <GatsbyImage image={logo} alt="Framey.stuido logo"/>
      </LogoWrapper>
      <h1>Framey.studio</h1>
    </TitleFlex>
    <Close editModal={editModal}>
      {editModal
      ? <>
          <button onClick={() => saveImage()} className="save">Save</button>
          <button onClick={close} className="cancel">Cancel</button>
        </>
      :
        <button onClick={createNew} className="save">Create New +</button>
      }
    </Close>
  </NavBarWrapper>
);

export default NavBar;
