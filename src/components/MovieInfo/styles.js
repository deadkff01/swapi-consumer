import styled from 'styled-components'

export const MovieCard = styled.div`
  position: relative;
  display: block;
  margin: 30px auto;
  width: 500px;
  padding: 10px;
  border: 2px solid #888888;
  border-radius: 8px;
  background-color: rgba(136, 136, 136, 0.4);
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 300px;
  }
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
export const Field = styled.div`
  color: #fff;
  font-size: 20px;
  padding: 0px 20px 0 20px;
`

export const BackButton = styled.button`
  position: absolute;
  top: -35px;
  left: 0px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  width: 166px;
  height: 28px;
  padding-left: 33px;
  text-align: left;
  background-position-x: 0px;
  background-size: 30px;
  border: none;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
