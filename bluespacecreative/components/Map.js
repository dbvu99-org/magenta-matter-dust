import { useEffect, useState } from "react"
import { StyledDiv } from "./Share"
import Script from "next/script"

const Map = () => {
  const [mounted, setMounted] = useState(0)

  useEffect(() => {
    console.log("hey where are you going")

    window.initMap?.()

    return () => {
      setMounted(0)
    }
  }, [mounted])

  return (
    <>
      <StyledDiv
        css={
          {
            // pl: "3rem",
          }
        }
      >
        <StyledDiv
          id="map"
          css={{
            m: "auto",
            display: "flex",
            height: 450,
            maxW: 600,
            overflow: "hidden",
            "@sm": {
              maxW: "29vw",
              height: "29vw",
              ml: "auto",
              mr: "4vw",
            },
            "@md": {
              maxW: "33vw",
              height: "33vw",
              ml: "auto",
              mr: "6vw",
            },
          }}
        >
          <div id="react-aria-3"></div>
        </StyledDiv>
      </StyledDiv>
      {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcHpa6EftiVW1UZsEFYooRH3ktDhbn-Us&v=weekly" defer /> */}
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcHpa6EftiVW1UZsEFYooRH3ktDhbn-Us&v=weekly"
        onLoad={() => {
          console.log("hi this is duc")
          window.initMap = function () {
            window.map = new google.maps.Map(document.getElementById("map"), {
              center: new google.maps.LatLng(42.0166178, -95.3584855),
              zoom: 16,
            })

            const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/"
            const icons = {
              parking: {
                icon: iconBase + "parking_lot_maps.png",
              },
              library: {
                icon: iconBase + "library_maps.png",
              },
              info: {
                icon: iconBase + "info-i_maps.png",
              },
              bluespace: {
                icon: "/images/GoogleMaps-Pin.png",
              },
            }
            const features = [
              {
                position: new google.maps.LatLng(42.0166178, -95.3584855),
                type: "bluespace",
              },
            ]

            for (let i = 0; i < features.length; i++) {
              const marker = new google.maps.Marker({
                position: features[i].position,
                icon: icons[features[i].type].icon,
                map: map,
              })
            }
          }

          window.initMap()
        }}
      ></Script>
    </>
  )
}

export default Map
