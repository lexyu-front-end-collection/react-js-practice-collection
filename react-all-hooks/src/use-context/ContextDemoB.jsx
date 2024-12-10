import ContextDemoC from "./ContextDemoC"


function ContextDemoB(props) {
    return (
        <div className='box'>
            <h1>ComponentB</h1>
            {/* <h2>{`Hi ${props.user}`}</h2> */}
            {/* <ContextDemoC user={props.user}></ContextDemoC> */}
            <ContextDemoC ></ContextDemoC>
        </div>
    )
}

export default ContextDemoB