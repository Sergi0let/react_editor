import React from 'react';

const Button = ({ title }) => {
  return (
    <button className="rounded-[4px] px-[30px] py-[10px] bg-[#4368E0] text-sm font-medium tracking-widest text-[#f6f9fe]">
      {title ? title : 'Button'}
    </button>
  );
};

export default Button;
