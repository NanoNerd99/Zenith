import React from 'react'
import Button from "@mui/material/Button";

function headerButt(props) {
    return (
        <Button
            sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                textTransform :"none",
                fontSize: 16,
            }}
        >
            {props.title}
            {props.icon}
        </Button>
    )
}

export default headerButt