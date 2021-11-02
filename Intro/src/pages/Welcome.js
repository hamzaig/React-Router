import React from 'react'
import { Route } from 'react-router'

const Welcome = () => {
    return (
        <>
            <div>
                <h1>This is Welcome Page.</h1>
            </div>
            <Route path="/welcome/new-user">
                <p>Welcome To New User</p>
            </Route>
        </>
    )
}

export default Welcome
