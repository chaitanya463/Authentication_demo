import classes from './ProfileForm.module.css';

import {useRef, useContext} from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authContext = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const newPassword = passwordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAdPn6OPhyveTAB5Lq7AFoLHSmyUiFNi98',{
      method: 'POST',
      body: JSON.stringify({
        idToken: authContext.token,
        password: newPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      //assume always success
      
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordInputRef} minLength='7' type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
