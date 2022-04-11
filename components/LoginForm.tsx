import styles from '../styles/Home.module.scss'
import utils from '../styles/utils.module.scss'
import { useState } from 'react'; 

  export default function LoginForm(){
    
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    
    const submitLogin = (event: any) => {
      event.preventDefault()
      console.log(event.target.email.value, event.target.password.value)
    }
        
    return (
      <form onSubmit={submitLogin} className={styles.form_fields_wrapper}>
        <label htmlFor='email'>Email</label>
        <input onChange={(e) => setEmailValue(e.target.value)} id='email' type='text' name='email' required placeholder='Email Address' />

        <label htmlFor='password'>Password</label>
        <input onChange={(e) => setPasswordValue(e.target.value)} id='password' type='password' name='password' required placeholder='Password' />

        <p className={utils.text_under_input}>Forgot your password?</p>

        <button disabled={!emailValue || !passwordValue} id='submit-button' type='submit' value='Submit'>Sign In</button>
    </form>
    
    )
  }