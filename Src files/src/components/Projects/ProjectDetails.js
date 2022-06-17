import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';


const ProjectDetails = () => {
    const axios = require('axios');
    const [columns] = useState([
        { name: 'patient_id', title: 'patient_id' },
        { name: 'agree',type:'boolean', title: 'agree' },
      ]);
      const[step,setStep]=useState(false)
      const [selectedProject, setProject] = useState();
      const [projects, setProjects] = useState([]);
      const [patients, setPatients] = useState([]);
      const [ptests, setPTests] = useState([]);
      const getRowId = row => row.id;
      const [filters, setFilters] = useState([{ columnName: '', value: '' }]);

      useEffect(()=>{
            axios.get(`http://localhost:5000/projects`)
            .then(res => {
              setProjects( res.data);
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
        },[])

    const handleChangeProject = (event) => {
        setProject(event.target.value);
        console.log("selectedproject"+event.target.value)
        axios.get(`http://localhost:5000/patientproject?project_id=${event.target.value}`)
                .then(res => {
                    setPTests( res.data);
                    setStep(true)
                    console.log(res.data)
                })
                .catch(error => {
                    setStep(false)
                console.log(error);
            })

            patients.map((patient)=>{
                
            })
    };

    const handleSubmit = (event) => {
        console.log("ok")
    };



  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="label">Select Project</InputLabel>
            <Select
                labelId="label"
                id="demo-simple-select"
                value={selectedProject}
                label="select patient"
                onChange={handleChangeProject}
            >
                {projects.map((project,key)=>{
                return <MenuItem key={key} value={project.id}>{project.test_name}</MenuItem>
                })}
            </Select>
      </FormControl>


      {/* { step==true ?
        <Paper>
      <Grid
        rows={ptests}
        columns={columns}
      >
        <PagingState
          defaultCurrentPage={0}
          pageSize={10}
        />
        <FilteringState
          filters={filters}
          onFiltersChange={setFilters}
        />
        <IntegratedFiltering />
        <SortingState
          defaultSorting={[{ columnName: 'Name', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <IntegratedPaging />
        <Table />
        <TableHeaderRow showSortingControls/>
        <TableFilterRow />
        <PagingPanel />
      </Grid>
    </Paper>
      :null} */}
      
<div >
<Button disabled style={{color:"black",width:"50vw"}}>Patient ID</Button><Button style={{width:"40vw",color:"black"}} disabled>Allows tests</Button>
    {ptests.map((p)=>{
      return (
      <div style={{width:"100%"}}>
        <Button disabled style={{color:"black",width:"50vw"}}>{p.patient_id} </Button>
        {p.agree=="true" ? 
        <Button style={{backgroundColor:'green',color:"white",width:"40vw"}} disabled>Agreed</Button> :
        <Button style={{backgroundColor:'red',color:"black",width:"40vw"}} disabled>Not Agreed</Button>}
        </div>
      )
    })}
</div>

    </div>
  )
}

export default ProjectDetails
