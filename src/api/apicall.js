import axios from "axios";

export const adddata=(table,data)=>{
    axios.post(`http://localhost:5000/${table}`, data
    ).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });
  }

  export const deletedata=(table,id)=>{
    axios.delete(`http://localhost:5000/${table}/${id}/`)
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });
  }

export const modifydata=(table,data,id)=>{
    axios.patch(`http://localhost:5000/${table}/${id}/`, data).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });
  }
