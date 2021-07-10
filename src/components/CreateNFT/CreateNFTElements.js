import styled from "styled-components";
import launch from "../../images/launch.svg";
import { Link } from "react-scroll";

export const CreateNFTContainer = styled.div`
  color: #fff;
  background: #010606;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${launch});
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const CreateNFTWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const CreateNFTrow = styled.div`
  display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  } ;
`;

export const CreateNFTColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

export const FormHeading = styled.p`
  color: #42d7f5;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const FormInput = styled.input`
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;
  margin-top: 5px;
  padding: 10px;
  padding-left: 15px;
  letter-spacing: 1.5px;

  &::placeholder {
    color: #f792f1;
    font-size: 11px;
  }

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

export const FormLabel = styled.label`
  color: #f792f1;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  width: 100%;
  outline: none;
  cursor: pointer;
  font-size: 11px;
  margin-bottom: 20px;
  margin-top: 5px;
  padding: 10px;
  padding-left: 15px;
  letter-spacing: 1.5px;

  &::placeholder {
    color: #f792f1;
    font-size: 11px;
  }

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

export const ButtonNFT = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  margin-top: 15px;
  transition: all 0.4s;
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  transition: all 250ms;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  white-space: nowrap;

  &:hover {
    background-color: #42d7f5;
    border: none;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
    font-weight: 700;
  }
`;
