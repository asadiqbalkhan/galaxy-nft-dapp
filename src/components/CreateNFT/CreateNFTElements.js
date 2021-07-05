import styled from 'styled-components'
import launch from '../../images/launch.svg'
import { Link } from 'react-scroll'

export const CreateNFTContainer = styled.div`
    color:#fff;
    background: #010606;
   

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const BackgroundImage = styled.div`
    background-image: url(${launch});
    background-repeat: no-repeat;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

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

`

export const CreateNFTrow = styled.div`
    display: grid;
    grid-auto-columns: minmax()(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)}
    };
`

export const CreateNFTColumn = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col1;
`

export const Form = styled.div`

`

export const FormHeading = styled.p`
    color: #42d7f5;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const FormInput = styled.input`
	padding: 0.5em;
	color: #fff;
	background: transparent;
	border: 1px solid #fff;
	border-radius: 30px;
	width: 100%;
    outline: none;
	margin-bottom: 0.5em;
`;

export const FormLabel = styled.label`
	margin-bottom: 0.5em;
	color: #fff;
    display: block;
`;



export const ButtonNFT = styled.div`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 15px;   
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  margin-top: 15px;
  transition: all 0.4s;
  position: relative;

    &:hover {
        background-color: #5C33F6;
    };
`

    