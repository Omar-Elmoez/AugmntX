
/* eslint-disable react/prop-types */
function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={`py-[.6rem] px-4 outline-none text-[#60697b] border border-[rgba(8, 60, 130, 0.07)] focus:border-[#afdcf8] rounded-lg shadow-inputShadow w-full ${props.className}`}
      onChange={props.onChange}
    />
  );
}

export default Input;
