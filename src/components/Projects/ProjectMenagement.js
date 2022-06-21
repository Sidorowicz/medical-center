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
import { addProject,deleteProject,modifyProject } from '../../api/projectapi';
const ProjectMenagement = () => {
    const axios = require('axios');
    const [columns] = useState([
        { name: 'id', title: 'Id' },
        { name: 'project_number', title: 'project_number' },
        { name: 'test_name', title: 'test_name' },
        { name: 'head_doctor', title: 'head_doctor' },
      ]);
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState('');
      const [rows, setRows] = useState([]);
      const getRowId = row => row.id;
      const [filters, setFilters] = useState([{ columnName: '', value: '' }]);
      useEffect(()=>{
        axios.get(`http://localhost:403/projects`)
        .then(res => {
          setRows( res.data);
        })
        .catch(error => {
        console.log(error);
    });
    },[])


       
    const catchData=()=>{
      axios.get(`http://localhost:403/projects`)
        .then(res => {
          setRows( res.data);
        })
        .catch(error => {
        console.log(error);
      });
    }
    
    const commitChanges = ({ added, changed, deleted }) => {
      if (added) {
       addProject(Object.values(added)[0])
      }
      if (changed) {
       const changedData = Object.entries(changed)[0]
        modifyProject(changedData[1],changedData[0])
      }
      if (deleted) {
        deleteProject(deleted[0])
      }
      setOpen(true);
      catchData()
    };
    
  return (
    <div>
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
    </div>
  )
}

export default ProjectMenagement
