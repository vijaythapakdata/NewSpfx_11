import { DetailsList, DetailsListLayoutMode, IColumn, IconButton, SearchBox, SelectionMode, Stack } from '@fluentui/react';
import * as  React from 'react';

// Types
interface IDataItem{
    key:number;
    Title:string;
    Age:number;
    EmailAddress:string;
    Admin:string;
    City:string
}

interface IReusableTableProps{
    pageSize:number;
}


const DetailsListComponent:React.FC< IReusableTableProps>=(props)=>{

    // *-------state------*/
    const [items,setItems]=React.useState<IDataItem[]>([]);
    //setuping the search 
    const[searchText,setSearchText]=React.useState<string|any>('');
    const [currentPage,setCurrentPage]=React.useState(1);

    React.useEffect(()=>{
setItems([
        {
            key: 1,
            Title:"Vijay Thapak",
            EmailAddress:"vijay@gmail.com",
            Age:45,
            Admin:"",
            City:"India"
        },
        {
            key: 2,
            Title:"John",
            EmailAddress:"john@gmail.com",
            Age:45,
            Admin:"No",
            City:"UK"
        },
        {
            key: 3,
            Title:"Lessa",
            EmailAddress:"less@gmail.com",
            Age:45,
            Admin:"Yes",
            City:"Cork"
        },
        {
            key: 4,
            Title:"Prem Kumar",
            EmailAddress:"Prem@gmail.com",
            Age:45,
            Admin:"Yes",
            City:"India"
        }
    ])
    },[]);

    // Global search

    const filteredItems=items.filter(item=>{
        const search=searchText.toLowerCase();
        return(
            item?.Title?.toLowerCase().includes(search)||
              item?.EmailAddress?.toLowerCase().includes(search)||
                item?.Admin?.toLowerCase().includes(search)
                ||  item?.City?.toLowerCase().includes(search)
                ||  item?.Age?.toString().includes(search)
        )
    });
    //sorting
    // Pagination
    const startIndex=(currentPage-1)*props.pageSize;
    const paginatedItems=filteredItems.slice(startIndex,startIndex+props.pageSize);
    const totalPages=Math.ceil(filteredItems.length/props.pageSize);

    const columns:IColumn[]=[
        {
            key:'C1', name:'Name', fieldName:'Title',minWidth:100, isResizable:true
        },
         {
            key:'C2', name:'Email Address', fieldName:'EmailAddress',minWidth:100, isResizable:true
        },
         {
            key:'C3', name:'Age', fieldName:'Age',minWidth:100, isResizable:true
        },
         {
            key:'C4', name:'Admin', fieldName:'Admin',minWidth:100, isResizable:true
        },
         {
            key:'C5', name:'City', fieldName:'City',minWidth:100, isResizable:true
        }
    ]
    return(
        <>
        {/* Global search */}
        <SearchBox
        placeholder='search here'
        value={searchText}
        onChange={(_,value)=>{
            setSearchText(value||'');
            setCurrentPage(1);
        }}
        styles={{root:{maxWidth:300,marginBottom:10}}}
        />
        <DetailsList
        items={paginatedItems}
        columns={columns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        />
        {/* Pagination */}
        <Stack
        horizontalAlign='center'
        tokens={{childrenGap:10}}
        styles={{root:{marginTop:10}}}
        >
<IconButton
iconProps={{iconName:'ChevronLeft'}}
disabled={currentPage===1}
onClick={()=>setCurrentPage(p=>p-1)}
/>
<span>Page{currentPage} of {totalPages}</span>
<IconButton
iconProps={{iconName:'ChevronRight'}}
disabled={currentPage===totalPages}
onClick={()=>setCurrentPage(p=>p+1)}
/>
        </Stack>
        </>
    )
}
export default DetailsListComponent