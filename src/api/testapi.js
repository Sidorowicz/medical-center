import { modifydata,adddata,deletedata } from "./apicall"

  export const modifyTest = (data,id)=> modifydata("tests",data,id)
  export const addTest = (data)=> adddata("tests",data)
  export const deleteTest = (id)=> deletedata("tests",id)