import { getGridPosts, getSecondaryPagePosts } from "@clients/sanity/bluespacecreative/config.js"
import React, { useEffect, useRef, useState } from "react"

function useLazyLoad({ posts, _type = "all", filter = "all" }) {
  const [data, setData] = useState([])

  const loadingRef = useRef(null)

  useEffect(() => {
    setData(posts)
  }, [filter, posts])

  // apply intersetion observer on the loading ref
  useEffect(() => {
    if (data.length === 0) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          setTimeout(async () => {
            if (entry.isIntersecting) {
              let res = null
              if (_type === "all") {
                res = await getGridPosts(_type, data.length, 10)
              } else {
                res = await getSecondaryPagePosts({ _type, init: data.length, filter, withFilter: false })
                  .then((data) => {
                    // console.log(data);
                    return data.category?.[0]?.posts || []
                  })
                  .catch((err) => {
                    console.log(err)
                    return []
                  })
              }

              if (res) {
                setData([...data, ...res])
                if (res.length < 10) {
                  loadingRef.current.style.display = "none"
                }
              }
            }
          }, 100)
        },
        [filter, posts]
      )
    })
    observer.observe(document.querySelector(".loading"))

    return () => {
      observer.disconnect()
    }
  }, [data, _type, filter, posts])

  return { data, loadingRef }
}

export default useLazyLoad
