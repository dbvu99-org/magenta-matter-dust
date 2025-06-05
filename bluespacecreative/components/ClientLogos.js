import React, { useEffect, useRef } from "react"

import { styled } from "@nextui-org/react"

function ClientLogos({ spacingVW = 15, svgString }) {
  const logosRef = useRef()

  useEffect(() => {
    // console.log(navigator.userAgent)
    if (logosRef?.current) {
      if (navigator.userAgent.includes("Windows")) {
      }

      if (navigator.userAgent.includes("Macintosh") || navigator.userAgent.includes("Mac OS X") || navigator.userAgent.includes("Safari")) {
        document.querySelector("svg#Layer_1a").style.filter = "grayscale(1)"
      }
    }
  }, [])

  return (
    // <div>
    <StyledDiv
      css={{
        // position: "absolute",
        // inset: 0,
        display: "flex",
        flexDirection: "column",
        // top: 0,
        // left: `-${spacingVW - 3}vw`,
        // right: 0,
        // bottom: 0,
        flex: 1,
        "& svg": {
          w: "100%",
          "@md": {
            // h: "100%",
          },
          // h: "auto",
          "& #Layer_1": {
            "&:hover": {
              "& > *:not(:hover)": {
                filter: "blur(4px) grayscale(1)",
                opacity: 0.5,
              },
            },
            "& > *": {
              transition: "all 500ms ease-in-out",
              filter: "blur(0px) grayscale(1)",
              "&:hover": {
                filter: "blur(0px) grayscale(0)",
              },
            },
          },
        },
        "@smMax": {
          display: "none",
        },
      }}
    >
      <StyledDiv
        css={{
          // paddingLeft: "36vw",
          pr: 16,
          marginBottom: 16,
          "@lg": {
            display: "none",
          },
        }}
      >
        From humble beginnings, the scope of bluespace clients has skyrocketed to include countless industries, in locations from New York to China and beyond. We continually learn from our diverse clientele, putting that knowledge to work for all our clients. Our primary goal is to create noticeable results for clients. That&apos;s the key reason we&apos;ve grown so quickly. Put simply, our work works. And our clients are happy to spread the word.
      </StyledDiv>
      <StyledDiv ref={logosRef} css={{ flex: 1, pr: 24 }} dangerouslySetInnerHTML={{ __html: `${svgString}` }} />
    </StyledDiv>
    // </div>
  )
}

const StyledDiv = styled("div")
export default ClientLogos
