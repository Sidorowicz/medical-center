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




const PatientTable = () => {
  const axios = require('axios');
  const [filters, setFilters] = useState([{ columnName: '', value: '' }]);
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'email', title: 'email' },
    { name: 'address', title: 'address' },
  ]);
  const [patient,setPatient]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/patients`)
        .then(res => {
          setPatient( res.data);
        })
    .catch(error => {
        console.log(error);
    });
    },[])
 
  return (
    <>
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
    </>
  )
}

export default PatientTable
