import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={488}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
    >
    <rect x="0" y="259" rx="10" ry="10" width="280" height="27" /> 
    <rect x="0" y="309" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="419" rx="10" ry="10" width="90" height="45" /> 
    <rect x="125" y="420" rx="10" ry="10" width="152" height="45" /> 
    <circle cx="140" cy="120" r="120" />
  </ContentLoader>
)

export default Skeleton