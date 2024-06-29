"use client";

import { useUserAuth } from "./_utils/auth-context";
 
export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return(
        <div>
            <h1>Week 8 Assignment</h1>
            <p> {user ? "Hello! " : "Please sign in here"}</p>
            {user && user.displayName}

            <p>
                {user ? (<button className="mr-2 px-4 py-2 rounded  bg-blue-500 text-white" onClick={firebaseSignOut}>Sign Out</button>) 
                : (<button className="mr-2 px-4 py-2 rounded  bg-blue-500 text-white" onClick={gitHubSignIn}>Sign in with your gitHub</button>
                )}
            </p>
        </div>
    );
}