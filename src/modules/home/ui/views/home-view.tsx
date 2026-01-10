"use client" ;

import React from 'react'
import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


export const HomeView = () => {

    const {data: session} = authClient.useSession();
    const Router = useRouter();

    if(!session){
        return (
        <p>Loading...</p>
        )
    }

    return (
        <div className="flex flex-col p-4 gap-y-4">
            <h1>Welcome {session.user.name}</h1>
            <Button onClick={() => authClient.signOut({fetchOptions: {onSuccess: () => Router.push('/sign-in')}})}>
            Sign Out
            </Button>
        </div>
    )
}

export default HomeView
