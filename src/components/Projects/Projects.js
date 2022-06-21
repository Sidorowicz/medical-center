import ProjectMenagement from './ProjectMenagement';
import * as React from 'react';
import PatientToProject from '../Patients/PatientToProject';
import PatientsInProjects from '../Patients/PatientsInProjects';
import TestOrder from '../Tests/TestOrder';
import TestMenagement from '../Tests/TestMenagement';
import ProjectDetails from './ProjectDetails';
import Menu from '../Menu/Menu';
import AccrdElement from '../AccrdElement';
const Projects = () => {
  return (
     <div>
      <Menu/>
<AccrdElement title="Project Management" text="Browse, add, delete and modify projects." comp={<ProjectMenagement/> }/>

<AccrdElement title="Add patient to a project" text="Add patient to project" comp={<PatientToProject/> }/>

<AccrdElement title="Patients in projects " text="Browse, edit, delete and add test orders and projects" comp={<PatientsInProjects/>}/>

<AccrdElement title="Order test" text="Add test order" comp={<TestOrder/> }/>

<AccrdElement title="Test Orders Management" text="Browse, edit and delete a test orders" comp={<TestMenagement/>}/>

<AccrdElement title="Project Details" text="Find specific project details like connected patient_id's and they agreement status" comp={<ProjectDetails/> }/>

   </div>
  )
}

export default Projects
