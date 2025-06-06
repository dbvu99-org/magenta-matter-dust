
import RenderedImage from "./RenderedImage.js"
import { memo, useEffect, useState } from "react"
import PostDetails from "./PostDetails.js"

// const ModalPost = dynamic(() => import("./ModalPost"), { ssr: false });
function getLocalTimeFromUTCTime(utcTime) {
    var localTime = new Date(utcTime);
    var localOffset = localTime.getTimezoneOffset() * 60000;
    var utc = localTime.getTime() + localOffset;
    var local = new Date(utc + 3600000 * 8);
    return local;
  }

function getLocalDateStringFromUTCTime(utcTime) {
    var localTime = getLocalTimeFromUTCTime(utcTime);
    var month = localTime.getMonth() + 1;
    var day = localTime.getDate();
    var year = localTime.getFullYear();
    return month + "." + day + "." + year;
}
const MemoPost = ({
  //
  _type,
  // handleClick,
  title,
  row,
  col,
  featuredImg,
  slug,
  colorBackground,
  releaseDate,
  subCategory,
  // content,
  excerpt,
  featuredImg2nd,
  firstName,
  lastName,
  jobTitle,
  index,
  collectionSize,
  ...rest
}) => {
  // console.log("rerender", row, col);

  const [activeSlug, setActiveSlug] = useState("")
  // console.log("activeslug", activeSlug);

  const textShadow = "0 0 11px rgba(0, 0, 0, 0.85)"
  const textShadowNews = `2px 2px 4px black !important`
  const fontWeight600 = 600


  // const { query } = useRouter()
const query =null
  useEffect(() => {
    if (query.current === slug.current) {
      // console.log(slug.current)
      setActiveSlug(slug.current)
    }
  }, [])

  return (
    <div
      id={slug.current}
     
      onClick={() => {
        // console.log(slug)
        setActiveSlug(slug.current)
      }}
    >
      {featuredImg.src && (
        <RenderedImage
          //
          row={row}
          col={col}
          {...featuredImg}
        />
      )}{" "}
      <span
        //
      >
        {_type !== "news" && (
          <>
            {featuredImg2nd.src && (
              <RenderedImage
                //

                row={row}
                col={col}
                {...featuredImg2nd}
                secondary
               
              />
            )}
            <div
              //
             
            >
              {title || firstName}
            </div>
            {lastName && (
              <div
              >
                {lastName}
              </div>
            )}
            {jobTitle && (
              <div
              >
                {jobTitle}
              </div>
            )}
          </>
        )}
        {/* news */}
        {_type === "news" && (
          <>
            {subCategory.slug !== "media-release" && (
              <>
                <div
                 
                >
                  {getLocalDateStringFromUTCTime(releaseDate)}
                </div>
                <div
                
                >
                  {title}
                </div>
                <div
                >
                  {featuredImg2nd.caption}
                </div>
              </>
            )}
            {subCategory.slug === "media-release" && (
              <>
                <div>{getLocalDateStringFromUTCTime(releaseDate)}</div>
                <div
                 
                >
                  {title}
                </div>
                <div >{excerpt}</div>
              </>
            )}
          </>
        )}
        <PostDetails activeSlug={activeSlug} setActiveSlug={setActiveSlug} _type={_type} />
      </span>
    </div>
  )
}

const Post = memo(MemoPost, (prev, current) => {
  return prev === current
})

export default Post
