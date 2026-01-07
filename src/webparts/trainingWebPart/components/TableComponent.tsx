import * as React from "react";
import { Table,Input } from "antd";
const TableComponent:React.FC<{}>=()=>{
const [items,setItems]=React.useState<any[]>([]);
const[searchText,setSearchText]=React.useState<string|any>('');
    //dummy data 
React.useEffect(()=>{
    // Table dummy rows data
    // this represent dummy data from sharepoint list
    const dummyData=[
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
    ];
setItems(dummyData)
},[]);

// Table Columns
const columns=[
{
    title:"Name",
    dataIndex:"Title",
    key:"Title",
    sorter:(a:any,b:any)=>a.Title.localeCompare(b.Title)
},
{
    title:"Email Address",
    dataIndex:"EmailAddress",
    key:"EmailAddress",
    sorter:(a:any,b:any)=>a.EmailAddress.localeCompare(b.EmailAddress)
},
{
    title:"Age",
    dataIndex:"Age",
    key:"Age",
    
},
{
    title:"Admin",
    dataIndex:"Admin",
    key:"Admin",
    sorter:(a:any,b:any)=>a.Admin.localeCompare(b.Admin)
},
{
    title:"City",
    dataIndex:"City",
    key:"City",
    sorter:(a:any,b:any)=>a.City.localeCompare(b.City)
}
];

// Search box
const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
setSearchText(event.target.value);
}

// APplying check to figure out empty rows to avoid undefinned error

const filteredData=items.filter((item:any)=>(item?.Title?.toLowerCase()||"").includes(searchText.toLowerCase())

||(item?.EmailAddress?.toLowerCase()||"").includes(searchText.toLowerCase())
||(item?.Admin?.toLowerCase()||"").includes(searchText.toLowerCase())
||(item?.City?.toLowerCase()||"").includes(searchText.toLowerCase())
)
    return(
        <>
        {/* search box */}
        <Input
        placeholder="search here"
        value={searchText}
        onChange={handleSearch}
        style={{marginBottom:10}}
        />
        <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{pageSize:3}}
        />
        </>
    )
}
export default TableComponent