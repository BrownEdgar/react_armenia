import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={600}
    height={500}
    viewBox="0 0 600 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="16" y="36" rx="0" ry="0" width="175" height="72" /> 
    <rect x="7" y="585" rx="0" ry="0" width="175" height="43" /> 
    <rect x="67" y="732" rx="3" ry="3" width="178" height="6" /> 
    <rect x="8" y="649" rx="0" ry="0" width="175" height="43" /> 
    <rect x="206" y="650" rx="0" ry="0" width="175" height="43" /> 
    <rect x="207" y="586" rx="0" ry="0" width="175" height="43" /> 
    <rect x="407" y="586" rx="0" ry="0" width="175" height="43" /> 
    <rect x="407" y="650" rx="0" ry="0" width="175" height="43" /> 
    <rect x="8" y="709" rx="0" ry="0" width="175" height="43" /> 
    <rect x="206" y="709" rx="0" ry="0" width="175" height="43" /> 
    <rect x="406" y="710" rx="0" ry="0" width="175" height="43" /> 
    <rect x="403" y="37" rx="0" ry="0" width="175" height="72" /> 
    <rect x="209" y="37" rx="0" ry="0" width="175" height="72" /> 
    <rect x="15" y="130" rx="0" ry="0" width="175" height="72" /> 
    <rect x="402" y="131" rx="0" ry="0" width="175" height="72" /> 
    <rect x="208" y="131" rx="0" ry="0" width="175" height="72" /> 
    <rect x="16" y="225" rx="0" ry="0" width="175" height="72" /> 
    <rect x="403" y="226" rx="0" ry="0" width="175" height="72" /> 
    <rect x="209" y="226" rx="0" ry="0" width="175" height="72" /> 
    <rect x="15" y="319" rx="0" ry="0" width="175" height="72" /> 
    <rect x="402" y="320" rx="0" ry="0" width="175" height="72" /> 
    <rect x="208" y="320" rx="0" ry="0" width="175" height="72" /> 
    <rect x="14" y="416" rx="0" ry="0" width="175" height="72" /> 
    <rect x="401" y="417" rx="0" ry="0" width="175" height="72" /> 
    <rect x="207" y="417" rx="0" ry="0" width="175" height="72" /> 
    <rect x="13" y="510" rx="0" ry="0" width="175" height="72" /> 
    <rect x="400" y="511" rx="0" ry="0" width="175" height="72" /> 
    <rect x="206" y="511" rx="0" ry="0" width="175" height="72" /> 
    <rect x="14" y="605" rx="0" ry="0" width="175" height="72" /> 
    <rect x="401" y="606" rx="0" ry="0" width="175" height="72" /> 
    <rect x="207" y="606" rx="0" ry="0" width="175" height="72" /> 
    <rect x="13" y="699" rx="0" ry="0" width="175" height="72" /> 
    <rect x="400" y="700" rx="0" ry="0" width="175" height="72" /> 
    <rect x="206" y="700" rx="0" ry="0" width="175" height="72" />
  </ContentLoader>
)

export default MyLoader
