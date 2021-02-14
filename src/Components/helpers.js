import React from 'react';
import SC from '../styles.js';

export const displayHeader = (headerRow) => {
  return (
    <SC.THeadRow>
      <SC.TRow>
        {headerRow.map((heading, index) => (
          <SC.THeading key={index}>{heading}</SC.THeading>
        ))}
      </SC.TRow>
    </SC.THeadRow>
  );
};