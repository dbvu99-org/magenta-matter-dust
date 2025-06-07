
import Post from "./Post.js"
import css from './PostGridChildren.module.scss'

const includeKeyword = (searchPhrase = "", keyword = "") => (searchPhrase?.toLowerCase().includes(keyword) ? true : false)

function PostGridChildren({
  //
  keyword,
  data = [],
  filter = "all",
  loadingRef,
  _type,
}) {
  // console.log("ok", keyword)

  return (
    <>
      <div
       
      >
        <div>
          <div className={css.grid}  data-packery='{ "itemSelector": ".grid-item", "gutter": 10 }'> 
            {data
              .filter((props, index) => {
                const keywordSearch = keyword?.toLowerCase()
                if (!keyword) return true

                if (_type === "work") {
                  const {
                    client,
                    brand,
                    product,
                    description,
                    title,
                    excerpt,
                    featuredImg: { caption },
                    featuredImg2nd: { caption: caption2 },
                  } = props
                  return (
                    includeKeyword(title, keywordSearch) ||
                    //
                    includeKeyword(brand, keywordSearch) ||
                    //
                    includeKeyword(client, keywordSearch) ||
                    //
                    includeKeyword(product, keywordSearch) ||
                    //
                    includeKeyword(description, keywordSearch) ||
                    //
                    includeKeyword(excerpt, keywordSearch) ||
                    includeKeyword(caption, keywordSearch) ||
                    includeKeyword(caption2, keywordSearch)
                  )
                }

                if (_type === "space") {
                  const {
                    description,
                    title,
                    excerpt,
                    featuredImg: { caption },
                    featuredImg2nd: { caption: caption2 },
                  } = props
                  return (
                    includeKeyword(description, keywordSearch) ||
                    //
                    includeKeyword(title, keywordSearch) ||
                    //
                    includeKeyword(excerpt, keywordSearch) ||
                    includeKeyword(caption, keywordSearch) ||
                    includeKeyword(caption2, keywordSearch)
                  )
                }

                if (_type === "news") {
                  const {
                    description,
                    title,
                    excerpt,
                    featuredImg: { caption },
                    featuredImg2nd: { caption: caption2 },
                  } = props
                  return (
                    includeKeyword(description, keywordSearch) ||
                    //
                    includeKeyword(title, keywordSearch) ||
                    //
                    includeKeyword(excerpt, keywordSearch) ||
                    //
                    includeKeyword(caption, keywordSearch) ||
                    includeKeyword(caption2, keywordSearch)
                  )
                }

                return true
              })
              .map((props, index) => {
                // console.log("props", props)
                // return (
                //   <Post
                //     //
                //     filter={filter}
                //     key={index}
                //     index={index}
                //     {...props}
                //   />
                // )
                return (
                 <div key={index} className={`${css.card} ${css[`col-${props?.col}`]} ${css[`row-${props?.row}`]} `} >
                   <div  className={`${css.card_content}  `}>
                    <p> {props?.brand}</p>
                    <p> col {props?.col}</p>
                    <p> row {props?.row}</p>
                   </div>
                 </div>
                )
              })}
            <LoadingBlock loadingRef={loadingRef} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PostGridChildren

function LoadingBlock({ loadingRef = null }) {
  return (
    <div
      style={{
        background: "gray",
        backgroundImage: "url(https://i.giphy.com/media/W22b2eea2XxB6DiTWg/giphy.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 0,
        paddingTop: "100%",
        overflow: "hidden",
      }}
      className="loading"
      ref={loadingRef}
    ></div>
  )
}
