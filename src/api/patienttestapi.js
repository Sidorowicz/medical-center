import { modifydata,adddata,deletedata } from "./apicall"

  export const modifyPatienttest = (data,id)=> modifydata("patienttest",data,id)
  export const addPatienttest = (data)=> adddata("patienttest",data)
  export const deletePatienttest = (id)=> deletedata("patienttest",id)