import React from 'react';
import './App.css';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Header from '../Header/Header';

function App() {
  const { currentUser, setCurrentUser } = React.useState({});
  const { isLoggeedin, setLoggeedin } = React.useState(false);
  const { isAdmin, setAdmin } = React.useState(false);


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
