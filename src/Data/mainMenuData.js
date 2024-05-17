import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

export const mainMenuData = [
    {
        label: "Domestic Flights",
        value: "1",
        icon: <FlightLandOutlinedIcon sx={{ fontSize: {lg: 30, md:30, xs: 30} }} />,
    },
    {
        label: "International Flights",
        value: "2",
        icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: {lg: 30, md:30, xs: 30} }} />,
    },
    {
        label: "Train",
        value: "3",
        icon: <DirectionsSubwayFilledOutlinedIcon sx={{ fontSize: {lg: 30, md:30, xs: 30} }} />,
    },
    {
        label: "Bus",
        value: "4",
        icon: <DirectionsBusFilledOutlinedIcon sx={{ fontSize: {lg: 30, md:30, xs: 30} }} />,
    },
    {
        label: "Tour",
        value: "5",
        icon: <TourOutlinedIcon sx={{ fontSize: {lg: 30, md:30, xs: 30} }} />,
    },
    {
        label: "Hotel",
        value: "6",
        icon: <KingBedOutlinedIcon sx={{ fontSize: {lg: 30, md:30, xs: 30} }} />,
    },
    {
        label: "Accommodation",
        value: "7",
        icon: <MeetingRoomOutlinedIcon sx={{ fontSize: {lg: 30, md:30, xs: 30} }} />,
    },
];
