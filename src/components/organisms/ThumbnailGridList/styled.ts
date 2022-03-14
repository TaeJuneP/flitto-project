import styled from "styled-components"

export const ThumbnailGrid = styled.div`
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(calc(50% - 8px), 1fr))
  }
  padding:16px;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(4, minmax(calc(25% - 32px), 1fr))
`