import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";

export const Container = styled.div`
  background: ${({theme}) => theme.color.dark};
`;

export const Wrapper = styled.div`
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  margin: 0 auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${({theme}) => theme.breakpoint.md} {
    padding-top: 2rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;

  @media ${({theme}) => theme.breakpoint.sm} {
    flex-direction: column;
  } 
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  text-align: left;
  width: 10rem;
  box-sizing: border-box;
  color: ${({theme}) => theme.color.white};

  @media ${({theme}) => theme.breakpoint.sm} {
    margin: 0;
    padding: .75rem;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const LinkItem = styled(LinkR)`
  color: ${({theme}) => theme.color.white};
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: .75rem;

  &:hover {
    color: ${({theme}) => theme.color.primary};
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 100vw;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({theme}) => theme.breakpoint.xl};
  margin: 2.75rem auto 0 auto;

  @media ${({theme}) => theme.breakpoint.md} {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkR)`
  color: ${({theme}) => theme.color.white};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: ${({theme}) => theme.color.white};
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconLink = styled.a`
  color: ${({theme}) => theme.color.white};
  font-size: 1.5rem;
`;