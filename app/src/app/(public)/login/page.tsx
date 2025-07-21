'use client';

import Link from 'next/link';
import './login.css';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { useLogin } from '@/hooks/useLogin';
import { LoginInputRoot } from '@/graphql/types/login.input';
import { useLoginUserStore } from '@/store/useLoginUserStore';
import { mapLoginUserOutputToLoginUser } from '@/utils/mappers';
import { LoginUser } from '@/types/login-user';

export default function LoginPage() {
    const { login, loginUser } = useLogin();
    const { setLoginUser } = useLoginUserStore();
    const [ userName, setUserName ] = useState<string | null>(null);
    const [ password, setPassword ] = useState<string | null>(null);

    const router = useRouter();

    const handleSubmitLogin = (event: FormEvent) => {
        event.preventDefault();
        
        const loginInput: LoginInputRoot = {
            input: {
                userName: userName ?? '',
                password: password ?? ''
            }
        }

        login(loginInput);
    }

    useEffect(() => {
        if(loginUser?.login?.userId) {
            const loginUserMapped: LoginUser = mapLoginUserOutputToLoginUser(loginUser.login);

            setLoginUser(loginUserMapped);

            router.push('/')
        }
    }, [loginUser, router, setLoginUser]);

    return (
        <div className="login-container">
            <h1 className="login-title">Login Page</h1>
            <p className="login-subtitle">Please log in to continue.</p>
            <form className="login-form" onSubmit={handleSubmitLogin}>
                <label className="login-label">
                    Username:
                    <input value={userName ?? ''} onChange={(e) => setUserName(e.target.value)} className="login-input" type="text" name="username" />
                </label>
                <br />
                <label className="login-label">
                    Password:
                    <input value={password ?? ''} onChange={(e) => setPassword(e.target.value)} className="login-input" type="password" name="password" />
                </label>
                <br />
                <button className="login-button" type="submit">Login</button>
            </form>
            <p className="login-links">
                Dont have an account? <Link href="/register">Register here</Link>.<br />
            </p>
        </div>
    
    )
}