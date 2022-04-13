import React, {useEffect,useState,useCallback} from "react";
import Axios from "axios";
import './UsersPage.scss';
import { Table } from "./components/Table";

export const UsersPage = () => {
  const [data,setData] = useState('');
  const getData = useCallback(async ()=>{
    const data = await Axios.get('api/get').then((data=>data));
    setData(data.data);
  });
  useEffect(()=>{
    getData();
  },[]);
  // useEffect(()=>{
  //   Axios.get('api/get').then((data)=>{
  //     setData(data.data)
  //   });
  // },[])
  
  return (
    <>
      <h1>Tools</h1>
      <Table title={['Name','Email','Date register','Date login','Status']} data={data}></Table>
    </>
  )
}