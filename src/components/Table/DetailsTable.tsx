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
    list: {[key: string]: string};
    head: string[];
};


function createRows(items: {[key: string]: string}, head: string[]): Item[] {

  let rows: Item[] = []

  for (let i = 0; i < head.length; i++) {
    const field = head[i];
    const key = field == "id"? "ID" :field.charAt(0).toUpperCase() + field.slice(1);
    if(items[`${field}`]) {
      rows.push({
        key: key,
        value: items[`${field}`]
      })
    }
  }
  console.log(rows)

  return rows
}


export default function DetailsTable(props: Props) {

  const { title, list, head } = props;
  const rows: Item[] = list? createRows(list, head): []

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
            {rows.map((item) => (
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
