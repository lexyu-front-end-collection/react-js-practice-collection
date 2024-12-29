import React from 'react'
import UserContainer from './containers/UserContainer'

/**
    Components - Separation of concerns
    Pros
    1. Imporve Reusability
    2. Simplified Testing
    3. Enhanced Maintainability
    Cons
    1. Increased Boilerplate
    2. Overhead for Small App
    3. Potential Prop Drilling
    Smart Container : User Container
    - State, API Calls; data fetching
    Dumb Presentational : User List Presentation
    - No Side Effect, Purely Presentation
 */
function ContainerPresentational(props) {

    return (
        <>
            <h1 className='text-white'>Container Presentational Pattern</h1>
            <UserContainer></UserContainer>
        </>

    )
}

export default ContainerPresentational