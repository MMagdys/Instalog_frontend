import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Card } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import TableSearchToolBar from './Table/TableSearchToolBar';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DetailsTable from './Table/DetailsTable';
import { tableCellClasses } from "@mui/material/TableCell";



function createData(
  actor: string,
  action: string,
  date: string,
) {
  return {
    actor,
    action,
    date,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        
        <TableCell component="th" scope="row">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar sx={{ height: '25px', width: '25px', padding: '2.5px', marginRight: '5px', background: 'linear-gradient(#F3994A, #B325E2)' }} >
                    <Typography sx={{ fontWeight: '700' }}>M</Typography>
                </Avatar>
                <Typography sx={{ fontWeight: '400', fontSize: '14', fontFamily: 'inter' }}>
                    {row.actor}
                </Typography>
            </Box>
        </TableCell>
        <TableCell>{row.action}</TableCell>
        <TableCell>{row.date}</TableCell>

        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon />: <ArrowForwardIosIcon />}
          </IconButton>
        </TableCell>

      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }} >
                <Table 
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none",
                        width: '90vw',
                        position: 'relative'
                        }
                    }}
                >
                    <TableBody>
                        <TableRow key={row.actor}>
                            <TableCell component="th" scope="row">
                                <DetailsTable title="Actor" list={[{key: "Name", value: "Muhammad Magdy"}]} />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <DetailsTable title="Action" list={[{key: "Name", value: "Muhammad Magdy"}]} />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <DetailsTable title="Date" list={[{key: "Name", value: "Muhammad Magdy"}]} />
                            </TableCell>
                            {/* <TableCell /> */}
                        </TableRow>

                        <TableRow key={row.actor}>
                            <TableCell component="th" scope="row">
                                <DetailsTable title="META DATA" list={[{key: "Name", value: "Muhammad Magdy"}]} />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <DetailsTable title="TARGET" list={[]} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const rows = [
  createData('muhammad@instatus.com', 'user.Login success', 'Aug 7, 5:38 PM'),
  createData('muhammad@instatus.com', 'user.searched_activity_log_events', 'Aug 7, 5:38 PM'),
  createData('muhammad@instatus.com', 'user.invited_teammate', 'Aug 7, 5:38 PM'),
];


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

            <TableContainer component={Paper} sx={{ position: 'relative' }}>
            <Table>
                <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                    <TableRow>
                        <TableCell>
                            <TableHeaderLabel>Actor</TableHeaderLabel>
                        </TableCell>
                        <TableCell>
                            <TableHeaderLabel>Action</TableHeaderLabel>
                        </TableCell>
                        <TableCell>
                            <TableHeaderLabel>Date</TableHeaderLabel>
                        </TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <Row key={row.actor} row={row} />
                ))}
                </TableBody>
            </Table>
                <Button size="large" sx={{ backgroundColor: '#F5F5F5', width: '100%', height: '52px' }}>
                    <Typography sx={{ fontWeight: '600', color: '#616161' }}>
                        LOAD MORE
                    </Typography>
                </Button>
            </TableContainer>
        </Card>
        </Box>
  );
}
