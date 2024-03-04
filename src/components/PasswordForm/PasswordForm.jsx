import { useState } from "react";
import './PasswordForm.scss'

function PasswordForm () {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [className, setClassName] = useState('');
  
    const handleInputChange = (e, setPassword) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password1 === password2) {
        setClassName('color-green');
      } else {
        setClassName('color-red');
      }
    };
  
    return (
    <div className="PasswordForms">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password1}
          onChange={(e) => handleInputChange(e, setPassword1)}
        />
        <input
          type="password"
          value={password2}
          onChange={(e) => handleInputChange(e, setPassword2)}
        />
        <input type="submit" value='submit'/>
        <p className={className}>{className === 'color-green' ? 'Passwords match!' : 'Passwords do not match!'}</p>
      </form>
    </div>
    );
  }
  
  export default PasswordForm;