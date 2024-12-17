/* eslint-disable react/prop-types */
const SelectItem = ({ children, ...props }) => {
  return <option value={props.value}>{props.name}</option>;
};

export default SelectItem;
