import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";


export const userColumns = [
  {
    field: "id",
    headerName: "Id",
    width: 80,
  },
  {
    field: "name",
    headerName: "Distrito",
    width: 290,
    renderCell: (params) => {
      return (
        <div>
          {params.row.clientLastName + ' ' + params.row.clientName}
        </div>
      );
    },
  },
  {
    field: "amount",
    headerName: "Direccion",
    width: 230,
  },
  {
    field: "type",
    headerName: "Modelo",
    width: 230,
  },
  {
    field: "gas",
    headerName: "Detalle",
    width: 200,
    renderCell: (params) => {
    },
  },
  {
    field: "4ds",
    headerName: "Informacion adicional",
    width: 250,
    renderCell: (params) => {
    },
  },
  {
    field: "sda",
    headerName: "Fecha de inicio",
    width: 250,
    renderCell: (params) => {
    },
  },
  {
    field: "ccga",
    headerName: "Informacion de servidor",
    width: 250,
    renderCell: (params) => {
    },
  },


];

export function UserTable() {
  const [userRows, setUserRows] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const rows = await userRows();
      setUserRows(rows);
    }
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Filtrar los disfraces en función de la búsqueda
  const filteredData = userRows.filter((row) => {
    const costumeName = row.name.toLowerCase();
    return costumeName.includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <h1>Tabla de usuarios</h1>
      <TextField
        label="Buscar disfraces"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
        fullWidth
      />
      <DataGrid rows={filteredData} columns={userColumns} />
    </div>
  );
}

export async function userRows() {
  try {
    const response = await axios.get(
      "https://disfracesrosario.up.railway.app/transactions"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Estilos CSS
const styles = {
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  userImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
};

export default UserTable;
