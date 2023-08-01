import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";



export default function UserList() {
  
 
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
     
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            
              <button className="userListEdit">Active</button>
          
            <DeleteOutline/>
          </div>
        );
      },
    },
  ];
  const rows = [
    { id: 1, user: 'farah',email: 'farah@gmail.com', status: 0},
    { id: 1, user: 'farah',email: 'farah@gmail.com', status: 1 },
    { id: 1, user: 'farah',email: 'farah@gmail.com', status: 0 },
  ];
  
  return (
   
      <div className="userList">
        <DataGrid
          rows={rows}
          
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
  );
}