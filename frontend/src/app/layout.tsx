import type { Metadata } from 'next'
import './globals.css'
import {Navigation} from "@/app/shared/Navigation";
import {Footer} from "@/app/shared/Footer";
import {Session} from "@/utils/fetchSession";
import {Profile} from "@/utils/models/profile.model";


export const metadata: Metadata = {
    title: 'PNN',
    description: 'description goes here',
}

type RootLayoutProps = {
    children: React.ReactNode
    profile: Profile
    session: Session
}

export default function RootLayout(props : RootLayoutProps) {
    const { children,profile, session } = props
    return (
        <html  lang="en" suppressHydrationWarning>
        <body className='bg-[#EDE8E4]'>
        <Navigation profile={profile} session={session}/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
