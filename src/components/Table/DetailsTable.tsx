import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from "@mui/material/TableCell";
import { Typography } from '@mui/material';



type Item = {
    key: string,
    value: string
}

type Props = {
    title: string;
    list: Item[];
};



export default function DetailsTable(props: Props) {

  const { title, list } = props;

  return (
    <TableContainer >
      <Table 
        sx={{
            [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            padding: 0,
            paddingBottom: '1rem'
            }
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
                <Typography sx={{ fontWeight: '500', textTransform: 'uppercase', color: '#929292', fontFamily: 'inter' }}>
                    {title}
                </Typography>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
            {list.map((item) => (
                <TableRow
                    key={item.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        <Typography sx={{ fontWeight: '400', fontFamily: 'inter'}}>
                            {item.key}
                        </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <Typography sx={{ fontWeight: '400', fontFamily: 'inter'}}>
                            {item.value}
                        </Typography>
                    </TableCell>
                </TableRow>
            ))}          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
