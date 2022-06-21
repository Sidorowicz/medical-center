import { modifydata,adddata,deletedata } from "./apicall"

  export const modifyPatient = (data,id)=> modifydata("patients",data,id)
  export const addPatient = (data)=> adddata("patients",data)
  export const deletePatient = (id)=> deletedata("patients",id)