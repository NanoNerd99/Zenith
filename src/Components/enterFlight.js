import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const city = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego"
];

export default function EnterFlight() {

  const [value, setValue] = React.useState(dayjs(new Date()));
  const [value2, setValue2] = React.useState(dayjs(new Date()));

  return (
      <Grid container direction="row"
            justifyContent="center"
            alignItems="center" spacing={0.5}
      >
        <Grid
            item
            xs={11.7}
            sx={{ borderRadius: 10, marginBottom: 2, paddingRight: { lg: 5.5, xs: 2 }, paddingLeft: { lg: 5.5, xs: 2 } }}
        >
          <Button href="#text-buttons" sx={{ borderRadius: "25%" }}>
            One Way
            <KeyboardArrowDownIcon />
          </Button>
        </Grid>
        <Grid item md={2.5} xs={10} sx={{ marginTop: 2 }}>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={city}
              sx={{ width: 'auto', borderTopRightRadius: "100%" }}
              renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <LocationOnIcon />
                    {option}
                  </Box>
              )}
              renderInput={(params) => (
                  <TextField {...params} label="Origin (City)" />
              )}
          />
        </Grid>
        <Grid item md={2.5} xs={10} sx={{ marginTop: 2 }}>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={city}
              sx={{ width: 'auto', borderTopRightRadius: "100%" }}
              renderOption={(props, option) => (
                  <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <LocationOnIcon />
                    {option}
                  </Box>
              )}
              renderInput={(params) => (
                  <TextField {...params} label="Destination (City)" />
              )}
          />
        </Grid>
        <Grid item md={2} xs={10} sx={{ marginTop: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Departure Date"
                    mask="____/__/__"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField sx={{ width: { xs: '100%', md: 'auto' } }} {...params} />}
                />
            </LocalizationProvider>
        </Grid>
        <Grid item md={2} xs={10} sx={{ marginTop: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Return Date"
                    mask="____/__/__"
                    value={value2}
                    onChange={(newValue2) => setValue2(newValue2)}
                    renderInput={(params) => <TextField sx={{ width: { xs: '100%', md: 'auto' } }} {...params} />}
                />
            </LocalizationProvider>
        </Grid>
        <Grid justifyContent="center" item md={2} xs={10} sx={{ marginTop: 2 }}>
          <Button variant="main" sx={{ textTransform :"none"}} href="/flights">Search</Button>
        </Grid>
      </Grid>
  );
}
