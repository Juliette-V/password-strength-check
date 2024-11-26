import { useState } from 'react';
import './App.css';
import PasswordInput from './components/PasswordInput';
import StrengthIndicator from './components/StrengthIndicator';


function App() {

  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <h1>Sign Up Form</h1>
        <form onSubmit={(e)=>e.preventDefault()} className="password-strength">
          <PasswordInput value={password} onChange={setPassword} />
          <StrengthIndicator password={password} />
        </form>
      </main>
    </div>
  );
}

export default App;
