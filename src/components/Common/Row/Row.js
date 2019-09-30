import styled from 'styled-components'

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0 0px;
  }
`
export default Row
