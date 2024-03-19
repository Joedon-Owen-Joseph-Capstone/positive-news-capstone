'use client'

import {useRouter} from "next/navigation";
import {fetchSignOut} from "@/utils/http/profile.http";
import {revalidatePath} from "next/cache";

export function SignOutButton() {
    const router = useRouter()
    const handleSignOut = async () => {
        const result = await fetchSignOut()
        if (result.status === 200) {
            router.refresh()
            router.push('/sign-in-page')

        }
    }

    return (
        <>
            <label className='sr-only' htmlFor='sign-out'>Button to sign out</label>
            <button onClick={handleSignOut} className='p-5 bg-black' id='sign-out' name='sign-out'>Sign Out</button>
        </>
    )
}