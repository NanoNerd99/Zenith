import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from "@mui/material/Typography";

const sexType = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
];

function Register() {


    const [sexChoose, setSexChoose] = React.useState('Male');
    const handleChange = (event) => {
        setSexChoose(event.target.value);
    };
    return (
        <Grid
            xs={8.6}
            sx={{ marginTop: 1, backgroundColor: 'white' }}
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{ height: 'auto', paddingTop: 5, marginRight: 5.5, marginBottom: 10, borderBottom: '1 solid black' }}
            >
                <Grid container
                      justifyContent="center"
                      alignItems="center" sx={{ border: 1, borderRadius: 8, borderColor: '#E5E5E5' , width: 78 }}>
                    <Typography sx={{fontSize: '14px', opacity: 0.8, paddingTop: 0.5, paddingBottom: 0.5  }}>Adult</Typography>
                </Grid>

            </Grid>
            <Grid
                container
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ height: 'auto', paddingTop: 5 }}
            >
                <Grid item>
                    <TextField sx={{ width: '264px', height: '48' }} id="outlined-basic" label="First Name" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField sx={{ width: '264px', height: '48' }} id="outlined-basic" label="Last Name" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField
                        sx={{ width: '264px', height: '48' }}
                        id="outlined-select-currency"
                        select
                        label="Gender"
                        value={sexChoose}
                        onChange={handleChange}
                    >
                        {sexType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField sx={{ width: '264px', height: '48' }} id="outlined-basic" label="National ID" variant="outlined" />
                </Grid>


            </Grid>
            <Grid
                container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{ height: 'auto', paddingTop: 5, marginRight: 5.5, marginBottom: 5 }}
            >
                <Grid item>
                    <TextField sx={{ width: '264px', height: '48' }} id="outlined-basic" label="First Name" variant="outlined" />
                </Grid>

                <Grid item>
                    <TextField sx={{ width: '264px', height: '48' }} id="outlined-basic" label="Last Name" variant="outlined" />
                </Grid>



            </Grid>

            <Divider variant="middle" flexItem />

            <Grid
                container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{ height: 'auto', paddingTop: 5, marginRight: 5.5, marginBottom: 10, borderBottom: '1 solid black' }}
            >
                <Grid item>
                    <Button sx={{
                        width: '194px', border: 2, height: '41px', borderRadius: '8px',
                        "&: hover": {
                            border: 2,

                        },
                    }} variant="outlined">Add New Passenger<ClearIcon sx={{ transform: "rotate(45deg)" }} /></Button>
                </Grid>



            </Grid>

        </Grid>
    )
}

export default Register;
