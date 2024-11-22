import { useMemo, useState } from 'react';
import './App.css';
import { getPasswordStrength, getSectionColor } from './utils';


function App() {

  const [password, setPassword] = useState("");

  const passwordStrength = getPasswordStrength(password);

  const [firstSectionColor, secondSectionColor, thirdSectionColor] = useMemo(() => [
      getSectionColor(1, passwordStrength), 
      getSectionColor(2, passwordStrength), 
      getSectionColor(3, passwordStrength)
    ], 
    [passwordStrength])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <h1>Sign Up Form</h1>
      <form onSubmit={(e)=>e.preventDefault()} className="password-strength">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="password-input"
      />
      <div className="strength-indicator">
        <div
          className={`section ${firstSectionColor}`}
        >Easy</div>
        <div
          className={`section ${secondSectionColor}`}
        >Medium</div>
        <div
          className={`section ${thirdSectionColor}`}
        >Strong</div>
      </div>
    </form>
      </main>
    </div>
  );
}

export default App;
