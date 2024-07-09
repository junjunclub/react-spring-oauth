// import React, { useState } from 'react';
// import RegisterForm from './RegisterForm';
// import LoginForm from './LoginForm';

// function App() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="card">
//             <div className="card-body">
//               <h3 className="card-title text-center">{isLogin ? 'Login' : 'Register'}</h3>
//               <div className="card-text">
//                 {isLogin ? <LoginForm /> : <RegisterForm />}
//                 <div className="text-center">
//                   {isLogin ? (
//                     <p>
//                       Don't have an account?{' '}
//                       <span onClick={() => setIsLogin(false)} style={{ cursor: 'pointer', color: 'blue' }}>
//                         Register here
//                       </span>
//                     </p>
//                   ) : (
//                     <p>
//                       Already have an account?{' '}
//                       <span onClick={() => setIsLogin(true)} style={{ cursor: 'pointer', color: 'blue' }}>
//                         Login here
//                       </span>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// src/App.tsx

import React, { useState } from 'react';
import Login from './TestLogin';
import Signup from './TestRegister';
import ReIssue from './ReIssue';
import Test from './Test';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => setShowLogin(true)} style={{ marginRight: '10px' }}>Login</button>
        <button onClick={() => setShowLogin(false)}>Signup</button>
      </div>
      {showLogin ? <Login /> : <Signup />}
      <ReIssue></ReIssue>
      <Test></Test>
    </div>
    
  );
};

export default App;
