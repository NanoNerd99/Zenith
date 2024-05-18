import React from "react";
import Image from "next/image";
import baggage from "../public/assets/top-view-passport-tickets-arrangement.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material";

function text() {
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                marginTop: 5,
            }}
        >
            <Grid xl={4} lg={4} xs={11}>
                <Typography variant="h4" mb={1}>Airplane Ticket</Typography>
                <Typography lineHeight="2" fontSize={15}>
                    Zenith Travel Company, which started its activities in 2014, after several years of activity in the
                    field of online ticket sales, was able to rank first in this field and achieve 97.2% customer
                    satisfaction by providing quality services and 24-hour support. Rest assured that if you trust
                    Zenith for purchasing international plane tickets, you will not regret it.
                </Typography>
                <Typography variant="h4" mb={1} mt={3}>
                    Advantages of Buying Airplane Tickets from Zenith
                </Typography>
                <Typography lineHeight="2" fontSize={15}>
                    By purchasing airplane tickets from Zenith, you are dealing with a reliable and reputable system
                    that meets all your needs. To buy airplane tickets online at Zenith, simply select your origin,
                    destination, and flight date. After clicking on the search button, a list of airplane ticket prices
                    to your desired destination will appear. In this list, you have multiple choices. To narrow down the
                    options for purchasing airplane tickets, Zenith provides you with various tools.
                </Typography>
            </Grid>
            <Grid xl={1} lg={1} md={0} xs={0} sx={{display: {xs: 'none', md: 'none', xl: 'block', lg: 'block'}}}>
            </Grid>
            <Grid xl={3.6} lg={3.6} md={0} xs={0} sx={{display: {xs: 'none', md: 'none', xl: 'block', lg: 'block'}}}>
                <Image src={baggage}/>
            </Grid>
            <Grid xl={8.6} lg={8.6} md={11.5} xs={11.5}>
                <Typography variant="subtitle1" fontSize={15}>
                    One of the very useful and practical tools for buying airplane tickets online is the price calendar.
                    With the price calendar, you can see the minimum and maximum prices of flight tickets on the days
                    before and after that date. If you are not insistent on buying an airplane ticket on a specific day,
                    this option helps you to get the ticket price for you with a more reasonable amount.
                </Typography>
                <Typography variant="subtitle1" fontSize={15}>
                    Furthermore, using the filters on the side of the page, you can select your desired airline. Also,
                    you can enable charter or scheduled airplane tickets to see only one of these two types of tickets.
                    International airplane tickets, flight class, and flight time are other options that, by selecting
                    them, the number of tickets becomes limited and booking airplane tickets becomes easier for you.
                </Typography>
                <Typography variant="subtitle1" fontSize={15}>
                    You can use a Shetab card to pay the cost. After payment, online purchase of airplane tickets is
                    successful and the ticket will be sent to your email. Also, throughout all these stages, Zenith
                    support is by your side to answer you 24 hours a day, whenever you have a question or problem.
                </Typography>
                <Grid xl={12}>
                    <Typography variant="h4" mt={3} mb={1}>
                        Possibility of Refunding Airplane Tickets
                    </Typography>
                    <Typography lineHeight="2" fontSize={15}>
                        Another feature of Zenith is online refunding of airplane tickets (ticket cancellation). If your
                        travel plans change after booking your airplane ticket, you can easily cancel your domestic
                        flight ticket in accordance with the domestic flight cancellation rules. After the refund, your
                        money will be returned to your account as soon as possible. You can buy airplane tickets online
                        from Zenith using your mobile phone, personal computer, or tablet. Zenith is user-friendly on
                        all these devices, and you will experience easy shopping. Also, the possibility of installing
                        and using the Zenith app for Android and iPhone is available.
                    </Typography>
                    <Typography variant='h4' mt={3} mb={1}>
                        Booking Airplane Tickets from Reputable Airlines
                    </Typography>
                    <Typography lineHeight="2" fontSize={15}>
                        You have the right to choose among various airlines for buying airplane tickets, and you can
                        purchase your domestic flight ticket from airlines such as Mahan, Zagros, Kish Air, Qeshm Air,
                        Aseman, Caspian, Taban, Varesh, or Meraj.
                    </Typography>
                    <Typography variant="subtitle1" fontSize={15}>
                        Each of these airlines has its own features and specifications. Some have more facilities and
                        amenities, and others offer airplane tickets at a more reasonable price. When you see the list
                        of tickets for all these airlines at Zenith, you can choose from them.
                    </Typography>
                    <Typography variant='h4' mt={3} mb={1}>
                        Zenith: Rank One in Online Ticket Sales
                    </Typography>
                    <Typography lineHeight="2" fontSize={15}>
                        Zenith has gained a lot of credibility among its customers over the years. According to a
                        survey, 97.2% of Zenith customers were satisfied with the services of this system and
                        recommended its use to their friends and acquaintances. The speed and simplicity of buying
                        airplane tickets online, credibility and reputation, online refunding of airplane tickets, and
                        24-hour support every day of the week have made Zenith rank first in ticket sales.
                    </Typography>
                    <Typography variant="subtitle1" fontSize={15}>
                        By booking airplane tickets at Zenith, you will have a comfortable and hassle-free trip.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default text;
