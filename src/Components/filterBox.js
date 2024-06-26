import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { airlinesName } from "../Data/data.js";
import { DataFilterBox } from "../Data/dataFilterBox";
import { dataTicket } from "../Data/dataTicketKind.js";
import FilterBoxTicketSection from "./filterBoxTicketSection";
import FilterBoxTicketKind from "./filterBoxTicketKind.js";

const Expand = styled(ExpandMore)(() => ({
  fontSize: 30,
  borderRadius: 100,
  padding: 0.5,
  backgroundColor: "#F7FAFB",
  color: "#6C7680",
  "&: hover": {
    backgroundColor: "#e8f8fb",
    color: "#14a2b8",
  },
}));

const ExpandL = styled(ExpandLess)(() => ({
  fontSize: 30,
  borderRadius: 100,
  padding: 0.5,
  backgroundColor: "#F7FAFB",
  color: "#6C7680",
  "&: hover": {
    backgroundColor: "#e8f8fb",
    color: "#14a2b8",
  },
}));

const FilterBoxSlider = styled(Slider)(({ theme }) => ({
  color: "#0177DB",
  height: 1,
  margin: 5,
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    border: "2px solid gray",
    "&:hover": {
      border: "2px solid #0177DB",
    },
    "& .MuiSlider-bar": {
      height: 1,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-valueLabelOpen": {
    backgroundColor: "white",
    color: "black",
    fontSize: "13px",
    fontWeight: "900",
  },
  "& .MuiSlider-track": {
    height: 4,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 4,
  },
}));

function ValueLabelComponent(props) {

  const { children, value } = props;

  return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

function FilterBox() {

  const [open, setOpen] = React.useState([true, true, true, true, true]);

  const handleClick = (index) => {
    const test = [...open];
    test[index] = !test[index];
    setOpen(test);
  };

  const number = airlinesName.length;

  function FilterBoxComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
          {children}
        </SliderThumb>
    );
  }

  return (
      <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          sx={{
            borderRadius: 2,
            backgroundColor: "white",
            height: "auto",
            width: "298px",
            border: 1,
            borderColor: "#e5e5e5",
          }}
      >
        <Grid item>
          <List
              sx={{ width: "295px", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography
                      sx={{ fontWeight: "400", marginBottom: 2, marginTop: 2 }}
                  >
                    Results: {number}
                  </Typography>
                </ListSubheader>
              }
          >
            <Divider />

            <ListItemButton onClick={() => handleClick(0)}>
              <ListItemIcon>
                <Typography
                    sx={{ fontWeight: "900", marginTop: 1, marginBottom: 1 }}
                >
                  Departure Time
                </Typography>
              </ListItemIcon>
              <ListItemText />
              {open[0] ? (
                  <ExpandL />
              ) : (
                  <Expand />
              )}
            </ListItemButton>
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                  <FilterBoxSlider
                      components={{ Thumb: FilterBoxComponent }}
                      max={23}
                      min={6}
                      defaultValue={[0, 100]}
                      valueLabelDisplay="on"
                      sx={{ marginTop: 2.5 }}
                  />
                </ListItem>
              </List>
            </Collapse>

            <Divider />

            <ListItemButton onClick={() => handleClick(1)}>
              <ListItemIcon>
                <Typography
                    sx={{ fontWeight: "900", marginTop: 1, marginBottom: 1 }}
                >
                  Ticket Type
                </Typography>
              </ListItemIcon>
              <ListItemText />
              {open[1] ? (
                  <ExpandL />
              ) : (
                  <Expand />
              )}
            </ListItemButton>
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <FormGroup>
                    {dataTicket.map((item,index) => {
                      return <FilterBoxTicketKind key={index} label={item} />;
                    })}
                  </FormGroup>
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={() => handleClick(2)}>
              <ListItemIcon>
                <Typography
                    sx={{ fontWeight: "900", marginTop: 1, marginBottom: 1 }}
                >
                  Airlines
                </Typography>
              </ListItemIcon>
              <ListItemText />
              {open[2] ? (
                  <ExpandL />
              ) : (
                  <Expand />
              )}
            </ListItemButton>
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <FormGroup sx={{ width: "100%" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        xs={12}
                    >
                      {DataFilterBox.map((item,index) => {
                        return <FilterBoxTicketSection key={index} {...item} />;
                      })}
                    </Grid>
                  </FormGroup>
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={() => handleClick(3)}>
              <ListItemIcon>
                <Typography
                    sx={{ fontWeight: "900", marginTop: 1, marginBottom: 1 }}
                >
                  Special Offers
                </Typography>
              </ListItemIcon>
              <ListItemText />
              {open[3] ? (
                  <ExpandL />
              ) : (
                  <Expand />
              )}
            </ListItemButton>
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <FormGroup>
                    <FormControlLabel
                        control={
                          <Checkbox
                              sx={{ transform: "scale(1.2)", color: "#BBC3C9" }}
                          />
                        }
                        label="Zenith's gift to passengers of this flight"
                    />
                  </FormGroup>
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={() => handleClick(4)}>
              <ListItemIcon>
                <Typography
                    sx={{ fontWeight: "900", marginTop: 1, marginBottom: 1 }}
                >
                  Other Options
                </Typography>
              </ListItemIcon>
              <ListItemText />
              {open[4] ? (
                  <ExpandL />
              ) : (
                  <Expand />
              )}
            </ListItemButton>
            <Collapse in={open[4]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <FormGroup>
                    <FormControlLabel
                        control={
                          <Checkbox
                              sx={{ transform: "scale(1.2)", color: "#BBC3C9" }}
                          />
                        }
                        label="Show Duplicate Tickets"
                    />
                    <FormControlLabel
                        control={
                          <Checkbox
                              sx={{ transform: "scale(1.2)", color: "#BBC3C9" }}
                          />
                        }
                        label="Show Available Tickets"
                    />
                  </FormGroup>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
  );
}
export default FilterBox;