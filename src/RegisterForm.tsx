// import React, { useState } from 'react';

// interface FormInterface {
//   name: string;
//   email: string;
//   username: string;
//   password: string;
// }

// function RegisterForm() {
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;
//     const formData = new FormData(form);
//     const formToSend: FormInterface = {
//       name: formData.get('name') as string,
//       email: formData.get('email') as string,
//       username: formData.get('username') as string,
//       password: formData.get('password') as string,
//     };

//     try {
//       const response = await fetch('http://localhost:8080/api/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formToSend),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data)
//         const token = data.token;
//         if (token) {
//           localStorage.setItem('token', token);
//           setMessage('Registration successful');
//         } else {
//           setMessage('Token not found in response');
//         }
//       } else {
//         setMessage('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//       setMessage('Registration failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="ml-5 mt-5">
//       <div className="form-group row">
//         <div className="col-sm-5">
//           <input name="name" type="text" placeholder="Name" className="form-control" required></input>
//         </div>
//       </div>
//       <div className="form-group row">
//         <div className="col-sm-5">
//           <input name="email" type="email" placeholder="Email Address" className="form-control" required></input>
//         </div>
//       </div>
//       <div className="form-group row">
//         <div className="col-sm-5">
//           <input name="username" type="text" placeholder="UserName" className="form-control" required></input>
//         </div>
//       </div>
//       <div className="form-group row">
//         <div className="col-sm-5">
//           <input name="password" type="password" placeholder="Password" className="form-control" required></input>
//         </div>
//       </div>
//       <div className="form-group row mt-4">
//         <div className="col-sm-5">
//           <button type="submit" className="btn btn-primary btn-block">
//             Sign Up
//           </button>
//         </div>
//       </div>
//       <p>{message}</p>
//     </form>
//   );
// }

// export default RegisterForm;
