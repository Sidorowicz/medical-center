import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { addPatienttest } from '../../api/patienttestapi';
const TestOrder = () => {
    const axios = require('axios');
    const [open,setOpen]=useState(false)
      const [selectedPatient, setPatient] = useState();
      const [agree, setAgree] = useState("false");
      const [selectedTest, setTest] = useState();
      const [patients, setPatients] = useState([]);
      const [tests, setTests] = useState([]);
      const [error,setError]=useState('')

      useEffect(()=>{

            axios.get(`http://localhost:403/patients`)
                .then(res => {
                  setPatients( res.data);
                })
                .catch(error => {
                console.log(error);
            });
            axios.get(`http://localhost:403/tests`)
                .then(res => {
                  setTests( res.data);
                })
                .catch(error => {
                console.log(error);
            });
        },[])


    const handleChangePatient = (event) => {
      axios.get(`http://localhost:403/patientproject?patient_id=${event.target.value}`)
        .then(resp => {
          setAgree(resp.data[0].agree)
          console.log(resp.data)
        }).catch(error => {
          setAgree("false")
            console.log(error);
        });
      setPatient(event.target.value);
    };


    const handleChangeProject = (event) => {
      setTest(event.target.value);
    };


    const handleSubmit = (event) => {
      {selectedTest && selectedPatient ? 
        addPatienttest({patient_id:selectedPatient,test_id:selectedTest})
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
          Successfully added test order
        </Alert>
      </Collapse>

   <FormControl fullWidth>
   <InputLabel id="label">Select Patient</InputLabel>
      <Select
        labelId="label"
        id="demo-simple-select"
        value={selectedPatient}
        label="Select Patient"
        onChange={handleChangePatient}
      >
        {patients.map((patient,key)=>{
          return <MenuItem key={key} value={patient.id}>{patient.name}</MenuItem>
        })}
      </Select>
      </FormControl>
      
      <FormControl fullWidth style={{margin:'20px 0 0 0 '}}>
      {agree=="true" ?<>
      <InputLabel id="label2">Select Test</InputLabel>
      <Select
      labelId="label2"
      label="Select Test"
      id="demo-simple-select"
      value={selectedTest}
      onChange={handleChangeProject}
    >
      {tests.map((test,key)=>{
        return <MenuItem key={key} value={test.id}>{test.test_name}</MenuItem>
      }) }
      
    </Select></>
      : <div>Select patient that agrees for tests</div>}
      
    </FormControl>

    <Button style={{margin:'20px'}} onClick={handleSubmit}>Add patient to project</Button>

    </div>
  )
}

export default TestOrder
