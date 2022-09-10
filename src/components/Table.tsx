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
import Log from '../models/Log';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchLog, selectLogsDetails } from '../store/features/LogSlice';
import { fDate } from '../utils/DateUtils';



function Row(props: { row: Log }) {
  
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { log, status } = useAppSelector(selectLogsDetails);
  const dispatch = useAppDispatch();


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        
        <TableCell component="th" scope="row">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar sx={{ height: '25px', width: '25px', padding: '2.5px', marginRight: '5px', background: 'linear-gradient(#F3994A, #B325E2)' }} >
                    <Typography sx={{ fontWeight: '700' }}>M</Typography>
                </Avatar>
                <Typography sx={{ fontWeight: '400', fontSize: '14', fontFamily: 'inter' }}>
                    {row.actor.name}
                </Typography>
            </Box>
        </TableCell>
        <TableCell>{row.action.name}</TableCell>
        <TableCell>{row.occurred_at}</TableCell>

        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
              dispatch(fetchLog(row.id))
            }}
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
                    {log? (
                      <TableBody>
                      <TableRow key={`${row.id}-details-1`}>
                          <TableCell component="th" scope="row">
                              <DetailsTable title="Actor" list={log.actor as any} head={['name', 'group', 'id']} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                              <DetailsTable title="Action" list={log.action as any} head={['name', 'object', 'id']} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                              <DetailsTable title="Date" list={{"Readable": fDate(log.occurred_at)}} head={["Readable"]} />
                          </TableCell>
                          <TableCell />
                      </TableRow>

                      <TableRow key={`${row.id}-details-2`}>
                          <TableCell component="th" scope="row">
                              <DetailsTable title="META DATA" list={log.metaData as any} head={['redirect', 'description', 'x_request_id']} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                              <DetailsTable title="TARGET" list={log.target as any} head={['name', 'group', 'id']} />
                          </TableCell>
                      </TableRow>
                  </TableBody>
                  ):
                  null
                  }
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const TableHeaderLabel = styled(Typography)<TypographyProps>(({ theme }) => ({
    textTransform: 'uppercase',
    color: '#616161',
    fontWeight: '600'
}));



export default function LogTable(props: any) {

    const { list, pageInfo, handleLoadMore, handleSearch } = props;
    
    const [filterName, setFilterName] = React.useState('');

    const handleFilterName = (filterName: string) => {
        setFilterName(filterName);
    };

    const handleFilterClick = () => {
      handleSearch(filterName)
    }


    return (
        <Box>
        <Card>
            <TableSearchToolBar filterName={filterName} onFilterName={handleFilterName} handleFilterClick={handleFilterClick} />

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
                {list.map((row: any) => (
                    <Row key={row.id} row={row} />
                ))}
                </TableBody>
            </Table>
                {
                  pageInfo && pageInfo.nextPage !== -1?
                  <Button size="large" sx={{ backgroundColor: '#F5F5F5', width: '100%', height: '52px' }}
                  onClick={handleLoadMore}
                  >
                    <Typography sx={{ fontWeight: '600', color: '#616161' }}>
                        LOAD MORE
                    </Typography>
                </Button>
                : 
                null
                }
            </TableContainer>
        </Card>
        </Box>
  );
}
