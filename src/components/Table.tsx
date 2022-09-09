import * as React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TableSearchToolBar from './Table/TableSearchToolBar';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';



const TableHeaderLabel = styled(Typography)<TypographyProps>(({ theme }) => ({
    textTransform: 'uppercase',
    color: '#616161',
    fontWeight: '600'
}));



export default function LogTable() {

    const [filterName, setFilterName] = React.useState('');

    const handleFilterName = (filterName: string) => {
        setFilterName(filterName);
    };


  return (
     <Box>
          <Card>
            <TableSearchToolBar filterName={filterName} onFilterName={handleFilterName} />

            <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                <TableRow>
                    <TableCell />
                    <TableCell>
                        <TableHeaderLabel>Actor</TableHeaderLabel>
                    </TableCell>
                    <TableCell>
                        <TableHeaderLabel>Action</TableHeaderLabel>
                    </TableCell>
                    <TableCell>
                        <TableHeaderLabel>Date</TableHeaderLabel>
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                
                </TableBody>
            </Table>
            </TableContainer>
        </Card>
     </Box>
  );
}
