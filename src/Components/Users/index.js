import React from "react";
import propTypes from "prop-types";
import SC from '../../styles.js';

const Users = (props) => {
  const { id, name, email, city, company, renderPost } = props;
  return (
    <SC.TRow onClick={() => renderPost(id)}>
        <SC.TColumn>{name}</SC.TColumn>
        <SC.TColumn>
            <a href={`mailto:${email}`}>{email}</a>
        </SC.TColumn>
        <SC.TColumn>{city}</SC.TColumn>
        <SC.TColumn>{company}</SC.TColumn>
    </SC.TRow>
  );
};

Users.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  email: propTypes.string,
  city: propTypes.string,
  company: propTypes.string,
  renderPost: propTypes.func,
};
export default Users;
