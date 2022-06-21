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
import { addPatient,deletePatient,modifyPatient } from '../../api/patientapi';
const PatientMenagement = () => {
    const axios = require('axios');
    const [columns] = useState([
      { name: 'name', title: 'Name' },
      { name: 'gender', title: 'Gender' },
      { name: 'email', title: 'email' },
      { name: 'address', title: 'address' },
      ]);
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState('');
      const [rows, setRows] = useState([]);
      const getRowId = row => row.id;
      const [filters, setFilters] = useState([{ columnName: '', value: '' }]);
      useEffect(()=>{
        catchData()
    },[])


    const catchData=()=>{
      axios.get(`http://localhost:403/patients`)
        .then(res => {
          setRows( res.data);
        })
        .catch(error => {
        console.log(error);
      });
    }

    const commitChanges = ({ added, changed, deleted }) => {
      if (added) {
       addPatient(Object.values(added)[0])
      }
      if (changed) {
       const changedData = Object.entries(changed)[0]
        modifyPatient(changedData[1],changedData[0])
      }
      if (deleted) {
        deletePatient(deleted[0])
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
          onCommitChanges={commitChanges}
        />
        <Table />
        <TableEditRow />
        
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
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
    </Paper>
  </>
  )
}

export default PatientMenagement
