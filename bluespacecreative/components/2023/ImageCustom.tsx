import { styled } from 'styled-components';

export default function ImageCustom({ w, h, blurDataURL, src, width, height, ...img }) {
  return (
    <>
      {src && (
        <StyledImage
          loading="lazy"
          //
          width={w}
          height={h}
          alt=""
          src={`${src}?w=${w}&h=${h}&q=100&fit=crop`}
        />
      )}
    </>
  )
}


const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
})
