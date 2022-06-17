import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  TableFilterRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProjectMenagement = () => {
    const axios = require('axios');
    const [open, setOpen] = useState(false);
    const [columns] = useState([
        { name: 'id', title: 'Id' },
        { name: 'patient_name', title: 'patient_name' },
        { name: 'project_name', title: 'project_name' },
        { name: 'agree',type:'boolean', title: 'agree' },
      ]);
      const [selectedPatient, setPatient] = useState();
      const [selectedProject, setProject] = useState();
      const [patients, setPatients] = useState([]);
      const [projects, setProjects] = useState([]);
      const [error,setError]=useState('')
      const [ptp, setPtp] = useState([]);
      const getRowId = row => row.id;
      const [filters, setFilters] = useState([{ columnName: '', value: '' }]);

      useEffect(()=>{
            axios.get(`http://localhost:5000/patientproject`)
                .then(res => {
                  setPtp( res.data);
                })
                .catch(error => {
                console.log(error);
            });
            axios.get(`http://localhost:5000/patients`)
                .then(res => {
                  setPatients( res.data);
                })
                .catch(error => {
                console.log(error);
            });
            axios.get(`http://localhost:5000/projects`)
                .then(res => {
                  setProjects( res.data);
                })
                .catch(error => {
                console.log(error);
            });
        },[])


    const handleChangePatient = (event) => {
      setPatient(event.target.value);
    };
    const handleChangeProject = (event) => {
      setProject(event.target.value);
    };
    const handleSubmit = (event) => {
      {selectedProject && selectedPatient ? 
        axios.post('http://localhost:5000/patientproject', {
          patient_id:selectedPatient,
          project_id:selectedProject,
          agree:"false"
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
            setOpen(false);
        })
        : setError('Select both fields!')
      }
      setOpen(true);
    };
    
  return (
    <div>

      {error && error}
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Patients have been added to project
        </Alert>
      </Collapse>
   <FormControl fullWidth>
   <InputLabel id="label">Select Patient</InputLabel>
      <Select
        labelId="label"
        id="demo-simple-select"
        value={selectedPatient}
        label="select patient"
        onChange={handleChangePatient}
      >
        {patients.map((patient,key)=>{
          return <MenuItem key={key} value={patient.id}>{patient.name}</MenuItem>
        })}
      </Select>
      </FormControl>

      <FormControl fullWidth style={{margin:'20px 0 0 0 '}}>
      <InputLabel id="label2">Select project</InputLabel>
      <Select
        labelId="label2"
        id="demo-simple-select"
        value={selectedProject}
        label="select project"
        onChange={handleChangeProject}
      >
        {projects.map((project,key)=>{
          return <MenuItem key={key} value={project.id}>{project.test_name}</MenuItem>
        })}
      </Select>
    </FormControl>

    <Button style={{margin:'20px'}} onClick={handleSubmit}>Add patient to project</Button>

    </div>
  )
}

export default ProjectMenagement
