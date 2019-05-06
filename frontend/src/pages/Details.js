import React from 'react';

const Details = ({ match }) => {
  return <h3>ID: {match.params.id}</h3>;
};

export default Details;
