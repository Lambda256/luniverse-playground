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
          <H1>Find Your Car!</H1>
          <P>Car information and histories are stored in blockchain.<br/>Let's check how it works!</P>
        </TextWrap>

        <BtnWrap>
          <Btn to="/items" 
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
