import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/md";

export const AuthorContainer = styled.div`
  background: #0c2340;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  position: relative;
  z-index: 1;
`;

export const AuthorBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #0c2340;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #0c2340;
  z-index: -1;
`;

export const AuthorContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 70px;
  z-index: 3;
  flex-direction: row;
`;

export const AuthorH1 = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding-right: 70px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;

  &:hover {
    color: #f15a22;
    transition: 0.3s ease-out;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AuthorP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  };
  
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AuthorBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;