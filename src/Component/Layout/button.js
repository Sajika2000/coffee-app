import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button
        className='border-2 px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition rounded-full'
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
