import type { Metadata } from 'next'
import './globals.css'
import {Navigation} from "@/app/shared/Navigation";
import {Footer} from "@/app/shared/Footer";


export const metadata: Metadata = {
    title: 'PNN',
    description: 'description goes here',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    return (
        <html  lang="en" suppressHydrationWarning>
        <body className='bg-[#EDE8E4]'>
        <Navigation/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
