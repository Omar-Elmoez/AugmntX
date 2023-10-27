/* eslint-disable react/prop-types */
function Container(props) {
  return (
    <div className={`w-[90%] sm:max-w-[540px] md:max-w-[720px] mx-auto px-[calc(1.5rem_*_0.5)] ${props.className}`}>{props.children}</div>
  )
}

export default Container;