'use client'

import {useRouter} from "next/navigation";

export function SignOutButton() {
    const router = useRouter()
    const handleSignOut = async () => {
        try {
            const response = await fetch('/apis/sign-out', { method: 'GET' });
            const { status, message } = await response.json();

            if (status === 200) {
                console.log(message)
                router.refresh()
            }
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <>
            <label className='sr-only' htmlFor='sign-out'>Button to sign out</label>
            <button onClick={handleSignOut} className='p-5 bg-black' id='sign-out' name='sign-out'>Sign Out</button>
        </>
    )
}