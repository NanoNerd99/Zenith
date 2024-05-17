import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {Collapse, Divider, Grid, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Image from "next/image";
import React from 'react';
import {ticketChooseData} from '../Data/ticketChooseData.js';
import TicketChooseStatic from './ticketChooseStatic.js';

const PrettoSlider = styled(Slider)({
    height: 0.5,
    '& .MuiSlider-thumb': {
        height: 8,
        width: 8,
        backgroundColor: '#fff',
        border: '1.5px solid currentColor',
    },
});

const ticketSelector = {
    close: "close",
    flightDetails: "flightDetails open",
    flightRole: "Role open",
};


function TicketChoose(props) {

    const [open, setOpen] = React.useState(ticketSelector.close);

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch" sx={{
            width: '835px',
            backgroundColor: 'white',
            height: 'auto',
            marginRight: 1,
            border: 0.2,
            borderColor: '#e5e5e5',
            borderRadius: 2,
            marginTop: 1,
            borderRight: 5,
            borderRightColor: '#008148', ...(props.suggest === false && {borderRightColor: 'white'})
        }}>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                lg={8.7}


            >
                <Grid
                    onClick={() => setOpen(ticketSelector.flightDetails)}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    lg={12}

                >

                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{marginRight: 3, marginTop: 2}}
                        lg={1.4}
                    >

                        <Grid item sx={{
                            border: 1,
                            borderColor: '#e5e5e5',
                            borderRadius: 100,
                            padding: 1,
                            m:1,
                            width: '48px',
                            height: '48px'
                        }}>
                            <Image src={props.imgSrc} alt="flight company" width="32px" height="32px"/>
                        </Grid>
                        <Grid>
                            <Typography>{props.label}</Typography>
                        </Grid>


                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        lg={4}
                        sx={{marginTop: -4, marginRight: 2}}
                    >
                        <Grid sx={{backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15}}>
                            <Typography sx={{fontSize: '12px'}}>
                                {props.ticketKind}
                            </Typography>
                        </Grid>
                        <Grid sx={{backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15, marginRight: 1}}>
                            <Typography sx={{fontSize: '12px'}}>
                                {props.flightKind}
                            </Typography>
                        </Grid>
                        <Grid sx={{backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15, marginRight: 1}}>
                            <Typography sx={{fontSize: '12px'}}>
                                {props.airplaneName}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        lg={12}
                        sx={{marginTop: -2.6}}
                    >
                        <Grid>
                            <Typography sx={{fontSize: '16px', fontWeight: '900', ml:2}}>
                                {props.startLocation}
                            </Typography>
                        </Grid>
                        <Grid sx={{marginRight: 0}}>
                            <Typography sx={{fontSize: '18px', fontWeight: '900', marginLeft: 1}}>
                                {props.startTime}
                            </Typography>
                        </Grid>
                        <Grid>
                            <AirplanemodeActiveRoundedIcon
                                sx={{color: '#bfbfbf', ml:1, transform: "rotate(270deg)", marginTop: 0.25}}/>
                        </Grid>
                        <Grid sx={{marginRight: 1.5, marginLeft: 2, width: 150}}>
                            <PrettoSlider disabled defaultValue={100}/>
                        </Grid>

                        <Grid>
                            <Typography sx={{fontSize: '16px', fontWeight: '900', marginRight: 1}}>
                                {props.endLocation}
                            </Typography>
                        </Grid>
                        <Grid sx={{marginRight: 2}}>
                            <Typography sx={{fontSize: '18px', fontWeight: '900'}}>
                                {props.endTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start">
                    <Box sx={{width: '100%', typography: 'body1'}}>

                        <TabContext>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <TabList>
                                    <Tab sx={{color: '#0177DB'}} label="Flight Information" onClick={() => {
                                        setOpen(ticketSelector.flightDetails)
                                    }}/>
                                    <Tab sx={{color: '#0177DB'}} label="Refund Policy" onClick={() => {
                                        setOpen(ticketSelector.flightRole)
                                    }}/>
                                </TabList>
                            </Box>
                            <Collapse in={open === ticketSelector.flightDetails || open === ticketSelector.flightRole}
                                      unmountOnExit>
                                <Collapse in={open === ticketSelector.flightDetails} unmountOnExit sx={{marginTop: 2}}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                        alignItems="center"
                                    >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{opacity: 0.7}}>
                                                    Flight Number
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{fontSize: '14px', marginTop: 1}}>
                                                    {props.flightNumber}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{opacity: 0.7}}>
                                                    Terminal
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{fontSize: '14px', marginTop: 1}}>
                                                    {props.terminalNumber}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{opacity: 0.7}}>
                                                    Allowed Baggage Weight
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{fontSize: '14px', marginTop: 1}}>
                                                    {props.baggageWeight}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{opacity: 0.7}}>
                                                    Flight Kind
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{fontSize: '14px', marginTop: 1}}>
                                                    {props.flightKind}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Collapse>
                                <Collapse in={open === ticketSelector.flightRole} unmountOnExit sx={{marginTop: 2}}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                        alignItems="flex-start"
                                    >
                                        {ticketChooseData.map((item, index) => {
                                            return (
                                                <TicketChooseStatic key={index} {...item} />
                                            )
                                        })}
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography
                                                    sx={{color: '#DC3444', fontSize: '20px', fontWeight: '900'}}>
                                                    60%
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{fontSize: '14px', marginTop: 1, textAlign: 'center'}}>
                                                    30 minutes before flight
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Collapse>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    lg={12}
                                    sx={{marginTop: 2, marginBottom: 0.25}}
                                >
                                    <Button onClick={() => setOpen(ticketSelector.close)} value="0" variant="Close">Close<KeyboardArrowUpRoundedIcon/></Button>
                                </Grid>
                            </Collapse>
                        </TabContext>

                    </Box>
                </Grid>

            </Grid>
            <Divider orientation="vertical" flexItem/>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                lg={2.98}
                sx={{marginTop: 2}}


            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography sx={{color: '#0177DB', fontWeight: '900', fontSize: "20px"}}>{props.price}</Typography>
                    <Typography
                        sx={{color: '#CED2D5', fontWeight: '900', fontSize: "10px", m: 1}}>USD</Typography>
                </Grid>

                <Button sx={{marginTop: 1}} variant="ticket" href='#'>
                    Select Ticket
                </Button>

                {props.seat < 10 ?
                    <Typography sx={{color: '#DC3444', marginTop: 2, fontSize: '11px'}}>{props.seat} seats
                        remaining</Typography> : null}

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"

                >
                    <Collapse unmountOnExit
                              in={open === ticketSelector.flightDetails || open === ticketSelector.flightRole}>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{marginTop: 5}}

                        >
                            <Typography
                                sx={{opacity: 0.7, fontSize: '12px', marginTop: 2, marginLeft: 9}}>Adult:</Typography>
                            <Typography sx={{opacity: 0.7, fontSize: '12px', marginTop: 2}}>{props.price}</Typography>
                        </Grid>
                        <Divider variant="middle" flexItem sx={{marginTop: 1}}/>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            <Typography
                                sx={{opacity: 0.7, fontSize: '12px', marginTop: 1, marginLeft: 9}}>Total:</Typography>
                            <Typography sx={{opacity: 0.7, fontSize: '12px', marginTop: 1}}>{props.price}</Typography>
                        </Grid>
                    </Collapse>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TicketChoose;
