import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={800}
    viewBox="0 0 800 800"
    backgroundColor="#d9d9d9"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="34" y="150" rx="0" ry="0" width="631" height="579" />
  </ContentLoader>
)

export default MyLoader