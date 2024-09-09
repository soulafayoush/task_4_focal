import React from 'react';

const Header = ({ text, subText }) => {
  return (
    <div className="text-center mb-4 position-relative">
      <h1 className="d-inline-block position-relative">
        {text}
        <div
          className="border-bottom border-primary position-absolute"
          style={{
            bottom: '-5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50%' 
          }}
        ></div>
      </h1>
      <span className="d-block text-muted mt-2">{subText}</span>
    </div>
  );
};

export default Header;
