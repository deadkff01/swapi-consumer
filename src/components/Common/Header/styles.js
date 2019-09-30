import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: transparent;
  color: yellow;
  text-align: center;
  line-height: 100px;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 20px;
  font-family: 'STARWARS';
  text-transform: uppercase;

  @media (max-width: 480px) {
    line-height: 50px;
    padding-top: 20px;
  }
`
export default Header
