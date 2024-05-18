import {isWidthDown} from "@material-ui/core/withWidth";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import Common from "../src/common.js";
import MainMenu from "../src/Components/mainMenu.js";
import MainMenuMobile from "../src/Components/mainMenuMobile.js";
import Toggle from "../src/Components/toggle.js";
import {toggleFirstPage} from "../src/Data/toggleFirstPage.js";
import Image from "../src/images.js";
import ImageSlider from "../src/imageSlider.js";
import Text from "../src/text.js";

function Index() {

    const matches = useMediaQuery('(max-width:730px)');

    return <></>

    {/*if (isWidthDown("sm"), matches) {*/}
    {/*    return (*/}
    {/*        <Grid>*/}
    {/*            <MainMenuMobile/>*/}
    {/*            <ImageSlider/>*/}
    {/*            <Common/>*/}
    {/*            <Grid container direction="row-reverse"*/}
    {/*                  justifyContent="center"*/}
    {/*                  alignItems="center">*/}
    {/*                <Grid container direction="row-reverse"*/}
    {/*                      justifyContent="flex-end"*/}
    {/*                      alignItems="center" xl={10.3}*/}
    {/*                      lg={10.3}*/}
    {/*                      xs={11.5}>*/}
    //                     <Typography sx={{marginTop: 5, fontWeight: '900', fontSize: '18px'}}>Your Questions</Typography>
    //                 </Grid>
    //
    //             </Grid>
    //             {toggleFirstPage.map((item, index) => {
    //                 return (
    //                     <Toggle key={index} {...item} />
    //                 )
    //             })}
    //             <Text/>
    //         </Grid>
    //     )
    //
    // } else {
    //     return (
    //         <div>
    //             <Image alt="landing page image"/>
    //             <MainMenu/>
    //             <ImageSlider/>
    //             <Common/>
    //             <Grid container direction="row-reverse"
    //                   justifyContent="center"
    //                   alignItems="center">
    //                 <Grid container direction="row-reverse"
    //                       justifyContent="flex-end"
    //                       alignItems="center" xl={9}
    //                       lg={9}
    //                       xs={10}>
    //                     <Typography sx={{marginTop: 5, fontWeight: '900', fontSize: '22px'}}>Your Questions</Typography>
    //
    //                 </Grid>
    //
    //             </Grid>
    //             {toggleFirstPage.map((item, index) => {
    //                 return (
    //                     <Toggle key={index} {...item} />
    //                 )
    //             })}
    //             <Text/>
    //         </div>
    //     )
    // }
}

export default Index;
