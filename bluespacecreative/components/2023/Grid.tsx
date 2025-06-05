import ImageCustom from "./ImageCustom.js"
import  {styled} from 'styled-components'
import { useEffect } from "react"
import Masonry from "masonry-layout"

export default function Grid({ posts = [] }) {
  console.log(posts)
  const width = 200

  useEffect(() => {
    var elem = document.querySelector(".grid")
    var msnry = new Masonry(elem, {
      // options
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
      //   transitionDuration: 0,
      //   stagger: 0,
    })
  }, [posts])
  return (
    <div className="grid">
      <StyledPost
        css={{
          width: "20%",
        }}
        className="grid-sizer"
      />
      {posts.map(
        ({
          //
          client,
          brand,
          product,
          description,
          title,
          excerpt,
          featuredImg: { caption, ...img },
          featuredImg2nd: { caption: caption2, ...img2 },
          row,
          col,
          slug,
          ...post
        }) => {
          const w = width * col
          const h = width * row
          return (
            <StyledPost
              key={slug.current}
              className="grid-item"
              css={{
                //   bg: "black",
                width: `100%`,
                paddingBottom: `calc(100% * ${col} / ${row})`,
                "@media (min-width: 400px)": {
                  width: `calc(${20 * col}% + (${(col - 1) * 10}px))`,
                  paddingBottom: `calc(${20 * row}% + (${(row - 1) * 10}px))`,
                },
              }}
            >
              <article>
                <ImageCustom w={w} h={h} {...img} />
              </article>
            </StyledPost>
          )
        }
      )}
    </div>
  )
}


const StyledPost = styled.div`
  height: 0;
  position: relative;
  overflow: hidden;
  margin: 5px;

  ${({ customCss }) => customCss && customCss};

  & > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
  }
`;

