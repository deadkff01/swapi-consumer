import styled from 'styled-components'

export const ColMD4 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
`
export const Card = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: transparent;
`
export const ImgCard = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 220px;
  height: 344px;
  position: relative;
  margin: 10px auto;
  display: block;
`
export const CardBody = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0px;
  text-align: center;
  color: #fff;

  h1 {
    text-align: center;
    font-size: 20px;
  }
`

export const MoreInfoButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  border: 1px solid #fff;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: rgba(000, 000, 000, 0.5);
  }
`
