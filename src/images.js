import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import airplane from "../public/assets/53031.png";

function images() {

  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ zIndex: "modal", maxHeight: '600px' }}
    >
      <Image src={airplane} alt="landing page image" sizes="0" />
    </Grid>
  );
}

export default images;
