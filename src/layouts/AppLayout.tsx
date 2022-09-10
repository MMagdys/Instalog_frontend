import * as React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route, Link } from "react-router-dom";
import { Container } from '@mui/system';
import AppHeader from './AppHeader';
import LogListPage from '../pages/LogListPage';


export default function AppLayout() {

  return (
    <Box>

        <AppHeader />
      
        <Box sx={{ display: 'flex', margin: '4rem' }}>
            <Container maxWidth='lg'>

                <Routes>
                    <Route path='*' element={<LogListPage />} />
                </Routes> 

            </Container>
        </Box>

    </Box>
  );
}
