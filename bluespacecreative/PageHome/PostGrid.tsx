import useLazyLoad from "./useLazyLoad.js"
import PostGridChildren from "./PostGridChildren.js"

function PostGrid({ posts = [], filter = "all", _type = "all", keyword }:any) {
  const { data, loadingRef } = useLazyLoad({ posts, _type, filter })

  return (
    <>
      <PostGridChildren
        //
        keyword={keyword}
        data={data}
        filter={filter}
        loadingRef={loadingRef}
        _type={_type}
      />
    </>
  )
}

export default PostGrid