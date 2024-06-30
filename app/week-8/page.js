"use client";

import { useUserAuth } from "./_utils/auth-context";
 
export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
//teal 500 and 600 for colors
    return(
        <main className="bg-teal-500 w-full min-h-screen flex flex-col justify-center items-center">
        <div className="text-center bg-teal-600 rounded-lg">
            <h1 className=" text-4xl p-2 bg-teal-600">Week 8 Assignment</h1>
            <div className=" shadow-md p-5 bg-teal-600">
            <p className=""> {user ? "Hello! " : "Please sign in here"}</p>
            {user && user.displayName}
            <p className="p-2"></p>

            <a className="text-lg hover:underline" href="/week-8/shopping-list">{user ? "Continue to Shopping list" : ""}</a>
            
            <p className="p-4">
                {user ? (<button className="mr-2 px-4 py-2 rounded  bg-teal-700 text-white" onClick={firebaseSignOut}>Sign Out</button>) 
                : (<button className="mr-2 px-4 py-2 rounded  bg-teal-700 hover:bg-teal-800 text-white" onClick={gitHubSignIn}>Sign in with your gitHub</button>
                )}
            </p>
            </div>
        </div>
        </main>
    );
}