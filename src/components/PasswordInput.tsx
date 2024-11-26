interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => (
    <input
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your password"
      className="password-input"
    />
  );
  
  export default PasswordInput;