import React, {useContext} from 'react'
import { UserContext } from './ContextDemoA'

function ContextDemoD(props) {

    const user = useContext(UserContext);

    return (
        <div className='box'>
            <h1>ComponentD</h1>
            {/* <h2>{`The End, ${props.user}`}</h2> */}
            <h2>{`The End, ${user}`}</h2>
        </div>
    )
}

export default ContextDemoD