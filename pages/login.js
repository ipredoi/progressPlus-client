// Login page for user to login with email and password
// or link to registration pages

function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <input type='text' placeholder='email' />
      <input type='text' placeholder='password' />
      <br />
      <button>Submit</button>
      <p>Not yet registered?</p>
      <button>Register</button>
    </div>
  );
}
export default Login;
