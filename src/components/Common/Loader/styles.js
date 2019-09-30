import styled from 'styled-components'
import loaderImg from '../../../assets/images/white-loader.gif'

const Loader = styled.div`
  background: url('${loaderImg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 163px;
  position: fixed;
  bottom: 0px;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

export default Loader
