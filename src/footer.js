import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React from "react";
import shawl from "../public/assets/logo.png";
import Footerlink from "./Components/footerLink";
import Footertopimg from "./Components/footerTopImg";
import {footerLinkData} from "./Data/footerLinkData";
import {footerTopImgData} from "./Data/fotterTopImgData";

function footer() {
    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{backgroundColor: "white", marginTop: {md: 10, xs: 5}}}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                lg={8.65}
                md={11.5}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        marginTop: 1,
                        paddingTop: 5,
                        paddingBottom: 8,
                        borderBottom: 1, borderColor: '#e5e5e5'
                    }}

                >
                    {footerTopImgData.map((item) => {
                        return <Footertopimg {...item} />;
                    })}
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        borderBottom: 2,
                    }}
                >
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid
                            container
                            md={6}
                            justifyContent="space-between"
                            alignItems="flex-start"
                            sx={{
                                fontSize: 14,
                                marginBottom: 10,
                                display: {xs: 'none', md: 'flex', xl: 'flex', lg: 'flex'}
                            }}
                        >
                            {footerLinkData.map((item) => {
                                return <Footerlink {...item} />;
                            })}
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            md={6}
                            sx={{
                                direction: "ltr",
                                marginTop: 5,
                                display: {xs: 'none', md: 'flex', xl: 'flex', lg: 'flex'}
                            }}
                        >
                            <Grid md={12}>
                                <Image src={shawl} width="189px" height="30px"/>
                            </Grid>
                            <Grid md={12} sx={{lineHeight: 0.75, marginTop: 1}}>
                                <p>
                                    Customer Support:&ensp; +1 (800) 555-1234
                                </p>
                                <p>
                                    Sales Office: 123 Main Street, New York, NY 10001
                                </p>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                borderTop: 1, borderColor: '#e5e5e5',
                                paddingTop: 2,
                                fontSize: 12,
                                paddingBottom: 5,
                                color: "black",
                            }}

                        >
                            <Grid container direction="row-reverse"
                                  justifyContent="center"
                                  alignItems="center"
                                  md={7} xs={11.5}>
                                <Typography sx={{fontSize: '12px', textAlign: 'center', marginTop: 1}}>
                                    All rights reserved to Zenith Travels (website and mobile applications). (Version
                                    1.72.0)
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                md={5} xs={11.5}
                                direction="row-reverse"
                                justifyContent="center"
                                alignItems="center"
                                sx={{opacity: 0.5, marginTop: 1}}
                            >
                                <LinkedInIcon sx={{fontSize: 30}}/>
                                <InstagramIcon sx={{fontSize: 30, marginLeft: 2.5}}/>
                                <TwitterIcon sx={{fontSize: 30, marginLeft: 2.5}}/>
                                <YouTubeIcon sx={{fontSize: 30, marginLeft: 2.5}}/>
                                <TelegramIcon sx={{fontSize: 30, marginLeft: 2.5}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default footer;
