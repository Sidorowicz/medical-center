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

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const PatientsInProjects = () => {
    const axios = require('axios');
    const [columns] = useState([
      { name: 'patient_id', title: 'Patient ID' },
      { name: 'project_id', title: 'Project ID' },
      { name: 'agree', title: 'Agreed to be tested' },
      ]);
      const [columns2] = useState([
        { name: 'patient_id', title: 'Patient ID' },
        { name: 'test_id', title: 'Test ID' },
        { name: 'completed', title: 'In progress' },
        ]);
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState('');
      const [rows, setRows] = useState([]);
      const [rows2, setRows2] = useState([]);
      const getRowId = row => row.id;
      const [filters, setFilters] = useState([{ columnName: '', value: '' }]);


      useEffect(()=>{
        axios.get(`http://localhost:5000/patientproject`)
            .then(res => {
              setRows( res.data);
            })
            .catch(error => {
            console.log(error);
        });
        axios.get(`http://localhost:5000/patienttest`)
            .then(res => {
              setRows2( res.data);
            })
            .catch(error => {
            console.log(error);
        });
    },[])


    

    const addPatient=(added)=>{
      console.log(added)
      axios.post('http://localhost:5000/patientproject', {
        name:added[0].name,
        gender:added[0].gender,
        email:added[0].email,
        address:added[0].address
      }).then(resp => {
          console.log(resp.data);
      }).catch(error => {
          console.log(error);
      });
    }

    const deletePatient=(deleted)=>{
      axios.delete(`http://localhost:5000/patientproject/${deleted[0]}/`)
      .then(resp => {
          console.log(resp.data)
      }).catch(error => {
          console.log(error);
      });
    }

    const modifyPatient=(changed)=>{
      let ids =  Object.keys(changed)[0]
      axios.put(`http://localhost:5000/patientproject/${ids}/`, {
        name:Object.values(changed)[0].name,
        gender:Object.values(changed)[0].gender,
        email:Object.values(changed)[0].email,
        address:Object.values(changed)[0].address
      }).then(resp => {

          console.log(resp.data);
      }).catch(error => {

          console.log(error);
      });
    }

      const commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
          addPatient(added)
          const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
          changedRows = [
            ...rows,
            ...added.map((row, index) => ({
              id: startingAddedId + index,
              ...row,
            })),
          ];
          setOpen(true)
          setMessage("Succesfully added row")
          console.log(added)
        }
        if (changed) {
          modifyPatient(changed)
          changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
          setOpen(true)
          setMessage("Succesfully changed row")
        }
        if (deleted) {
          deletePatient(deleted)
          const deletedSet = new Set(deleted);
          changedRows = rows.filter(row => !deletedSet.has(row.id));
          setMessage("Succesfully deleted row")
        }
        setRows(changedRows);
        setOpen(true);
      };
    
  return (
    <>
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
          {message}
        </Alert>
      </Collapse>
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <EditingState
          // onCommitChanges={commitChanges}
        />
        <Table />
        <TableEditRow />
        
         <PagingState
          defaultCurrentPage={0}
          pageSize={5}
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
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
    </Paper>

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
          {message}
        </Alert>
      </Collapse>
    <Paper>
      <Grid
        rows={rows2}
        columns={columns2}
        getRowId={getRowId}
      >
        <EditingState
          // onCommitChanges={commitChanges}
        />
        <Table />
        <TableEditRow />
        
         <PagingState
          defaultCurrentPage={0}
          pageSize={5}
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
        <TableEditRow />
        <TableEditColumn

          showEditCommand
          showDeleteCommand
        />
      </Grid>
    </Paper>
  </>
  )
}

export default PatientsInProjects
