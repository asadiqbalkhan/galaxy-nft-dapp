import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 4px;   
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  margin-top: 5px;
  transition: all 0.4s;
  position: relative;

    &:hover {
        background-color: #4b34b1;
    };
`