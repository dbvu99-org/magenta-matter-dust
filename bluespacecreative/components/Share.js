import { styled } from "@nextui-org/react"

export const StyledDiv = styled("div")

export const StyledSection = styled("section", {
  // display: "flex",
  // justifyContent: "center",
  position: "relative",
  // overflow: "hidden",
  height: "100vh",
})

export const baseWidth = "calc(100vh - 140px)"
export const baseHeight = "calc(100vw * 450/864)"

export const baseWidthSM = "calc(100vh - 180px)"
export const baseHeightSM = "calc(100vw * 660/315)"

export const calcValue = (val) => `calc((100vh - 140px) * ${val}/450)`
export const calcValueSM = (val) => `calc((100vh - 180px) * ${val}/660)`
export const calcValueW = (val) => `calc((100vmin - 140px) * ${val}/864)`
export const calcValueWSM = (val) => `calc((100vh - 180px) * ${val}/315)`
export const calcValueH = (val) => `calc(100vw * ${val}/864)`
export const calcValueHSM = (val) => `calc(100vw * ${val}/315)`
export const calcPct = (val) => `calc(100% * ${val})`
export const calEm = (val) => `${val}em`

export const baseWidthMobileSm = "calc(100vh - 180px)"
// export const baseWidthMobile = "calc(100vh - 140px)"
export const baseWidthMobile = "calc(100vh - 140px)"

export const SharedSection = styled("section", {
  margin: "auto",
  w: baseWidth,
  minHeight: baseWidth,
  position: "relative",
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  flexDirection: "column",
  // bg: "red",
  "@media (min-aspect-ratio: 1/1)": {
    w: "100vw",
    maxW: "650px",
  },
  "@media (max-aspect-ratio: 1/1) and (min-width: 768px)": {
    minHeight: baseWidthMobile,
  },
  "@media (max-aspect-ratio: 1/1) and (max-width: 767.98px)": {
    minHeight: baseWidthMobileSm,
  },
})
export const calc = (calculation) => `calc(${calculation})`

export const SharedHeader = styled("h2", {
  fontWeight: 600,
  fontSize: calc(`${baseWidth} * 0.2`),
  lineHeight: 0.78,
  textTransform: "uppercase",
  "@media (max-width: 1400px)": {
    fontSize: calc(`${baseWidth} * 0.15`),
  },
  "@media (max-width: 1100px)": {
    fontSize: calc(`${baseWidth} * 0.12`),
  },
  "@media (max-aspect-ratio: 1/1)": {
    fontSize: "13vw",
    fontSize: "18vw",
  },
  "@media (max-aspect-ratio: 1/1) and (max-width: 600px)": {
    fontSize: "17vw",
    // fontSize: "11vw",
  },
})

export const StyledP = styled("p", {
  mt: 0,
  mb: 0,
  lineHeight: "0.78em",
  // fontSize: "10.5vw",
  fontWeight: 600,
  fontSize: "calc((100vmin - 146px) / 4.6)",
  "@media (max-width: 1200px)": {
    fontSize: "calc((100vmin - 146px) / 5.6)",
  },
  "@media (max-width: 1100px)": {
    fontSize: "calc((100vmin - 146px) / 6.6)",
  },
})

export const StyledText = styled("p", {
  // m: 0,
  // fontWeight: 600,
  // fontSize: `1.1vw`,
  fontSize: 16,
  letterSpacing: `0.001em`,
  // maxW: "36vmin",
  mt: "1em",
  // mr: "41.5vmin",
  // ml: "auto",
})

export const StyledImg = styled("img", {
  position: "absolute",
  // width: "100vw",
  // height: "100vh",
  objectFit: "cover",
  maxW: "unset",
})

export const StyledAnchor = styled("a", {})

export const CollapseHeader = styled("h3", {
  fontWeight: "600",
  lineHeight: "1",
})

export const ReusableDiv = styled("div", {
  position: "relative",
  "@media (max-aspect-ratio: 1362/851)": {
    minHeight: baseWidth,
    display: "flex",
    alignItems: "flex-start",
  },
  "@media (max-width: 600px)": {
    minHeight: baseWidthSM,
  },
})

export const getVal = (number) => number + "vw"

export const ReusableDiv2 = styled("div", {
  position: "relative",
  "@media (max-aspect-ratio: 1362/851) and (min-width: 600.12px)": {
    minHeight: baseWidth,
    display: "flex",
    alignItems: "flex-start",
  },
  // "@media (max-width: 600px)": {
  //   width: "100vw",
  //   height: getVal((100 * 600) / 315),
  // },
  "@media (max-width: 600px)": {
    width: "100vw",
    minHeight: baseWidthSM,
    h: "auto",
  },
})

export const ReusableContainer = styled("div", {
  position: "relative",
  mx: "auto",
  "@media (min-aspect-ratio: 1362/851) and (min-width: 600.12px)": {
    h: baseWidth,
    w: `calc(${baseWidth} * 864/450)`,
  },
  "@media (max-aspect-ratio: 1362/851) and (min-width: 600.12px)": {
    minHeight: baseHeight,
    w: `100vw`,
  },
  "@media (min-aspect-ratio: 386/771) and (max-width: 600px)": {
    w: `calc(${baseWidthSM} * 315 * 1.5 /660)`,
    h: baseWidthSM,
  },
  "@media (max-aspect-ratio: 386/771) and (max-width: 600px)": {
    h: baseHeightSM,
    maxH: baseWidthSM,
    w: `100vw`,
  },
})

export const ReusableContainer2 = styled("div", {
  position: "relative",
  mx: "auto",
  "@media (min-aspect-ratio: 1362/851)": {
    h: baseWidth,
    w: `calc(${baseWidth} * 864/450)`,
  },
  "@media (max-aspect-ratio: 1362/851)": {
    minHeight: baseHeight,
    w: `100vw`,
  },
})

export const ReusableContainer3 = styled("div", {
  position: "relative",
  mx: "auto",
  "@media (min-aspect-ratio: 1362/851)": {
    h: baseWidth,
    w: `calc(${baseWidth} * 864/450)`,
  },
  "@media (max-aspect-ratio: 1362/851)": {
    minHeight: baseHeight,
    w: `100vw`,
  },
})

const vhMinus179 = `calc(100vh - 179px)`
const vhMinus142 = `calc(100vh - 142px)`
const vmin315 = (num) => `calc(100vmin / 315 * ${num})`
const vh483 = (num) => `calc(${vhMinus179} / 438 * ${num})`
const vh450 = (num) => `calc(${vhMinus142} / 450 * ${num})`
const vw834 = (num) => `calc(100vw / 864 * ${num})`

export const ReusableDiv3 = styled("div", {
  position: "relative",
  display: "flex",
  // background: "Wheat",
  // background: "Wheat",
  // "@media (max-aspect-ratio: 1362/851) and (min-aspect-ratio: 315/663)": {
  //   minHeight: baseWidth,
  //   display: "flex",
  //   alignItems: "center",
  //   background: "red",
  // },
  "& > div": {
    position: "relative",
    margin: "auto",
    "& .purpose-header": {
      lineHeight: "calc(40/50)",
      tt: "uppercase",
      fontWeight: 600,
    },
    "& p": {
      lineHeight: "calc(18/10)",
    },
    "& .img-wrapper": {
      "& img": {
        display: "block",
        width: "100%",
        height: "auto",
      },
      // bg: "black",
      position: "absolute",
      "&.ignition-wrapper-img": {
        "& img": {},
      },
      "& .ignition-img": {
        transform: `rotate(11.5deg)`,
        transformOrigin: "0% 0%",
      },
      "& .blast-img": {
        transform: `rotate(13deg)`,
        transformOrigin: "0% 0%",
      },
    },
  },
  // mobile vh483 orange
  "@media (min-aspect-ratio: 770/1254)": {
    "& > div": {
      "& .down-arrow-button": {
        top: vh483(380),
      },
      "&:not(.wom-container)": {
        p: vh483(20),
      },
      "&.sd-container": {
        "& > .down-arrow-button svg": {
          fill: "white",
        },
      },
      "&.ttu-container": {
        "& > .down-arrow-button svg": {
          fill: "white",
        },
      },
      margin: "auto",
      height: vhMinus179,
      width: vh483(315),
      maxW: "100vw",
      // background: "orange",
      // header
      "& .purpose-header": {
        fontSize: vh483(50),
        "&.cf-header": {
          textAlign: "right",
          "&:after": {
            content: ".",
            position: "absolute",
          },
        },
        "&.atc-header": {
          textAlign: "right",
          "&:after": {
            content: ".",
            position: "absolute",
          },
        },
        "&.ttu-header": {
          textAlign: "right",
        },
        "&.ua-header": {
          textAlign: "right",
          "&:after": {
            content: ".",
            position: "absolute",
          },
        },
        "&.bc-header": {
          fontSize: vh483(45),
          lineHeight: 38 / 45,
          "-ms-hyphens": "auto",
          "-moz-hyphens": "auto",
          "-webkit-hyphens": "auto",
          wordBreak: "break-word",
        },
        // ignition
        "&.ignition-header": {
          maxW: vh483(237.193),
          textAlign: "right",
        },
        "&.wom-header": {
          width: "8em",
          mx: "auto",
          fontSize: vh483(35),
          lineHeight: "calc(32/40)",
          position: "absolute",
          right: 0,
          left: 0,
          transform: "rotate(-10.5deg)",
          transformOrigin: "0 0",
          top: vh483(73),
          display: "flex",
          justifyContent: "center",
          "& > br": {
            display: "none",
          },
        },
        "&.gar-header": {
          fontSize: vh483(35),
        },
        "&.sd-header": {
          fontSize: vh483(40),
          "& > br": {
            display: "none",
          },
        },
      },
      // paragraph vh483
      "& p": {
        fontSize: vh483(10),
        // ignition
        "&.ignition-paragraph": {
          pl: vh483(2),
          maxW: vh483(158.301),
          textAlign: "right",
        },
        "&.wom-paragraph": {
          maxW: vh483(194.479),
          ml: vh483(97.5),
          mt: vh483(274),
        },
        "&.bc-paragraph": {
          maxW: vh483(228),
          px: vh483(10),
        },
        "&.cf-paragraph": {
          textAlign: "right",
          maxW: vh483(150),
          ml: "auto",
          // px: vh483(19),
        },
        "&.sd-paragraph": {
          position: "relative",
          zIndex: 1,
        },
        "&.atc-paragraph": {
          textAlign: "right",
          maxW: vh483(114),
          ml: "auto",
          // px: vh483(19),
        },
        "&.ttu-paragraph": {
          textAlign: "right",
          ml: "auto",
          mx: vh483(17.5),
          // px: vh483(19),
        },
        "&.ua-paragraph": {
          textAlign: "right",
          maxW: vh483(125),
          ml: vh483(12),
          // px: vh483(19),
        },
      },

      // img vh483 orange
      "& .img-wrapper": {
        position: "absolute",
        zIndex: 1,
        "&.bc-wrapper-img": {
          width: vh483(344.54),
          top: vh483(61),
          left: vh483(12),
        },
        "&.ttu-wrapper-img": {
          width: vh483(325.986),
          left: 0,
          bottom: 0,
        },
        "&.cf-wrapper-img": {
          width: vh483(222.66),
          top: vh483(88),
          left: vh483(-93.5),
        },
        "&.atc-wrapper-img": {
          width: vh483(273),
          top: vh483(65),
          left: vh483(-80.5),
        },
        "&.ua-wrapper-img": {
          width: vh483(123.33),
          top: vh483(99),
          left: vh483(171.66),
        },
        "&.ignition-wrapper-img": {
          width: vh483(200),
          left: vh483(171),
          top: 0,
        },
        "&.wom-wrapper-img": {
          width: vh483(304.057),
          left: vh483(-88),
          bottom: 0,
          "& > img": {
            width: "100%",
          },
        },
        "& .ignition-img": {
          position: "relative",
          zIndex: 1,
        },
        "& .blast-img": {
          width: vh483(144.346),
          transform: `rotate(13deg) translate(${vh483(-54)},${vh483(-78)})`,
        },
        "&.sd-wrapper-img": {
          left: vh483(-105),
          top: vh483(165),
          width: vh483(415),
          "& img": {
            transform: "rotate(-11.25deg)",
            transformOrigin: "0 0",
          },
        },
        "&.gar-wrapper-img": {
          width: vh483(245),
          left: vh483(94.5),
          bottom: 0,
        },
      },
    },
  },

  // mobile vmin315 red
  "@media (max-aspect-ratio: 770/1254)": {
    height: "calc(100vh - 179px)",
    width: "100vw",
    display: "flex",
    "& > div": {
      "& .down-arrow-button": {
        top: vmin315(400),
      },
      margin: "auto",
      // background: "red",
      width: "100vmin",
      height: vmin315(438),
      "&:not(.wom-container)": {
        p: vmin315(20),
      },
      "&.sd-container": {
        "& > .down-arrow-button svg": {
          fill: "white",
        },
      },
      "&.ttu-container": {
        "& > .down-arrow-button svg": {
          fill: "white",
        },
      },
      // header
      "& .purpose-header": {
        fontSize: vmin315(50),
        "&.cf-header": {
          textAlign: "right",
          "&:after": {
            content: ".",
            position: "absolute",
          },
        },
        "&.bc-header": {
          fontSize: vmin315(45),
          lineHeight: 38 / 45,
          "-ms-hyphens": "auto",
          "-moz-hyphens": "auto",
          "-webkit-hyphens": "auto",
          wordBreak: "break-word",
          hyphens: "auto",
        },
        "&.atc-header": {
          textAlign: "right",
          "&:after": {
            content: ".",
            position: "absolute",
          },
        },
        // ignition
        "&.ignition-header": {
          maxW: vmin315(237.193),
          textAlign: "right",
        },
        "&.wom-header": {
          fontSize: vmin315(35),
          lineHeight: "calc(32/40)",
          width: "8em",
          mx: "auto",
          position: "absolute",
          top: vmin315(73),
          right: 0,
          left: 0,
          transform: "rotate(-10.5deg)",
          transformOrigin: "0 0",
          display: "flex",
          justifyContent: "center",
          "& > br": {
            display: "none",
          },
        },
        "&.ua-header": {
          textAlign: "right",
          "&:after": {
            content: ".",
            position: "absolute",
          },
        },
        "&.ttu-header": {
          textAlign: "right",
        },
        "&.sd-header": {
          fontSize: vmin315(40),
          "& > br": {
            display: "none",
          },
        },
        "&.gar-header": {
          fontSize: vmin315(35),
        },
      },
      // paragraph vmin315
      "& p": {
        fontSize: vmin315(10),
        // ignition
        "&.ignition-paragraph": {
          pl: vmin315(2),
          maxW: vmin315(158.301),
          textAlign: "right",
        },
        "&.wom-paragraph": {
          maxW: vmin315(194.479),
          mt: vmin315(274),
          ml: vmin315(97.5),
        },
        "&.bc-paragraph": {
          maxW: vmin315(228),
          px: vmin315(10),
        },
        "&.cf-paragraph": {
          textAlign: "right",
          maxW: vmin315(150),
          ml: "auto",
          // px: vh483(19),
        },
        "&.ua-paragraph": {
          textAlign: "right",
          maxW: vmin315(125),
          ml: vmin315(12),
          // px: vh483(19),
        },
        "&.atc-paragraph": {
          textAlign: "right",
          maxW: vmin315(114),
          ml: "auto",
          // px: vh483(19),
        },
        "&.ttu-paragraph": {
          textAlign: "right",
          ml: "auto",
          mx: vmin315(17.5),
          // px: vh483(19),
        },
        "&.sd-paragraph": {
          position: "relative",
          zIndex: 1,
        },
      },
      // img
      "& .img-wrapper": {
        position: "absolute",
        "&.ignition-wrapper-img": {
          width: vmin315(200),
          left: vmin315(171),
          top: 0,
        },
        "&.bc-wrapper-img": {
          width: vmin315(344.54),
          top: vmin315(61),
          left: vmin315(12),
        },
        "&.wom-wrapper-img": {
          // width: vmin315(310.057),
          width: vmin315(304.057),
          left: vmin315(-88),
          bottom: 0,
          "& > img": {
            width: "100%",
          },
        },
        "& .blast-img": {
          width: vmin315(144.346),
          transform: `rotate(13deg) translate(${vmin315(-54)},${vmin315(-78)})`,
        },
        "& .ignition-img": {
          position: "relative",
          zIndex: 1,
        },
        "&.cf-wrapper-img": {
          width: vmin315(222.66),
          top: vmin315(88),
          left: vmin315(-93.5),
        },
        "&.ua-wrapper-img": {
          width: vmin315(123.33),
          top: vmin315(99),
          left: vmin315(171.66),
        },
        "&.atc-wrapper-img": {
          width: vmin315(273),
          top: vmin315(45),
          left: vmin315(-80.5),
        },
        "&.ttu-wrapper-img": {
          width: vmin315(325.986),
          left: 0,
          bottom: 0,
        },
        "&.sd-wrapper-img": {
          left: vmin315(-105),
          top: vmin315(165),
          width: vmin315(415),
          "& img": {
            transform: "rotate(-11.25deg)",
            transformOrigin: "0 0",
          },
        },
        "&.gar-wrapper-img": {
          width: vmin315(245),
          left: vmin315(94.5),
          bottom: 0,
        },
      },
    },
  },
  "@media (min-aspect-ratio: 315/662), (max-aspect-ratio: 315/662)": {},

  // desktop
  "@media (min-aspect-ratio: 1/1) and (min-width: 768px)": {
    height: vhMinus142,
    "& > div": {
      "& .down-arrow-button": {
        top: vw834(400),
      },
      width: "100vw",
      height: vw834(450),
      // background: "Green",
      "&.ignition-container": {
        pt: vw834(25),
        pl: vw834(85),
      },
      "&.sd-container": {
        "& > .down-arrow-button svg": {
          fill: "Black",
        },
      },
      "&.ttu-container": {
        "& > .down-arrow-button svg": {
          fill: "Black",
        },
      },
      // header
      "& .purpose-header": {
        lineHeight: "calc(70/90)",
        fontSize: vw834(87),
        ml: "auto",
        // ignition
        "&.cf-header": {
          mt: vw834(25),
          ml: vw834(345.816),
          maxW: vw834(500),
          textAlign: "left",
          marginRight: 0,
        },
        "&.atc-header": {
          mt: vw834(45),
          ml: vw834(380.816),
          maxW: vw834(500),
          textAlign: "left",
          marginRight: 0,
        },
        "&.sd-header": {
          fontSize: vw834(87),
          mt: vw834(45),
          ml: vw834(380.816),
          maxW: vw834(500),
          textAlign: "left",
          marginRight: 0,
        },
        "&.bc-header": {
          wordBreak: "unset",
          lineHeight: "calc(70/90)",
          fontSize: vw834(87),
          maxW: vw834(750),
          textAlign: "right",
          pr: vw834(300),
          mx: "auto",
          mt: vw834(65),
          "& > span": {
            display: "none",
          },
        },
        "&.ignition-header": {
          mr: vw834(275),
          maxW: vw834(477.981),
          textAlign: "right",
        },
        "&.wom-header": {
          fontSize: vw834(70),
          width: vw834(496),
          top: vw834(110),
          left: "auto",
          right: 0,
          lineHeight: "calc(57.4/73.8)",
          "& > br": {
            display: "initial",
          },
        },
        "&.ua-header": {
          maxW: vw834(483.248),
          mt: vw834(65),
          mr: vw834(275),
        },
        "&.ttu-header": {
          maxW: vw834(483.248),
          // mt: vw834(28),
          mt: vw834(15),
          mr: vw834(320),
        },
        "&.gar-header": {
          textAlign: "right",
          fontSize: vw834(87),
          mt: vw834(45),
          mr: vw834(338),
        },
      },
      // paragraph green
      "& p": {
        fontSize: vw834(11),
        // ignition
        "&.ignition-paragraph": {
          ml: vw834(117),
          maxW: vw834(315.879),
          textAlign: "right",
        },
        "&.wom-paragraph": {
          maxW: vw834(283),
          ml: vw834(393.624),
          mt: vw834(274),
        },
        "&.bc-paragraph": {
          maxW: vw834(360.879),
          ml: vw834(130.879),
          textAlign: "right",
          "& > br": {
            display: "none",
          },
        },
        "&.cf-paragraph": {
          textAlign: "left",
          maxW: vw834(340.5),
          ml: vw834(364),
          // ml: "auto",
        },
        "&.atc-paragraph": {
          textAlign: "left",
          maxW: vw834(221.5),
          ml: vw834(400),
          // ml: "auto",
        },
        "&.sd-paragraph": {
          textAlign: "left",
          maxW: vw834(370),
          ml: vw834(385.816),
          // ml: vw834(400),
        },
        "&.ua-paragraph": {
          textAlign: "right",
          maxW: vw834(250.22),
          ml: "auto",
          mr: vw834(275),
        },
        "&.ttu-paragraph": {
          textAlign: "right",
          maxW: vw834(335.612),
          ml: "auto",
          mr: vw834(420),
          mt: "0.5em",
        },
        "&.gar-paragraph": {
          textAlign: "right",
          maxW: vw834(335.612),
          ml: "auto",
          mr: vw834(435),
          mt: "0.5em",
          "& > br": {
            display: "none",
          },
        },
      },
      // img green
      "& .img-wrapper": {
        position: "absolute",
        "&.cf-wrapper-img": {
          width: vw834(322.815),
          top: vw834(-30),
          left: vw834(60),
        },
        "&.atc-wrapper-img": {
          width: vw834(340.815),
          top: vw834(-30),
          left: vw834(100),
        },
        "&.sd-wrapper-img": {
          width: vw834(515.815),
          top: vw834(-20),
          left: 0,
          "& > img": {
            transform: "none",
          },
        },
        "&.ua-wrapper-img": {
          objectFit: "contain",
          width: vw834(194),
          top: vw834(-80),
          right: vw834(85),
          left: "auto",
        },
        "&.ttu-wrapper-img": {
          objectFit: "contain",
          width: vw834(640),
          height: vw834(442),
          top: vw834(0),
          // right: vw834(15),
          left: "auto",
          right: vw834(20),
        },
        "&.gar-wrapper-img": {
          objectFit: "contain",
          height: vw834(440.725),
          width: "auto",
          bottom: vw834(40),
          // right: vw834(15),
          left: "auto",
          right: vw834(75),
          "& > img": {
            width: "auto",
            height: "100%",
          },
        },
        "&.bc-wrapper-img": {
          width: vw834(452.283),
          left: vw834(430.283),
          top: vw834(-69),
        },
        "&.ignition-wrapper-img": {
          width: vw834(256.756),
          left: vw834(479.386),
          top: 0,
        },
        "&.wom-wrapper-img": {
          width: vw834(413.539),
          left: vw834(10),
          "& > img": {
            width: vw834(413.539),
            height: vw834(386.39),
            objectFit: "cover",
            objectPosition: "top",
          },
        },
        "& .blast-img": {
          position: "absolute",
          width: vw834(184.703),
        },
        "& .ignition-img": {
          position: "relative",
          zIndex: 1,
        },
      },
    },
  },
  // desktop
  "@media (min-aspect-ratio: 1377/862) and (min-width: 768px)": {
    "& > div": {
      "& .down-arrow-button": {
        top: vh450(400),
      },
      height: vhMinus142,
      width: "100%",
      maxW: vh450(864),
      // background: "Brown",
      "&.ignition-container": {
        pt: vh450(25),
        pl: vh450(85),
      },

      "&.sd-container": {
        "& > .down-arrow-button svg": {
          fill: "Black",
        },
      },
      "&.ttu-container": {
        "& > .down-arrow-button svg": {
          fill: "Black",
        },
      },
      // header brown
      "& .purpose-header": {
        lineHeight: "calc(70/90)",
        fontSize: vh450(87),
        "&.bc-header": {
          fontSize: vh450(87),
          maxW: vh450(750),
          textAlign: "right",
          pr: vh450(300),
          mx: "auto",
          mt: vh450(65),
          "& > span": {
            display: "none",
          },
        },
        // ignition
        "&.ignition-header": {
          maxW: vh450(477.981),
          textAlign: "right",
          mr: vh450(275),
        },
        "&.wom-header": {
          fontSize: vh450(70),
          width: vh450(496),
          top: vh450(110),
          lineHeight: "calc(57.4/73.8)",
          left: "auto",
          right: 0,
          "& > br": {
            display: "initial",
          },
        },
        "&.cf-header": {
          mt: vh450(25),
          ml: vh450(345.816),
          maxW: vh450(466.31),
          textAlign: "left",
        },
        "&.ua-header": {
          maxW: vh450(483.248),
          mt: vh450(65),
          mr: vh450(275),
        },
        "&.atc-header": {
          mt: vh450(45),
          ml: vh450(380.816),
          maxW: vh450(500),
          textAlign: "left",
          marginRight: 0,
        },

        "&.sd-header": {
          fontSize: vh450(87),
          mt: vh450(45),
          ml: vh450(380.816),
          maxW: vh450(500),
          textAlign: "left",
          marginRight: 0,
        },
        "&.ttu-header": {
          maxW: "unset",
          mt: vh450(15),
          mr: vh450(320),
        },
        "&.gar-header": {
          textAlign: "right",
          fontSize: vh450(87),
          mt: vh450(45),
          mr: vh450(338),
        },
      },
      // paragraph
      "& p": {
        // fontSize: 16,
        fontSize: vh450(11),
        // ignition
        "&.ignition-paragraph": {
          ml: vh450(117),
          maxW: vh450(310.879),
          textAlign: "right",
        },
        "&.wom-paragraph": {
          maxW: vh450(283),
          ml: vh450(393.624),
          mt: vh450(274),
        },
        "&.cf-paragraph": {
          textAlign: "left",
          maxW: vh450(340.5),
          ml: vh450(364),
          // ml: "auto",
        },
        "&.atc-paragraph": {
          textAlign: "left",
          maxW: vh450(221.5),
          ml: vh450(400),
          // ml: "auto",
        },
        "&.bc-paragraph": {
          maxW: vh450(360.879),
          ml: vh450(130.879),
          textAlign: "right",
          "& > br": {
            display: "none",
          },
        },
        "&.ua-paragraph": {
          textAlign: "right",
          maxW: vh450(250.22),
          ml: "auto",
          mr: vh450(275),
        },
        "&.ttu-paragraph": {
          textAlign: "right",
          maxW: vh450(335.612),
          ml: "auto",
          // mr: vh450(405),
          mr: vh450(420),
          mt: "0.5em",
        },
        "&.sd-paragraph": {
          textAlign: "left",
          maxW: vh450(370),
          ml: vh450(385.816),
          // ml: vw834(400),
        },
        "&.gar-paragraph": {
          textAlign: "right",
          maxW: vh450(335.612),
          ml: "auto",
          mr: vh450(435),
          mt: "0.5em",
          "& > br": {
            display: "none",
          },
        },
        // 840
      },
      // img green
      "& img": {
        "&.ignition-img": {
          // top: 0,
        },
      },
      "& .img-wrapper": {
        position: "absolute",
        "&.bc-wrapper-img": {
          width: vh450(452.283),
          left: vh450(430.283),
          top: vh450(-69),
        },
        "&.ignition-wrapper-img": {
          width: vh450(256.756),
          left: vh450(479.386),
          top: 0,
        },
        "&.wom-wrapper-img": {
          width: vh450(413.539),
          left: vh450(10),
          "& > img": {
            width: vh450(413.539),
            height: vh450(386.39),
            objectFit: "cover",
            objectPosition: "top",
          },
        },
        "& .blast-img": {
          transformOrigin: "0% 0%",
          position: "absolute",
          width: vh450(184.703),
          // top: vh450(397.764),
          // right: vh450(7),
          transform: `rotate(13deg) translate(${vh450(42.057)},${vh450(238.358)})`,
        },
        "&.cf-wrapper-img": {
          width: vh450(322.815),
          top: vh450(-30),
          left: vh450(60),
        },
        "&.atc-wrapper-img": {
          width: vh450(340),
          top: vh450(-30),
          left: vh450(95),
        },
        "&.ua-wrapper-img": {
          objectFit: "contain",
          width: vh450(194),
          top: vh450(-80),
          right: vh450(85),
          left: "auto",
        },
        "& .ignition-img": {
          position: "relative",
          zIndex: 1,
        },

        "&.ttu-wrapper-img": {
          objectFit: "contain",
          width: vh450(640),
          height: vh450(442),
          top: vh450(0),
          right: vh450(20),
          left: "auto",
        },
        "&.sd-wrapper-img": {
          width: vh450(515.815),
          top: vh450(-20),
          left: 0,
        },
        "&.gar-wrapper-img": {
          objectFit: "contain",
          height: vh450(440.725),
          width: "auto",
          bottom: vh450(40),
          // right: vw834(15),
          left: "auto",
          right: vh450(75),
          "& > img": {
            width: "auto",
            height: "100%",
          },
        },
      },
    },
  },
})
