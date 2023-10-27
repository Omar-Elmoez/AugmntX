/* eslint-disable react/prop-types */
function DevInfo(props) {
  return <div className={`${props.className} flex ${props.start ? 'items-start' : 'items-center'} px-4 py-8 justify-between lg:justify-start`}>{props.children}</div>
}
export default DevInfo;