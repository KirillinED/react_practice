import React from 'react';
import {useFormik} from 'formik';
import {Autocomplete, Container, Box, TextField, Dialog, DialogTitle, DialogContent, Button} from "@mui/material";

export default function CustomerForm(
    initVal
) {
    const defaultInitVal = {
        id: null,
        city_id: null,
        city_name: '',
        address_id: null,
        address_name: '',
        road_map:'',
        mime_type:'',
        del: false,
    };

    const cities = [
        {
            "id": 2084,
            "name": "Казань 1",
            "region_name": "Респ. Татарстан, Гос. Россия"
        },{
            "id": 2085,
            "name": "Казань 2",
            "region_name": "Респ. Татарстан, Гос. Россия"
        },{
            "id": 2086,
            "name": "Казань 3",
            "region_name": "Респ. Татарстан, Гос. Россия"
        },{
            "id": 2087,
            "name": "Казань 4",
            "region_name": "Респ. Татарстан, Гос. Россия"
        },{
            "id": 2088,
            "name": "Бавлы",
            "region_name": "Респ. Татарстан, Гос. Россия"
        },
    ];

    const [geoCities, setGeoCities] = React.useState([]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initVal ? initVal : defaultInitVal,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const [timerId, setTimerId] = React.useState(false);

    return (
        <Container maxWidth={"md"}>
            <Dialog fullWidth open={true}>
                <DialogTitle>Anywhere in your App!</DialogTitle>
                <form>
                    <DialogContent>
                        <Autocomplete
                            name={"city"}
                            options={geoCities}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            onChange={(event, option) => {
                                if (option !== null) {
                                    formik.setFieldValue("city_id", option.id);
                                    formik.setFieldValue("city_name", option.name);
                                } else {
                                    formik.setFieldValue("city_id", null);
                                    formik.setFieldValue("city_name", '');
                                }

                                formik.handleChange(event);
                            }}
                            onInputChange={() => {
                                clearTimeout(timerId);
                                let timer = setTimeout(() => {
                                    setGeoCities(cities);
                                }, 1000);
                                setTimerId(timer);
                            }}
                            renderInput={(params) => (
                                <TextField {...params}
                                    label={"Город"}
                                />
                            )}
                            getOptionLabel={(option) => (option.name)}
                            renderOption={(props, option) => (
                                <li {...props} key={option.id}>{option.name} ({option.region_name})</li>
                            )}
                        />
                        <Box marginTop={"20px"}>
                            <Button
                                variant={"contained"}
                                disabled={formik.isSubmitting}
                                onClick={formik.handleSubmit}
                            >Submit</Button>
                        </Box>
                    </DialogContent>
                </form>
            </Dialog>
        </Container>
    );
}
