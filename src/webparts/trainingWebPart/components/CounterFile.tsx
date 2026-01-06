import { PrimaryButton } from '@fluentui/react';
import * as React from 'react';

const Counterfile:React.FC<{}>=()=>{
    const[product,setProduct]=React.useState<number>(1);

    return(
        <>
        <p>Prouduct : {product}</p>
        <PrimaryButton
        text='Product'
       onClick={()=>setProduct(product*2)}
        />
        </>
    )

}
export default Counterfile