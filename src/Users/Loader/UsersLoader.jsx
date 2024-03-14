


import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#c9c9c9"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="245" y="24" rx="3" ry="3" width="26" height="26" /> 
    <rect x="15" y="9" rx="3" ry="3" width="196" height="15" /> 
    <rect x="101" y="60" rx="3" ry="3" width="173" height="16" />
  </ContentLoader>
)

export default MyLoader

