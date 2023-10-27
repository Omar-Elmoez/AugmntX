/* eslint-disable react/prop-types */
function Skill(props) {
  return <div className={`border border-[#006AFF] px-2 rounded-xl ${props.className}`}>{props.children}</div>;
}

export default Skill;
