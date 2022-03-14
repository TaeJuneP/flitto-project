import styled  from "styled-components"

interface IProps {
    objectFit: string
}

export const LazyImgWrapper = styled.img<IProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: ${props => props.objectFit};
`
