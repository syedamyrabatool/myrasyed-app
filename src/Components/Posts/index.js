import React from "react";
import propTypes from "prop-types";
import SC from '../../styles.js';

const Posts = (props) => {
  const { id, title, body } = props;

  return (
    <SC.TRow id={id}>
      <SC.TColumn>{title}</SC.TColumn>
      <SC.TColumn>{body}</SC.TColumn>
    </SC.TRow>
  );
};

Posts.propTypes = {
  id: propTypes.number,
  body: propTypes.string,
  title: propTypes.string,
};
export default Posts;
