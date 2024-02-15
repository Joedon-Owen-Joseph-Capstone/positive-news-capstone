import {Posts} from "@/app/shared/Posts";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Is this thing on?</h1>
            <div className="container mx-auto">
                <h2>Popular U.S.</h2>
                <Posts/>
            </div>
            <div className="container mx-auto">
                <h2>Popular World</h2>
                <Posts/>
            </div>
        </>
    )
}
