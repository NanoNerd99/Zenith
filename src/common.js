import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import QrCode from "../public/assets/rq.png";
import Mobile from "../public/assets/travel-concept-with-passport-tickets.png";

function Common() {
  return (
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
      >
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: "white",
              marginTop: 5,
              borderRadius: 2,
              paddingRight: 5,
              paddingLeft: 5,
            }}
            lg={8.6}
            xs={11}
        >
          <Grid item xl={1.75} lg={1.75} md={2} xs={12} sx={{ display: { xs: 'none', md: 'block' , xl: 'block', lg: 'block' }, marginTop:2 , marginBottom: 2}}>
            <img src={QrCode} alt="QR Code" />
          </Grid>
          <Grid item xl={5} lg={5} md={4} xs={12} sx={{ marginRight: 5 , marginTop:2 , marginBottom: 2}}>
            <Typography variant="h4" sx={{ fontWeight: "900" }}>Zenith App</Typography>
            <Typography sx={{ lineHeight: 4 }}>Travel faster and safer</Typography>
            <Link href="#" underline="none">
              View download links
              <ArrowBackIosNewOutlinedIcon sx={{ paddingTop: 1.5 }} />
            </Link>
            <Grid container sx={{ fontSize: 12, marginTop: 2, opacity: 0.5 }}>
              <Typography>
                <AppleIcon sx={{ fontSize: 20 }} />
                <AndroidIcon sx={{ fontSize: 20 }} />
                &ensp;Available for Android and iOS
              </Typography>
            </Grid>
          </Grid>
          <Grid item xl={3.5} lg={3.5} md={12} xs={12}>
            <Image src={Mobile} alt="Mobile App" />
          </Grid>
        </Grid>
      </Grid>
  );
}

export default Common;
