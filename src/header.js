import {isWidthDown} from "@material-ui/core/withWidth";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import Zenith from "../public/logo.png";
import HeaderButt from "./Components/headerButt";
import {headerButtData} from "./Data/headerButtData";

function header() {

    const matches = useMediaQuery('(max-width:730px)');

    if (isWidthDown("sm"), matches) {
        return (
            <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" xs={12}
                  sx={{backgroundColor: '#FCB710', width: '100%', height: '76px', position: 'fixed', zIndex: 999}}>
                <Typography sx={{fontWeight: 400, fontSize: 24, color: "black"}} href="/">Zenith.com</Typography>
            </Grid>
        )
    } else {
        return (

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}

                sx={{backgroundColor: "white", height: 'auto', padding: 0.5}}
            >
                <Box
                    component={Grid}
                    item xl={1.28} lg={1.5} md={1.75} sm={3} sx={{cursor: "pointer", m: 2}}>
                    <Link href="/">
                        <Image src={Zenith}/>
                    </Link>
                </Box>
                <Box
                    component={Grid}
                    item
                    justifyContent="center"
                    alignItems="center"
                    xl={5.5}
                    lg={7.75}
                    display={{md: "none"}}
                    sx={{display: {xs: 'none', md: 'none', xl: 'block', lg: 'block'}}}
                >
                    <Stack
                        direction="row"
                        spacing={1.2}
                        divider={<Divider orientation="vertical" flexItem/>}
                    >
                        {headerButtData.map((item) => {
                            return (
                                <HeaderButt {...item} />
                            )
                        })}

                    </Stack>
                </Box>
                <Box
                    component={Grid} item xl={2.25} lg={2.75} md={4} sm={0}
                    sx={{paddingLeft: 10, display: {xs: 'none', md: 'block', xl: 'block', lg: 'block'}}} dir="rtl">

                    <Button
                        sx={{
                            bgcolor: "background.paper",
                            color: "text.secondary",
                            textTransform :"none",
                            fontSize: 16,
                        }}
                    >
                        <SpeakerNotesOutlinedIcon sx={{marginLeft: 1}}/> Track Order
                    </Button>
                    <Button
                        sx={{
                            bgcolor: "background.paper",
                            color: "text.secondary",
                            textTransform :"none",
                            fontSize: 16,
                        }}
                    >
                        <HowToRegOutlinedIcon sx={{marginLeft: 1}}/> Sign In / Register
                    </Button>

                </Box>
            </Grid>

        );

    }


}

export default header;