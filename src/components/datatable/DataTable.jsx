import * as React from 'react';
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColums, useRows } from "./../../datatablesearch"
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function DataTable() {
  const [data, setData] = useState(useRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ];

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New Users
        <Link to="/users/new" style={{ textDecoration: "none" }} className='link' >Add New</Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColums.concat(actionColumn)}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}