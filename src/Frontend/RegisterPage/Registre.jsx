import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.css";

export default function Registre() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const response = await fetch('https://quotedb.cniai6i0y3li.us-east-1.rds.amazonaws.com:3306/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }), // Sending the data as JSON
        });

        if (response.ok) {
            // Navigate to a different page on successful registration
            navigate('/'); // Change this to the path you want to navigate to
        } else {
            // Handle errors if needed
            console.error('Registration failed:', response.statusText);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleRegister}>
                <label>Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className='link' to='/login'>Login</Link>
            </button>
        </div>
    );
}



// import { Link, useHistory } from "react-router-dom";
// import { useState } from "react";
// import "./register.css";

// export default function Registre() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null); // State to store any errors
//   const history = useHistory();

//   const handleRegister = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     const response = await fetch('http://ec2-3-85-220-195.compute-1.amazonaws.com:5000/api/register', {
//       method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       body: JSON.stringify({ username, email, password }), // Sending the data as JSON
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data.message); // Log success message or display to user
//       history.push('/'); // Redirect to home or another page on successful registration
//     } else {
//       const errorData = await response.json();
//       setError(errorData.error); // Set error state if registration fails
//     }
//   };

//   return (
//     <div className="register">
//       <span className="registerTitle">Register</span>
//       <form className="registerForm" onSubmit={handleRegister}>
//         <label>Username</label>
//         <input
//           className="registerInput"
//           type="text"
//           placeholder="Enter your username..."
//           value={username}
//           onChange={(e) => setUsername(e.target.value)} // Update state on input change
//         />
//         <label>Email</label>
//         <input
//           className="registerInput"
//           type="text"
//           placeholder="Enter your email..."
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // Update state on input change
//         />
//         <label>Password</label>
//         <input
//           className="registerInput"
//           type="password"
//           placeholder="Enter your password..."
//           value={password}
//           onChange={(e) => setPassword(e.target.value)} // Update state on input change
//         />
//         <button className="registerButton" type="submit">Register</button>
//         {error && <p className="error">{error}</p>} {/* Display error message */}
//       </form>
//       <button className="registerLoginButton">
//         <Link className='link' to='/login'>Login</Link>
//       </button>
//     </div>
//   );
// }




// import { Link } from "react-router-dom"
// import "./register.css"

// export default function Registre() {
//   return (
//     <div className="register">
//     <span className="registerTitle">Register</span>
//     <form className="registerForm">
//       <label>Username</label>
//       <input className="registerInput" type="text" placeholder="Enter your username..." />
//       <label>Email</label>
//       <input className="registerInput" type="text" placeholder="Enter your email..." />
//       <label>Password</label>
//       <input className="registerInput" type="password" placeholder="Enter your password..." />
//       <button className="registerButton">
//         <Link className="link" to="/">Register</Link>  
//       </button>
//     </form>
//       <button className="registerLoginButton">
//         <Link className='link' to='/login'>Login</Link></button>
//   </div>
//   )
// }
