import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './store/auth-context';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ctx=useContext(AuthContext)

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler}}>
        {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!ctx.isLoggedIn && <Login  />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
