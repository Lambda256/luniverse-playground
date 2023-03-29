import React, { useState } from "react";
import { Container, BgImg, Content, BgWrap, P, H1, BtnWrap, Btn, Icon, HoverIcon, TextWrap } from "./styled";
import VehicleIMG from "/assets/images/main-image.png";

const HeroSection = () => {
  const [isBtnHover, setIsBtnHover] = useState(false);

  const btnHover = () => {
    setIsBtnHover(!isBtnHover);
  }

	return (
		<Container>
      <BgWrap>
        <BgImg src={VehicleIMG} />
      </BgWrap>
      
			<Content>
        <TextWrap>
          <H1>Create your own NFTs!</H1>
          <P>Luniverse NFT service helps you create NFTs easily. <br/>Are you ready to dive into Luniverse? <br/> Let get started!</P>
        </TextWrap>

        <BtnWrap>
          <Btn to="/mint" 
            onMouseEnter={btnHover}
            onMouseLeave={btnHover}
            >
            Get started
            {isBtnHover ? <Icon/> : <HoverIcon/>}
          </Btn>
        </BtnWrap>
			</Content>
		</Container>
	);
};

export default HeroSection;
