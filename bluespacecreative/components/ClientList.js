import { SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { Splide } from "@splidejs/react-splide"
import Link from "next/link"
import { Link as StyledLink } from "@nextui-org/react"
import React, { useEffect, useRef, useState } from "react"
import { Wrapper } from "ui/bluespace/components/Slider"
import { client } from "../utils/sanity"
import { useRouter } from "next/router"

function ClientList({ selected = "all", setFilter, spacingVW = 15 }) {
  const [clients, setClients] = useState([])

  const { query } = useRouter()

  // useEffect(() => {
  //   document.querySelectorAll
  // })

  const mouseOver = (e) => {
    // console.log("test" + e)

    console.log(e.target.dataset.clientname)

    const elId = e.target.dataset.clientname
    const el = document.getElementById(elId)

    if (el) {
      el.style.filter = "blur(0px) grayscale(0)"
      el.style.transform = "scale(2)"
    }
  }

  const mouseLeave = (e) => {
    // console.log("test" + e)

    console.log(e.target.dataset.clientname)

    const elId = e.target.dataset.clientname
    const el = document.getElementById(elId)

    if (el) {
      el.style.filter = "blur(10px) grayscale(1)"
      // el.style.scale = 0.75
      el.style.transform = "scale(1)"
    }
  }

  useEffect(() => {
    client
      .fetch(
        `*[_type == "client" && defined(slug.current) && slug.current != "all"] | order(title asc) | {
            showWorkOnClientPage,
            title,
            _id,
            "slug": slug.current,
        }`
      )
      .then((res) => {
        setClients(res)
      })
      .catch((err) => {
        throw err
      })
  }, [])

  const carouselRef = useRef()

  useEffect(() => {
    const autoplay = carouselRef.current.splide.Components.Autoplay
    const arrowPrev = carouselRef.current.splide.Components.Arrows.arrows.prev.lastChild
    const arrowNext = carouselRef.current.splide.Components.Arrows.arrows.next.lastChild

    const prevFast = document.querySelector(".splide__arrow--prev-fast")
    const nextFast = document.querySelector(".splide__arrow--next-fast")

    autoplay.pause()

    prevFast.onmouseenter = () => {
      const tempInterval = setInterval(() => {
        carouselRef.current.splide.Components.Controller.go("<")
      }, 50)

      prevFast.onmouseleave = () => {
        clearInterval(tempInterval)
      }
    }

    arrowPrev.onmouseenter = () => {
      const tempInterval = setInterval(() => {
        carouselRef.current.splide.Components.Controller.go("<")
      }, 100)

      arrowPrev.onmouseleave = () => {
        clearInterval(tempInterval)
      }
    }

    arrowNext.onmouseenter = () => {
      const tempInterval = setInterval(() => {
        carouselRef.current.splide.Components.Controller.go(">")
      }, 100)

      arrowNext.onmouseleave = () => {
        clearInterval(tempInterval)
      }
    }

    nextFast.onmouseenter = () => {
      const tempInterval = setInterval(() => {
        carouselRef.current.splide.Components.Controller.go(">")
      }, 50)

      nextFast.onmouseleave = () => {
        clearInterval(tempInterval)
      }
    }

    // console.log(carouselRef.current.splide.Components.Direction.orient(100))
  }, [carouselRef])

  return (
    <Wrapper
      css={{
        "& > div": {
          "@sm": {
            maxW: `calc(${spacingVW}vw)`,
            textAlign: "right",
          },
        },
        // flex: 1,
        "& > .splide": {
          position: "relative",
          my: 50,
          "& .splide__arrow": {
            fs: 20,
            height: "auto",
            width: "auto",
            "@sm": {
              left: "auto",
              right: 0,
            },
            "&.splide__arrow--prev": {
              bottom: "100%",
              top: "auto",
            },
            "&.splide__arrow--prev-fast": {
              bottom: "calc(100% + 1rem)",
              top: "auto",
              "& svg": {
                transform: "rotate(-90deg)",
              },
            },
            background: "none",
            "&.splide__arrow--next": {
              bottom: "auto",
              top: "100%",
            },
            "&.splide__arrow--next-fast": {
              bottom: "auto",
              top: "calc(100% + 1rem)",
              "& svg": {
                transform: "rotate(90deg)",
              },
            },
          },
        },
        "& .splide__slide": {
          lineHeight: 1.2,
          "& > a": {
            lineHeight: "0.9 !important",
          },
          "@smMax": {
            textAlign: "center",
          },
        },
        "& .client-intro-copy": {
          // "@lg": {},
          "@lgMax": {
            display: "none",
          },
          "@smMax": {
            display: "block",
          },
        },
      }}
    >
      <div className="client-intro-copy">From humble beginnings, the scope of bluespace clients has skyrocketed to include countless industries, in locations from New York to China and beyond. We continually learn from our diverse clientele, putting that knowledge to work for all our clients. Our primary goal is to create noticeable results for clients. That&apos;s the key reason we&apos;ve grown so quickly. Put simply, our work works. And our clients are happy to spread the word.</div>
      <Splide
        ref={carouselRef}
        hasTrack={false}
        options={{
          speed: 10,
          direction: "ttb",
          // perMove: 1,
          // perPage: 10,
          gap: 0,
          wheel: true,
          type: "loop",
          pagination: false,
          drag: true,
          snap: true,
          autoHeight: true,
          height: "600px",
          // heightRatio: 1 / 2,
          resetProgress: false,
          pauseOnFocus: true,
          pauseOnHover: true,
          breakpoints: {
            1400: {
              height: "400px",
            },
            1500: {
              height: "150px",
            },
            1600: {
              height: "200px",
            },
            1700: {
              height: "250px",
            },
            2000: {
              height: "350px",
            },
            2200: {
              height: "400px",
            },
          },
        }}
      >
        <SplideTrack>
          {clients.map(({ _id, title, slug, showWorkOnClientPage }) => (
            <SplideSlide key={_id}>
              <div>
                {/* <Link passHref href={`/clients/${slug}`}> */}
                <StyledLink
                  // id={slug}
                  className={"client-row " + slug}
                  data-clientname={slug}
                  css={{
                    lh: "$sm",
                    textDecoration: slug === query?.slug ? "underline" : "none",
                    color: "#00ADEE",
                    fontWeight: showWorkOnClientPage && "600",
                    cursor: showWorkOnClientPage ? "pointer" : "default",
                  }}
                  onClick={() => showWorkOnClientPage && setFilter?.(slug)}
                  // onMouseEnter={mouseOver}
                  // onMouseLeave={mouseLeave}
                >
                  {title}
                </StyledLink>
                {/* </Link> */}
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows splide__arrows--ttb">
          <button className="splide__arrow splide__arrow--prev-fast ">
            <Arrow />
          </button>
          <button className="splide__arrow splide__arrow--prev ">
            <Arrow />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <Arrow />
          </button>
          <button className="splide__arrow splide__arrow--next-fast">
            <Arrow />
          </button>
        </div>
      </Splide>
    </Wrapper>
  )
}

export default ClientList

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
)
