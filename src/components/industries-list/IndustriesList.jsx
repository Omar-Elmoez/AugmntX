/* eslint-disable react/prop-types */
import ListItem from "../list-item/ListItem";

function IndustriesList(props) {
  return (
    <ul className={`pl-4 mt-2 transform transition-transform duration-500 ease-in-out ${
      props.showIndustriesList ? "block" : "hidden"}`}>
      <ListItem className='mb-2.5'>Travel</ListItem>
      <ListItem className='mb-2.5'>Automotive</ListItem>
      <ListItem className='mb-2.5'>Banking</ListItem>
      <ListItem className='mb-2.5'>Capital Markets</ListItem>
      <ListItem className='mb-2.5'>Healthcare</ListItem>
      <ListItem className='mb-2.5'>Digital Commerce</ListItem>
      <ListItem className='mb-3'>View all</ListItem>
    </ul>
  );
}

export default IndustriesList;