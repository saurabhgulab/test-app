const Users = () => {
  const login = true;
  return (
    <div className="app">
      <h1>Checking for Hidden Values in the UI.</h1>
      {login ? <button>Log Out</button> : <button>Log In</button>}
    </div>
  );
};

export default Users;
