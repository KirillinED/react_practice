import React from 'react';
import {Grid} from "@mui/material";

import Header from './components/header';
import CustomerForm from "./components/CustomerForm";


const App = () => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item xs={12}>
            <CustomerForm
                initVal={{
                    id: null,
                    city_id: 12,
                    city_name: 'Казань',
                    address_id: null,
                    address_name: '',
                    road_map:'',
                    mime_type:'',
                    del: false,
                }}
            />
        </Grid>
    </Grid>
);

export default App;