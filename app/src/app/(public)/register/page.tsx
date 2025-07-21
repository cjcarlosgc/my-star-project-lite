import Link from 'next/link';
import './register.css';

export default function RegisterPage() {
    return (
        <div className="register-container">
            <h1 className="register-title">Register Page</h1>
            <p className="register-subtitle">Create a new account.</p>
            <form className="register-form">
                <label className="register-label">
                    Username:
                    <input className="register-input" type="text" name="username" />
                </label>
                <br />
                <label className="register-label">
                    Password:
                    <input className="register-input" type="password" name="password" />
                </label>
                <br />
                <button className="register-button" type="submit">Register</button>
            </form>
            <p className="register-links">
                Ya tienes una cuenta? <Link href={'/login'}>Login here</Link><br />
            </p>
        </div>
    );
}