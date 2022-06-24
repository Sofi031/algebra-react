import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form className="form">
      <div className="form-field">
        <label>
          <p>Username</p>
          <input type="text"></input>
          
        </label>
      </div>
      <div>
        <label>
          <p>Password</p>
          <input type="password"></input>
        </label>
      </div>
      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
}

export default App;
