import { Text } from "@nextui-org/react"
import { Link } from "@nextui-org/react"
import { Container } from "@nextui-org/react"
import { styled } from "@nextui-org/react"
import { useParallax } from "react-scroll-parallax"
import React from "react"
import { Spacer } from "@nextui-org/react"

function CareerHeader() {
  const header = useParallax({ speed: -5 })

  return (
    <Wrapper>
      <Container
        css={{
          section: {
            textAlign: "center",
            padding: "0px",
            margin: "0px",
          },
        }}
        as="section"
      >
        <section ref={header.ref}>
          {/* <Parallax speed={-10}> */}

          <Text
            b
            css={{
              d: "block",
              color: "white",
              transition: "font-size 0.3s ease-in-out",
              mb: "1em",
              fs: 35,
              "@sm": {
                fs: 45,
              },
              "@md": {
                fs: 55,
              },
              "@lg": {
                fs: 65,
              },
            }}
          >
            Are you ready to force your creative powers to the high ground? Brand together, with the bluespace creative league!
          </Text>
          <Link
            href="#job-opennings"
            css={{
              color: "black",
              p: "1em 2em",
              bg: "white",
              fs: 20,
              "@lg": {
                fs: 25,
              },
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            explore the opportunities
          </Link>
          {/* </Parallax> */}
        </section>
      </Container>
    </Wrapper>
  )
}

export default CareerHeader

const Wrapper = styled("section", {
  py: 40,
  backgroundColor: "#00adee",
  minHeight: "calc(100vh - 220px)",
  d: "flex",
  alignItems: "center",
  justifyContent: "center",
})
