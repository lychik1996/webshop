import React from "react"
import ContentLoader from "react-content-loader"

const PreHomeItem = (props) => (
  <ContentLoader 
    speed={2}
    width={270}
    height={350}
    viewBox="0 0 270 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="270" height="250" /> 
    <rect x="0" y="266" rx="4" ry="4" width="140" height="84" />
  </ContentLoader>
)

export default PreHomeItem