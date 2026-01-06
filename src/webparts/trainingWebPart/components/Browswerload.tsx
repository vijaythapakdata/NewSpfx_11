import * as React from "react";

const Browserload:React.FC<{}>=()=>{

    React.useEffect(()=>{
        document.title="SPFx Training"
    },[]);
    return(
        <>
        <p>Page title is updated using Useeefect</p>
        </>
    )
}

export default Browserload