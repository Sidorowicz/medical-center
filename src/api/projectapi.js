import { modifydata,adddata,deletedata } from "./apicall"

  export const modifyProject = (data,id)=> modifydata("projects",data,id)
  export const addProject = (data)=> adddata("projects",data)
  export const deleteProject = (id)=> deletedata("projects",id)