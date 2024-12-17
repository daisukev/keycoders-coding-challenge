/* eslint-disable react/prop-types */
const UserSelect = ({ children, ...props }) => {
  return <select {...props}> {children}</select>;
};

export default UserSelect;
