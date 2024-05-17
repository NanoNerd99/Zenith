import React from "react";
import banner1 from "../public/2148666303.jpg";
import banner2 from "../public/128391.jpg";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function imageSlider() {

    return (
        <Container
            maxWidth="xlg"
            sx={{
                width: "75%",
                marginTop: 5,
                borderRadius: 2,
                paddingRight: 5,
                paddingLeft: 5,
            }}
        >
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{marginTop: {md: 22, xs: 15}}}
            >
                <Grid Item lg={5} md={12}>
                    <Image src={banner2}/>
                </Grid>
                <Grid Item lg={5} md={12}>
                    <Image src={banner1}/>
                </Grid>


            </Grid>
        </Container>

    );
}

export default imageSlider;
