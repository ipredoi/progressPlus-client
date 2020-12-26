import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function newUserProfile() {
  return (
    <div className='auth'>
      <Head>
        <link href='/authentication.css' rel='stylesheet' />
      </Head>
      <div className='auth-main'>
        <div className='soc-image'>
          <Image
            src='/Logo.png'
            alt='School of Code Logo'
            width={80}
            height={80}
          />
        </div>
        <h1>Welcome to School of Code</h1>
        <p>Name:</p> <input type='text' />
        <p>Email:</p>
        <input type='text' />
        <p>Role:</p> <input type='text' placeholder='School of Code role' />
        <button className='auth-buttons'>Submit</button>
      </div>
    </div>
  );
}

/* 
placeholder={user.displayName}
placeholder={user.email} */

/// if we already have a user with specific uuid in our database , we don't need to render the form
// if we don have a user with specific uuid in our database we can grab the uui , name , email , profile picture , role and send it to our database
