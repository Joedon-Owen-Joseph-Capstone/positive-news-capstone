import {cookies} from "next/headers";

export async function GET(request:Request) {
    const data = await request.json();

    const responseFromServer = await fetch(`${process.env.PUBLIC_API_URL}/apis/sign-out`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    // Clone the response to manipulate or read it multiple times
    const response = responseFromServer.clone();

    const authorization = response.headers.get("authorization")

    if (authorization) {
        const cookieStore = cookies()
        cookieStore.delete('jwt-token')

    }

    // Check if the sign-up was successful
    if (!response.ok) {
        return new Response(JSON.stringify({message: "Failed to sign out. Try again."}), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })
    } else {
        return response
    }
}