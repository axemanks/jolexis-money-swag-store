// This component will be a sign up for email newsletter

import React from 'react';

const Subscribe = () => {
  return (
    <section
      className='max-contiainer flex justify-between items-center max-lg:flex-col gap-10 mt-20 mb-20'
      id='contact-us'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-bold'>
        Sign Up For
        <span className='text-primary'> Updates </span>{' '}&{' '}
        <span className='text-primary'>Newsletter</span>
      </h3>
      <div className='w-full flex justify-between max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>

        <input
          type='text'
          placeholder='subscribe@$avvysWorld.com'
          className='input w-full '
        />
        
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <button className='btn btn-primary btn-circle btn-outline'>Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
