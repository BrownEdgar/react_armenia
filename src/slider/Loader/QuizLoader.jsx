import React from "react"
// import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={900}
    height={150}
    viewBox="0 0 900 150"
    backgroundColor="#c8c8da"
    foregroundColor="#787878"
    {...props}
    className='red'
  >
    <rect x="89" y="43" rx="3" ry="3" width="371" height="15" />
    <rect x="530" y="1" rx="3" ry="3" width="34" height="34" />
    <rect x="36" y="8" rx="3" ry="3" width="465" height="19" />
    <rect x="390" y="109" rx="3" ry="3" width="171" height="26" />
  </ContentLoader>
)

export default MyLoader


