import React from "react";
import "./Table.scss";

export const Table = ({title,data}) => {
  console.log('Table',data);
  if (!data) return (<div>No users</div>);
  return (
    <div className="table">
      <div className="table__title">
        {title.map(e=>(<div key={e}>{e}</div>))}
      </div>
      <div className="table__body">
      {data.map(e=>(
        <div key={e.user_id} className="table__body_row">
          <div className="user_id">{e.user_id}</div>
          <div className="user_name">{e.user_name}</div>
          <div className="user_mail">{e.user_mail}</div>
          <div className="user_date_register">{new Date(e.user_date_register).toLocaleString()}</div>
          <div className="user_date_login">{new Date(e.user_date_login).toLocaleString()}</div>
          <div className="user_status">{e.user_status ? 'Active' : 'Banned'}</div>
        </div>)
      )}
      </div>
    </div>
  )
}