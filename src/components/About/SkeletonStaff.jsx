import React from "react"
import ContentLoader from "react-content-loader"

const MyLoaderStaff = (props) => (
  <ContentLoader 
    speed={2}
    width={370}
    height={564}
    viewBox="0 0 370 564"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="370" height="430" />
    <rect x="0" y="457" rx="0" ry="0" width="185" height="30" /> 
    <rect x="0" y="496" rx="0" ry="0" width="167" height="24" /> 
    <rect x="0" y="535" rx="0" ry="0" width="27" height="24" /> 
    <rect x="89" y="535" rx="0" ry="0" width="27" height="24" /> 
    <rect x="46" y="535" rx="0" ry="0" width="27" height="24" />
  </ContentLoader>
)

export default MyLoaderStaff