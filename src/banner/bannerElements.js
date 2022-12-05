import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";

export const Banr = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #0c2340;
  display: flex;
  font-size: 1rem;
  z-index: 10;
  height: 55px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const BannerContainer = styled.div`
  color: wheat;
  display: flex;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`

export const BannerLogo = styled.div`
  color: #f15a22;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  padding-right: 24px;
  margin-bottom: 5px;

  &:hover {
    color: #f15a22;
    transition: 0.3s ease-out;
  }
`

export const ProjectLogo = styled.div`
  color: #ffffff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  padding-right: 24px;
  margin-bottom: 5px;

  &:hover {
    color: #f15a22;
    transition: 0.3s ease-out;
  }
`

export const LeftWrapper = styled.div`
  width: 100%;
  display: flex;
  
`

export const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const BannerMenu = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }    
`;


export const BannerItem = styled.div`
    height: 60px;
  display: flex;
  align-items: center;
`;