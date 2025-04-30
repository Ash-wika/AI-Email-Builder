"use client"
import React from 'react'
import { Button } from '../ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function SignInButton() {

    const CreateUser= useMutation(api.users.CreateUser)
    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            console.log(codeResponse);
            const tokens = await axios.post(
                'http://localhost:3001/auth/google', {
                code: codeResponse.code,
            });

            console.log(tokens);
            
            // Save to database
            const result=await CreateUser({
                name: userInfo?.name,
                email: userInfo?.email,
                picture: userInfo?.picture
            })
            if (typeof window !== undefined) {
                localStorage.setItem('userDetail', {...JSON.stringify(userInfo?.data), _id:result});
            }
        },
        onError: errorResponse => console.log(errorResponse),
    });
    return (
        <div>
            <Button onClick={googleLogin}>Get Started</Button>
        </div>
    )
}

export default SignInButton