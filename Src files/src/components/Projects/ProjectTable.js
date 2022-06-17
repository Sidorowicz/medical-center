import { useEffect,useState } from 'react';
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




const ProjectTable = () => {
  const axios = require('axios');
  const [filters, setFilters] = useState([{ columnName: '', value: '' }]);
  const [columns] = useState([
    { name: 'id', title: 'Id' },
    { name: 'project_number', title: 'project_number' },
    { name: 'test_name', title: 'test_name' },
    { name: 'head_doctor', title: 'head_doctor' },
  ]);
  const [patient,setPatient]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/projects`)
        .then(res => {
          setPatient( res.data);
          console.log(patient);
        })
    .catch(error => {
        console.log(error);
    });
    },[])
 
  return (
    <div>
      <Paper>
      <Grid
        rows={patient}
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
    </div>
  )
}

export default ProjectTable
