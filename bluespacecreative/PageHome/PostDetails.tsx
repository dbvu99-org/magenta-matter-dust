import { memo } from "react"
import CloseIcon from "./closeIcon.js"

const MemoPostDetails = ({
  //
  _type,
  // handleClick,
  activeSlug,
  setActiveSlug,
}) => {
  // console.log("active slug 1", activeSlug);
 

  const closeHandler = () => {
    setActiveSlug("")
  }

  return (
    <>
      {_type === "people" && (
        <>
          <div
            className="people-window"
          
          >
            <pre>
              {activeSlug}
            </pre>
          </div>
        </>
      )}
      {_type !== "people" && (
        <div >
          <main style={{ scrollBehavior: "smooth" }}>
            <button >
              <CloseIcon width={22} height={22}></CloseIcon>
            </button>
            <>
              <div>
                <pre>
                 slug: {activeSlug}

                </pre>
                <pre>
                 type: {_type}

                </pre>
              </div>
            </>
          </main>
        </div>
      )}
    </>
  )
}

const PostDetails = memo(MemoPostDetails, (prev, current) => {
  return prev.activeSlug === current.activeSlug
})

export default PostDetails
