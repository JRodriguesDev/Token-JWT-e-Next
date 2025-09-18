'use client'
import { FormRegister } from "@/components/forms/Form"
import styles from './Form.module.css'

const Form = () => {

    return (
        <div className={styles.user}>
            <h1 className={styles.title}>ERROR 404</h1>
            <div className={styles.formContainer}>
                <FormRegister/>
            </div>
        </div>
    )
}

export default Form