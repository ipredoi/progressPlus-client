// Registration page for user to regist with email and create password
// register button links to Login page

import Link from "next/link";

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <input type='text' placeholder='email' />
      <input type='text' placeholder='password' />
      <input type='text' placeholder='confirm password' />
      <br />
      <Link href='./login'>
        <button>Submit</button>
      </Link>
    </div>
  );
}
export default Register;
