import * as React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route, Link } from "react-router-dom";
import LogTable from '../components/Table';
import { Container } from '@mui/system';
import AppHeader from './AppHeader';


export default function AppLayout() {

  return (
    <Box>

        <AppHeader />
      
        <Box sx={{ display: 'flex', marginTop: '4rem' }}>
            <Container maxWidth='lg'>

                <Routes>
                    <Route path='*' element={<LogTable />} />
                </Routes> 

            </Container>
        </Box>

    </Box>
  );
}
