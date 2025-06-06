import React from "react"

function RenderedImage({ row, col, blurDataURL, title, src, hotspot, secondary, ...rest }) {
  return (
    <div >
      <img
        src={src + `?&w=${400 * col}&h=${400 * row}&fit=crop&fp-x=${hotspot?.x || 0.5}&fp-y=${hotspot?.y || 0.5}`}
        alt={title}
      
      />
    </div>
  )
}

export default RenderedImage

function Option1() {
  return
}
