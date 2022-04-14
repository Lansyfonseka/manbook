import React, {useEffect,useState,useCallback} from "react";
import Axios from "axios";
import './UsersPage.scss';
import { Table } from "./components/Table";

export const UsersPage = () => {
  
  const [data,setData] = useState([]);
  // const getData = useCallback(async ()=>{
  //   return await Axios.get('api/get').then((data=>data.data));
  // });
  useEffect(()=>{
    Axios.get('api/get').then((data=>{
      setData(data.data);
    }));
  },[])
  
  return (
    <>
      <h1>Tools</h1>
      <Table title={['ID','Name','Email','Date register','Date login','Status']} data={data}></Table>
    </>
  )
}