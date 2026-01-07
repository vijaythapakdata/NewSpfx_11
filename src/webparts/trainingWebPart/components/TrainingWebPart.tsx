import * as React from 'react';
// import styles from './TrainingWebPart.module.scss';
import type { ITrainingWebPartProps } from './ITrainingWebPartProps';
import { PrimaryButton, TextField } from '@fluentui/react';
import Counterfile from './CounterFile';
import UseEffectHooks from './UseEffectHooks';
import Browserload from './Browswerload';
import TableComponent from './TableComponent';
import DetailsListComponent from './DetailistComponent';
// import { escape } from '@microsoft/sp-lodash-subset';
// import { useState } from 'react';
const TrainingWebPart:React.FC<ITrainingWebPartProps>=()=>{
  const[count,setCount]=React.useState<number>(0);
  const [name,setName]=React.useState<string>("");

  const getMesaages=()=>{
    return "Hello, I am checking spfx"
  }
  return (
    <>
    {/* Detailist */}
    <DetailsListComponent pageSize={1}/>
    <p>Count:{count}</p>
    <PrimaryButton text='Count' onClick={()=>setCount(count+1)}/>
      <br/>
      <TextField
      label='Name0'
      onChange={(_,val)=>setName(val||"")}
      />
<p>Hello : {name}</p>

<p>{getMesaages()}</p>
{/* Product file */}
<Counterfile/>
<UseEffectHooks/>
<Browserload/>

<br/>
<TableComponent/>
    </>
  )
}
export default TrainingWebPart;
