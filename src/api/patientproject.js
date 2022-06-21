import { modifydata,adddata,deletedata } from "./apicall"

  export const modifyPatientproject = (data,id)=> modifydata("patientproject",data,id)
  export const addPatientproject = (data)=> adddata("patientproject",data)
  export const deletePatientproject = (id)=> deletedata("patientproject",id)