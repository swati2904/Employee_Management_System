import React from 'react';

const FormattedDate = ({ dateString }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return <span>{formatDate(dateString)}</span>;
};

export default FormattedDate;
