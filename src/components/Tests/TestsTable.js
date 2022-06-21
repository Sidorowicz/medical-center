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
import axios from 'axios';



const TestsTable = () => {
  const axios = require('axios');
  const [filters, setFilters] = useState([{ columnName: '', value: '' }]);
  const [columns] = useState([
    { name: 'id', title: 'id' },
    { name: 'test_id', title: 'Test ID' },
    { name: 'patient_id', title: 'Patient ID' },

  ]);
  const [tests,setTests]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:403/patienttest`)
        .then(res => {
            setTests( res.data);
        })
    .catch(error => {
        console.log(error);
    });
    },[])
 
  return (
    <>
      <Paper>
      <Grid
        rows={tests}
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
    </>
  )
}

export default TestsTable
