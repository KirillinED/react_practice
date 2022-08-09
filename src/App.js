import React from 'react';
import {Grid} from "@mui/material";

import CustomerForm from "./components/CustomerForm";
import ObservableStore from "./stores/appStore";


const App = () => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <CustomerForm
                store={ObservableStore}
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
