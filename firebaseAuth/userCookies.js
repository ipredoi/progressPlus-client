//use JS-Cookie API to create, use and delete user cookies. Need to import it from "js-cookie" --> https://www.npmjs.com/package/js-cookie

import Cookies from 'js-cookie';

// When the user auth, create cookie that expires in 1h, valid acrross the entire site

function setUserAuthCookie(user) {
  Cookies.set('authentication', user, { expires: 1 / 24 });
}

// When the user is logging out, we need to remove the cookie from the browser

function removeUserAuthCookie() {
  Cookies.remove('authentication');
}

// Get the user information from the cookie only if there is a cookie

function getUserDataFromCookie() {
  let authCookie = Cookies.get('authentication');
  //json format
  //console.log(authCookie)
  if (authCookie) {
    console.log(JSON.parse(authCookie));
    return JSON.parse(authCookie);
  }
  return;
}

// export the cookie functions

export { setUserAuthCookie, removeUserAuthCookie, getUserDataFromCookie };
