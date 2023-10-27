/* eslint-disable react/prop-types */
function InfoTitle(props) {
  return <div className={`flex items-center gap-2 text-lg text-[#343f52] font-bold ${props.className} lg:w-1/3`}>{props.children}</div>
}
export default InfoTitle;