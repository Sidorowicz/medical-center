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
import CloseIcon from '@mui/icons-material/Close';
import { deletePatientproject,addPatientproject,modifyPatientproject } from '../../api/patientproject';
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
        axios.get(`http://localhost:403/patientproject`)
            .then(res => {
              setRows( res.data);
            })
            .catch(error => {
            console.log(error);
        });
        axios.get(`http://localhost:403/patienttest`)
            .then(res => {
              setRows2( res.data);
            })
            .catch(error => {
            console.log(error);
        });
    },[])

      const catchData=()=>{
        axios.get(`http://localhost:403/patientproject`)
          .then(res => {
            setRows( res.data);
          })
          .catch(error => {
          console.log(error);
        });
      }
      
      const commitChanges = ({ added, changed, deleted }) => {
        if (added) {
          addPatientproject(Object.values(added)[0])
        }
        if (changed) {
         const changedData = Object.entries(changed)[0]
         modifyPatientproject(changedData[1],changedData[0])
        }
        if (deleted) {
          deletePatientproject(deleted[0])
        }
        setOpen(true);
        catchData()
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
