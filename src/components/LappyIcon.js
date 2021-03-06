import React from "react"
import styled from "styled-components"

import winGif from "../images/winGif.gif"

const Container = styled.div`
  position: relative;
  transform: scale(0.4) translateX(50px);
  opacity: 0;
  @media (min-width: 500px) {
    opacity: 1;
  }
  @media (min-width: 795px) {
    transform: scale(1) translateX(0);
  }
  svg {
    width: 270px;
    height: 186px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: url(#clipIt);
`

export default ({ lappyRef }) => {
  return (
    <Container ref={lappyRef}>
      <Image src={winGif} />
      <svg viewBox="0 0 270 186" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M239.202 13.926H30.799a6.683 6.683 0 00-6.675 6.675v123.197a6.683 6.683 0 006.675 6.675h208.403a6.682 6.682 0 006.674-6.675V20.601a6.682 6.682 0 00-6.674-6.675zm.895 129.872a.896.896 0 01-.895.896H30.799a.9.9 0 01-.896-.896V20.601c0-.494.401-.895.896-.895h208.403c.493 0 .895.402.895.895v123.197z"
          fill="#252525"
        />
        <path
          d="M265.666 154.808h-6.787V17.433c0-9.103-7.406-16.51-16.509-16.51H27.631c-9.104 0-16.51 7.406-16.51 16.51v137.374H4.335A4.337 4.337 0 000 159.141v11.908c0 7.734 6.293 14.027 14.027 14.027h241.946c7.734 0 14.026-6.293 14.026-14.027v-11.908a4.328 4.328 0 00-4.333-4.333zM19.79 17.433c0-4.323 3.517-7.841 7.84-7.841H242.37c4.323 0 7.841 3.517 7.841 7.84v137.375H19.79V17.433zm102.496 146.043h25.427v2.267a1.84 1.84 0 01-1.84 1.84h-21.748a1.845 1.845 0 01-1.84-1.84v-2.267h.001zm139.046 7.573a5.364 5.364 0 01-5.358 5.359H14.027a5.365 5.365 0 01-5.358-5.359v-7.573h107.839v2.267c0 4.201 3.417 7.619 7.619 7.619h21.748c4.201 0 7.619-3.418 7.619-7.619v-2.267h107.838v7.573z"
          fill="#252525"
        />
        <defs>
          <clipPath id="clipIt">
            <path d="M29 18h212v128H29z" />
          </clipPath>
        </defs>
      </svg>
    </Container>
  )
}
