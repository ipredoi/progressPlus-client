import React from "react"

export default function newUserProfile({user}) {
  return (
    <div>
     <h1> Hello , {/* {user.displayName} */}!</h1>
     <h2> Welcome to School of Code! </h2>
     <p>Name:</p> <input type="text" /> 
     <p>Email:</p><input type="text" />
     {/* <img src={user.photoURL} alt="profile picture"/>  */}
     <p>Role:</p> <input type="text" placeholder="School of Code role"/>
     <button>Submit</button>
    </div>
  );
}


/* 
placeholder={user.displayName}
placeholder={user.email} */

/// if we already have a user with specific uuid in our database , we don't need to render the form 
// if we don have a user with specific uuid in our database we can grab the uui , name , email , profile picture , role and send it to our database 