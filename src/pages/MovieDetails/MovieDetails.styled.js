import styled from 'styled-components';
import { Link } from 'react-router-dom';

const sharedLinkStyles = `
  display: block;
  width: 100px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  padding: 5px 15px;
  &:hover {
    background-color: #fce38a;
    font-weight: 500;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BackLink = styled(Link)`
  ${sharedLinkStyles}
  margin: 15px;
`;

export const LinkInfo = styled(Link)`
  ${sharedLinkStyles}
  padding: 5px 35px;

  @media screen and (min-width: 768px) {
    margin: 15px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
  width: 350px;

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

export const ImgWrp = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoWrp = styled.div`
  padding-left: 15px;
`;

export const AdditionalWrp = styled.div`
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
