import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import {User} from "./components/User";



function App() {
  const isSignedIn = true;

  return (
    <form className="form">
      <div className="form-field">
        <InputElement label="Username" type="text" />
      </div>
      <div className="form-field">
        <InputElement label="Password" type="password" />
      </div>
      <div className="form-field">
        <Button type="button">Sign in</Button>
        <Button type="reset">Reset</Button>
      </div>
      <FormError visible={!isSignedIn} />
      <FormMessage visible={isSignedIn} />
      <User src="/avatar.png" alt="avatar" username="User1"  />
      
      

    </form>
  );
}

export default App;