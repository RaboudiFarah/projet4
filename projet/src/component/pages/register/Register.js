import "./register.css"


export default function Register() {
    return (
      <>
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Phone Number</label>
        <input className="loginInput" type="text" placeholder="Enter your Phone Number..." />
        <div class="box">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </select>
</div>
        <button className="registerButton">Register</button>
      </form>
      
    </div>
   
</>
    )
}