import { TextField } from '@fluentui/react';
import * as React from 'react';

const UseEffectHooks:React.FC<{}>=()=>{
     const [name,setName]=React.useState<string>("");
     React.useEffect(()=>{
        console.log("component loaded")
     },[]);
    return(
        <>
          <TextField
              label='Name'
              onChange={(_,val)=>setName(val||"")}
              />
        <p>Hello : {name}</p>
        </>
    )
}
export default UseEffectHooks;