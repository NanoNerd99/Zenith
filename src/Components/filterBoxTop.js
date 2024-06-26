import React from 'react';
import { Grid } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { test } from '../Data/test';

function FilterBoxTop() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (

    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: '64px', width: '835px', marginRight: 1, marginBottom: 2, bgcolor: 'background.paper', }}
    > 
    
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {test.map((item,index) => {
                    return (
                         <Tab key={index} label={item} /> 
                    )
                })}
      </Tabs>
  
    </Grid>
  )
}

export default FilterBoxTop