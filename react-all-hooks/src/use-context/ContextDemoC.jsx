import ContextDemoD from "./ContextDemoD"


function ContextDemoC(props) {
    return (
        <div className='box'>
            <h1>ComponentC</h1>
            {/* <h2>{`Hi ${props.user}`}</h2> */}
            {/* <ContextDemoD user={props.user}></ContextDemoD> */}
            <ContextDemoD ></ContextDemoD>
        </div>
    )
}

export default ContextDemoC