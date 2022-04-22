import React, { useEffect,useState} from "react";
import Axios from "axios";
import './UsersPage.scss';
import { Table } from "./components/Table";

export const UsersPage = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    // Axios.get('https://manbook-server.vercel.app/api/get').then((data=>{
    //   setData(data.data);
    // }));
    Axios.get('http://localhost:8080/api/users').then( (data) =>{
      setData(data.data)
    })
  },[])
  
  return ( 
    <>
      <h1>Tools</h1>
      <Table title={['ID','Name','Email','Date register','Date login','Status']} data={data}></Table>
    </> 
  )
}