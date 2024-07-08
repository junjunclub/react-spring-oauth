// import React, { useState } from 'react';

// interface FormInterface {
//   email: string;
//   password: string;
// }

// function LoginForm() {
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;
//     const formData = new FormData(form);
//     const dataToSend: FormInterface = {
//       email: formData.get('username') as string,
//       password: formData.get('password') as string,
//     };

//     try {
//       const response = await fetch('http://localhost:8080/api/user/login/', {
//         method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
//         body: JSON.stringify(dataToSend),
//       });

//       const data = await response.json();
//       if (response.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         setMessage('Login successful');
//       } else {
//         setMessage('Login failed');
//       }
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//       setMessage('Login failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="ml-5 mt-5">
//       <div className="form-group row">
//         <div className="col-sm-5">
//           <input name="username" type="text" placeholder="Username" className="form-control" required></input>
//         </div>
//       </div>
//       <div className="form-group row">
//         <div className="col-sm-5">
//           <input name="password" type="password" placeholder="Password" className="form-control" required></input>
//         </div>
//       </div>
//       <div className="form-group row mt-4">
//         <div className="col-sm-5">
//           <button type="submit" className="btn btn-primary btn-block">Sign in</button>
//         </div>
//       </div>
//       <p>{message}</p>
//     </form>
//   );
// }

// export default LoginForm;
