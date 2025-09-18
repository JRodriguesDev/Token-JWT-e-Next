import { useState, useContext } from 'react'
import styles from './Form.module.css'
import { register, login } from '@/hooks/autenticate'
import UserContext from '@/contexts/User'

export const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleChange = (): void => {
    login(email, password)
    .then(e => e ? setUser(e) : console.log("erro na requisiçao"))
    }

    return (
        <div className={styles.form}>
            <h2>Login</h2>
            <div className={styles.inputDiv}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={styles.btnLogin}>
                <p>Nao Possui uma conta? <span>Register</span></p>
                <button onClick={handleChange}>Login</button>
            </div>
        </div>
    )
}

export const FormRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleChange = (): void => {
    register(name, email, password)
    .then(e => e ? setUser(e) : console.log("Erro na requsiçao"))
    }
    return (
        <div className={styles.form}>
            <h2>Register</h2>
            <div className={styles.inputDiv}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={e => setName(e.target.value)}/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={styles.btnLogin}>
                <p>Ja possui uma conta? <span>Login</span></p>
                <button onClick={handleChange}>Register</button>
            </div>
        </div>
    )
}
