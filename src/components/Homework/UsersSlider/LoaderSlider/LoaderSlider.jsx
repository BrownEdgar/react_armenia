import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={600}
    height={150}
    viewBox="0 0 600 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="19" y="-10" rx="3" ry="3" width="52" height="6" /> 
    <rect x="85" y="4" rx="3" ry="3" width="305" height="23" /> 
    <rect x="100" y="41" rx="3" ry="3" width="191" height="15" /> 
    <rect x="339" y="36" rx="0" ry="0" width="23" height="25" /> 
    <rect x="485" y="174" rx="0" ry="0" width="2" height="0" />
  </ContentLoader>
)

export default MyLoader

