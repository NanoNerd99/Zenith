import React from 'react';
import Tab from "@mui/material/Tab";
import { useDispatch } from 'react-redux';
import { suggestion } from '../features/flight/flightFilter.js';

function Suggest(props) {

    const dispatch = useDispatch();
    const [flightSky, setFlightSky] = React.useState(false);
    let result;

    const suggestSelector = (props) => {
        if (props.item === "Zenith Suggestion") {
            result = true;
        } else {
            result = false;
        }
    };

    const handleClick = () => {
        if (!flightSky) {
            dispatch(suggestion(FilterData.suggest)); // Assuming FilterData is defined elsewhere
            setFlightSky(!flightSky);
        } else {
            dispatch(ticketFilterBack(FilterData.label)); // Assuming ticketFilterBack is defined elsewhere
            setFlightSky(!flightSky);
        }
    };

    return (
        <Tab key={props.key} value={props.value} label={props.label} />
    );
}

export default Suggest;
