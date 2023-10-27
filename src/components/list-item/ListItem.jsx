/* eslint-disable react/prop-types */
function ListItem(props) {
  function onClickHandler() {
    if (props.industriesListHandler) {
      props.industriesListHandler()
    }
  }
  return <li className={`text-white font-semibold mb-3 ${props.className}`} onClick={onClickHandler}>{props.children}</li>
}

export default ListItem;