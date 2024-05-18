import React from 'react';
import ToggleFlightPage from '../src/toggleFlightPage.js';
import { Grid, Typography } from '@mui/material';
import { toggleData } from '../src/Data/toggleData.js';
import FlightMiddle from '../src/Components/flightMiddle.js';

function flights() {
    return (
        <div>
            {/*<Grid container justifyContent={'center'}>*/}
            {/*    <FlightMiddle />*/}
            {/*</Grid>*/}
            {/*<Grid*/}
            {/*    container*/}
            {/*    direction="column"*/}
            {/*    justifyContent="flex-end"*/}
            {/*    alignItems="center"*/}
            {/*    spacing={1}*/}
            {/*    mt={50}*/}
            {/*>*/}
            {/*    <Typography sx={{ fontWeight: '900', fontSize: '22px', mt: 5 }}>Frequently Asked Questions about Flights from New York to Los Angeles</Typography>*/}
            {/*    {toggleData.map((item,index) => {*/}
            {/*        return (*/}
            {/*            <ToggleFlightPage key={index} {...item} />*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</Grid>*/}
        </div>
    )
}

export default flights;
