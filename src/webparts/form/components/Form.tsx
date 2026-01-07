import * as React from 'react';
// import styles from './Form.module.scss';
import type { IFormProps } from './IFormProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";
import {  PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import {sp} from "@pnp/sp/presets/all";
// dummy data

const sampleItems=[
    {
        Question:"What is SPfx?",
        Response:"React is JavaScript library for building user interface",
        Langue:{
            Nom:"English"
        }
    },
        {
            Question:"What os Pnp?",
            Response:"PnP provides reusable controls and librareis for SharePoint Development",
            Langue:{
                Nom:"French"
            }
,

        },
        {
            Question:"What is React",
            Response:"React is JavaScript library for building user interface",
        Langue:{
            Nom:"English"
        }

        },


    
]
const Form :React.FC<IFormProps>=(props)=>{

    // Bassic api request
    React.useEffect(()=>{
        sp.setup({
            spfxContext:props.context as any
        });
        const getItems=()=>{
            try{
const items= sp.web.lists.getByTitle("ListName").items.select("ID","Title","Admin/Title","City/Title").
expand("Admin","City").get();
return items;
            }
            catch(err){
console.error(err);
            }
        }
        getItems();
    },[])
    return(
        <>
        
        <h3> FAQ (Dummy Accordion)</h3>
        {
            sampleItems.map((item,index)=>(
                <Accordion
                key={index}
                title={item.Question}
                defaultCollapsed={true}
                className={"itemCell"}
                collapsedIcon={"Rocket"} expandedIcon={"InkingTool"}
                >
<div  className={"itemContent"}>

 <div  className={"itemResponse"}>
    {item.Response}
    </div>   
</div>
<div  className={"itemIndex"}>
{`Langue:${item.Langue.Nom}`}  
</div>

                </Accordion>
            ))
        }
        {/* People Picker */}

        <hr/>

        <PeoplePicker
    context={props.context as any}
    titleText="User Name"
    personSelectionLimit={1}
    showtooltip={true}
    required={true}
    disabled={true}
  ensureUser={true}
  defaultSelectedUsers={[props.context.pageContext.user.displayName]}
   webAbsoluteUrl={props.context.pageContext.web.absoluteUrl}
    principalTypes={[PrincipalType.User]}
   />
   <span>siteurl: {props.context.pageContext.web.absoluteUrl}</span>
   <span>Display Name:{props.context.pageContext.user.displayName}</span>
        </>
    )
}
export default Form ;
