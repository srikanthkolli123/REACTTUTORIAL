import React, { Component } from 'react';
import ordersstyle from './Orderscomp.style';
import { withStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import { Box, Grid, Icon, Typography, Button, ListItemText } from '@mui/material';
import { Avatar, ListItem } from '@mui/material';
import ticklogo from '../../Assets/iconly-glass-tick.svg';
import AddIcon from '@mui/icons-material/Add';
import infologo from '../../Assets/iconly-glass-info.svg';
import paperlogo from '../../Assets/iconly-glass-paper.svg';
import personlogo from '../../Assets/person-standing.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import nextlogo from '../../Assets/next-tip.svg';
import ReplayIcon from '@mui/icons-material/Replay';
import antoniologo from '../../Assets/avatar-alcides-antonio.png';
import marcuslogo from '../../Assets/avatar-marcus-finn.png';
import carsonlogo from '../../Assets/avatar-carson-darrin.png';
import franlogo from '../../Assets/avatar-fran-perez.png';
import jielogo from '../../Assets/avatar-jie-yan-song.png';
import { BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const data = [
    { month: 'Jan', thisyear: 40 , lastyear: 26 },
    { month: 'Febr', thisyear: 37 , lastyear: 22 },
    { month: 'March', thisyear: 41 , lastyear: 19 },
    { month: 'April', thisyear: 42 , lastyear: 22 },
    { month: 'May', thisyear: 45 , lastyear: 24 },
    { month: 'June', thisyear: 42 , lastyear: 28},
    { month: 'July', thisyear: 36 , lastyear: 23},
    { month: 'Agust', thisyear: 45 , lastyear: 25},
    { month: 'Sep', thisyear: 40 , lastyear: 24},
    { month: 'Oct', thisyear: 44 , lastyear: 21},
    { month: 'Nov', thisyear: 38 , lastyear: 17},
    { month: 'Dec', thisyear: 41 , lastyear: 19},
];

class Orders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
            <div className={classes.oredrspage}>   
                <Grid className={classes.header}>              
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>Orders</Typography>
                    <Button variant="contained" className={classes.ordersbtn}><AddIcon />New Orders</Button>
                </Grid> 
            </div>

                <Box className={classes.orderscomp}>

                    <Grid container spacing={3}>
                        
                        <Grid item xs={4} className={classes.gridsec}>
                            <div className='gridsecInner'>
                                <Grid className={classes.griditem}>
                                    <Avatar alt="Logo" variant="square" src={ticklogo} />

                                    <Box className={classes.list}>
                                        <Typography variant="caption" className={classes.title}>Done tasks</Typography>
                                        <Typography variant="h4" className={classes.caption}>31</Typography>
                                    </Box>
                                </Grid>
                                <Divider />
                                <Grid>
                                    <ListItem>
                                        <Button className={classes.tasktext}>
                                            See all tasks <ArrowRightAltIcon className={classes.righticon} />
                                        </Button>
                                    </ListItem>

                                </Grid>
                            </div>
                        </Grid>
                        
                        <Grid item xs={4} className={classes.gridsec}>
                            <div className='gridsecInner'>
                                <Grid className={classes.griditem}>
                                    <Avatar alt="Logo" variant="square" src={infologo} />

                                    <Box className={classes.list}>
                                        <Typography variant="caption" className={classes.title}>Pending Issues</Typography>
                                        <Typography variant="h4" className={classes.caption}>12</Typography>
                                    </Box>
                                </Grid>
                                <Divider />
                                <Grid>
                                    <ListItem>
                                        <Button className={classes.tasktext}>
                                            See all issues<ArrowRightAltIcon className={classes.righticon} />
                                        </Button>
                                    </ListItem>

                                </Grid>
                            </div>
                        </Grid>
                       
                        <Grid item xs={4} className={classes.gridsec}>
                            <div className='gridsecInner'>
                                <Grid className={classes.griditem}>
                                    <Avatar alt="Logo" variant="square" src={paperlogo} />

                                    <Box className={classes.list}>
                                        <Typography variant="caption" className={classes.title}>Open Tickets</Typography>
                                        <Typography variant="h4" className={classes.caption}>5</Typography>
                                    </Box>
                                </Grid>
                                <Divider />
                                <Grid>
                                    <ListItem>
                                        <Button className={classes.tasktext}>
                                            See all tickets<ArrowRightAltIcon className={classes.righticon} />
                                        </Button>
                                    </ListItem>

                                </Grid>
                            </div>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={7} className={classes.gridsec}>
                            <Grid className={classes.innersec}>

                                <Avatar alt="Logo" variant="square" src={personlogo} className={classes.personlogo} />

                                <Grid className={classes.innertext}>
                                    <Grid>
                                        <Box className={classes.firsttxt}>
                                            <Typography variant="caption" className={classes.titlecaption}>
                                                NEW V6 UPDATE
                                            </Typography>
                                        </Box>
                                        <Box className={classes.secondtxt}>
                                            <Typography variant="body1" className={classes.variantbody}>
                                                New update available!
                                            </Typography>
                                        </Box>
                                        <Box className={classes.thirdtxt}>
                                            <Typography variant='subtitle1' className={classes.subtitle}>
                                                Your favorite template has a new trendy look, more <br></br>customization options, screens & more.
                                            </Typography>
                                        </Box>
                                        <Box className={classes.innerbtn}>
                                            <Button >
                                                <SettingsIcon className={classes.seticon} />
                                                <Typography variant="caption" className={classes.settingdbtn}>
                                                    Open App Settings
                                                </Typography>
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} className={classes.gridsec}>
                            <Grid className={classes.nexttext}>

                                <Avatar alt="Logo" variant="square" src={nextlogo} className={classes.nextlogo} />

                                <Grid>
                                    <div>
                                        <ul className={classes.listdots}>
                                            <li>
                                                <Button className={classes.dot}></Button>
                                            </li>
                                            <li>
                                                <Button className={classes.dot}></Button>
                                            </li>
                                            <li>
                                                <Button className={classes.dot}></Button>
                                            </li>
                                        </ul>
                                    </div>
                                    <Box className={classes.secondtxt}>
                                        <Typography variant="body1" className={classes.designtxt}>
                                            New Fresh Design.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1' className={classes.tiptxt}>
                                            Your favorite template has a new trendy look, <br></br>more customization options, screens & more.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={7} className={classes.gridsec}>
                            <Grid className={classes.inboxgrid}>
                                <Grid className={classes.inboxcont}>
                                    <div className={classes.barchartheader}>
                                        <ListItem>
                                        <ListItemText>
                                            <Typography variant='h6' className={classes.headertitle}>Subscription Usage</Typography>
                                            <Typography variant="body1" className={classes.logodata}>Based on the selected period</Typography>
                                        </ListItemText>
                                        </ListItem>
                                        <ListItem className={classes.chartyear}>
                                            <Typography className={classes.tableheader}>Year</Typography>
                                            <Typography className={classes.tableheader}>Month</Typography>
                                            <Typography className={classes.tableheader}>Week</Typography>
                                        </ListItem>
                                    </div>
                                    <div className={classes.chartContainer}>
                                    <BarChart width={640} height={300} data={data}>
                                        <XAxis dataKey="month" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="thisyear" stackId="stack" fill="rgb(99, 102, 241)" barSize={20}/>
                                        <Bar dataKey="lastyear" stackId="stack" fill="rgba(235, 238, 254, 0.85)" barSize={20} />
                                    </BarChart>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} className={classes.gridsec}>
                            <Grid className={classes.inboxgrid}>
                                <Grid className={classes.inboxcont}>
                                    <Grid>
                                        <Box className={classes.inboxitems}>
                                            <ListItem className={classes.inboxheader}>
                                                <Typography variant='h6' className={classes.headertitle}>Inbox</Typography>
                                                <Icon>
                                                    <ReplayIcon />
                                                </Icon>
                                            </ListItem>
                                            <div className={classes.content}>
                                                <ListItem className={classes.inboxtext}>
                                                    <Avatar alt="Logo" variant="square" src={antoniologo} className={classes.inboxlogo} />
                                                    <ListItemText className={classes.inboxdata}>
                                                        <Typography variant="h6" className={classes.logoname}>Alcides Antonio</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Hello, we spoke earlier on the phone</Typography>
                                                    </ListItemText>
                                                    <Typography>2m ago</Typography>
                                                </ListItem>

                                                <ListItem className={classes.inboxtext}>
                                                    <Avatar alt="Logo" variant="square" src={marcuslogo} className={classes.inboxlogo} />
                                                    <ListItemText className={classes.inboxdata}>
                                                        <Typography variant="h6" className={classes.logoname}>Marcus Finn</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Is the job still available?</Typography>
                                                    </ListItemText>
                                                    <Typography>2m ago</Typography>
                                                </ListItem>

                                                <ListItem className={classes.inboxtext}>
                                                    <Avatar alt="Logo" variant="square" src={carsonlogo} className={classes.inboxlogo} />
                                                    <ListItemText className={classes.inboxdata}>
                                                        <Typography variant="h6" className={classes.logoname}>Carson Darrin</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>What is a screening task? I’d like to</Typography>
                                                    </ListItemText>
                                                    <Typography>2m ago</Typography>
                                                </ListItem>

                                                <ListItem className={classes.inboxtext}>
                                                    <Avatar alt="Logo" variant="square" src={franlogo} className={classes.inboxlogo} />
                                                    <ListItemText className={classes.inboxdata}>
                                                        <Typography variant="h6" className={classes.logoname}>Fran Perez</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Still waiting for feedback</Typography>
                                                    </ListItemText>
                                                    <Typography>2m ago</Typography>
                                                </ListItem>

                                                <ListItem className={classes.inboxtext}>
                                                    <Avatar alt="Logo" variant="square" src={jielogo} className={classes.inboxlogo} />
                                                    <ListItemText className={classes.inboxdata}>
                                                        <Typography variant="h6" className={classes.logoname}>Jie Yan Song</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Need more information about campaigns</Typography>
                                                    </ListItemText>
                                                    <Typography>2m ago</Typography>
                                                </ListItem>
                                            </div>
                                            <Divider />

                                            <ListItem>
                                                <Button className={classes.tasktext}>
                                                    Go to chat <ArrowRightAltIcon className={classes.righticon} />
                                                </Button>
                                            </ListItem>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={7} className={classes.gridsec}>
                            <Grid className={classes.inboxgrid}>
                                <Grid className={classes.inboxcont}>
                                    <Grid>
                                        <Box>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant='h6' className={classes.headertitle}>Latest Transactions</Typography>
                                                    <Typography variant="body1" className={classes.logodata}>Based on the selected period</Typography>
                                                </ListItemText>
                                            </ListItem>

                                            <ListItem>
                                                <Typography className={classes.tableheader}>All</Typography>
                                                <Typography className={classes.tableheader}>Confirmed</Typography>
                                                <Typography className={classes.tableheader}>Pending</Typography>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.tabledata}>
                                                <Box className={classes.firsttransaction}>
                                                    <ListItemText className={classes.upcomingevent}>
                                                        <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                        <Typography variant="body1" className={classes.eventdate}>22</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.secondtransaction}>
                                                    <ListItemText >
                                                        <Typography variant="h6" className={classes.logoname}>Devias</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Payment Received</Typography>
                                                    </ListItemText>
                                                </Box>

                                                <Box className={classes.thirdtransaction}>
                                                    <ListItemText className={classes.payment}>
                                                        <Typography className={classes.paymentstatus}>ON_HOLD</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.fourthtransaction}>
                                                    <Typography className={classes.paymentamount}>
                                                        +$25,000.00
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.tabledata}>
                                                <Box className={classes.firsttransaction} >
                                                    <ListItemText className={classes.upcomingevent}>
                                                        <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                        <Typography variant="body1" className={classes.eventdate}>21</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.secondtransaction}>
                                                    <ListItemText>
                                                        <Typography variant="h6" className={classes.logoname}>Zimbru</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Payment Sent</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.thirdtransaction}>
                                                    <ListItemText className={classes.secondpayment}>
                                                        <Typography className={classes.paymentstatus}>CONFIRMED</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.fourthtransaction}>
                                                    <Typography className={classes.secondpaymentamount}>
                                                        +$6,843.00
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.tabledata}>
                                                <Box className={classes.firsttransaction}>
                                                    <ListItemText className={classes.upcomingevent}>
                                                        <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                        <Typography variant="body1" className={classes.eventdate}>21</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.secondtransaction}>
                                                    <ListItemText>
                                                        <Typography variant="h6" className={classes.logoname}>Vertical Jelly</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Payment Sent</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.thirdtransaction}>
                                                    <ListItemText className={classes.thirdpayment}>
                                                        <Typography className={classes.paymentstatus}>FAILED</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.fourthtransaction}>
                                                    <Typography className={classes.secondpaymentamount}>
                                                        +$91,823.00
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.tabledata}>
                                                <Box className={classes.firsttransaction}>
                                                    <ListItemText className={classes.upcomingevent}>
                                                        <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                        <Typography variant="body1" className={classes.eventdate}>19</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.secondtransaction}>
                                                    <ListItemText>
                                                        <Typography variant="h6" className={classes.logoname}>Devias</Typography>
                                                        <Typography variant="body1" className={classes.logodata}>Payment Received</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.thirdtransaction}>
                                                    <ListItemText className={classes.secondpayment}>
                                                        <Typography className={classes.paymentstatus}>CONFIRMED</Typography>
                                                    </ListItemText>
                                                </Box>
                                                <Box className={classes.fourthtransaction}>
                                                    <Typography className={classes.paymentamount}>
                                                        +$49,550.00
                                                    </Typography>
                                                </Box>
                                            </ListItem>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} className={classes.gridsec}>
                            <Grid className={classes.inboxgrid}>
                                <Grid className={classes.inboxcont}>
                                    
                                        <Box className={classes.inboxitems}>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant='h6' className={classes.headertitle}>Upcoming events</Typography>
                                                    <Typography variant="body1" className={classes.logodata}>Based on the linked bank accounts</Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <div className={classes.content}>
                                                <ListItem className={classes.inboxtext}>
                                                    <Box className={classes.eventbox}>
                                                        <ListItemText className={classes.upcomingevent}>
                                                            <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                            <Typography variant="body1" className={classes.eventdate}>23</Typography>
                                                        </ListItemText>
                                                        <ListItemText className={classes.inboxdata}>
                                                            <Typography variant="h6" className={classes.logoname}>Meeting with Partners</Typography>
                                                            <Typography variant="body1" className={classes.logodata}>17:00 to 18:00</Typography>
                                                        </ListItemText>
                                                    </Box>
                                                    <Typography>
                                                        <Button>
                                                            <CalendarTodayIcon />
                                                        </Button>
                                                    </Typography>
                                                </ListItem>

                                                <ListItem className={classes.inboxtext}>
                                                    <Box className={classes.eventbox}>
                                                        <ListItemText className={classes.upcomingevent}>
                                                            <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                            <Typography variant="body1" className={classes.eventdate}>26</Typography>
                                                        </ListItemText>
                                                        <ListItemText className={classes.inboxdata}>
                                                            <Typography variant="h6" className={classes.logoname}>Weekly Meeting</Typography>
                                                            <Typography variant="body1" className={classes.logodata}>17:00 to 18:00</Typography>
                                                        </ListItemText>
                                                    </Box>
                                                    <Typography>
                                                        <Button>
                                                            <CalendarTodayIcon />
                                                        </Button>
                                                    </Typography>
                                                </ListItem>

                                                <ListItem className={classes.inboxtext}>
                                                    <Box className={classes.eventbox}>
                                                        <ListItemText className={classes.upcomingevent}>
                                                            <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                            <Typography variant="body1" className={classes.eventdate}>26</Typography>
                                                        </ListItemText>
                                                        <ListItemText className={classes.inboxdata}>
                                                            <Typography variant="h6" className={classes.logoname}>Weekly Meetinig</Typography>
                                                            <Typography variant="body1" className={classes.logodata}>17:00 to 18:00</Typography>
                                                        </ListItemText>
                                                    </Box>
                                                    <Typography>
                                                        <Button>
                                                            <CalendarTodayIcon />
                                                        </Button>
                                                    </Typography>
                                                </ListItem>

                                                <ListItem className={classes.inboxtext}>
                                                    <Box className={classes.eventbox}>
                                                        <ListItemText className={classes.upcomingevent}>
                                                            <Typography variant="h6" className={classes.eventmonth}>JUN</Typography>
                                                            <Typography variant="body1" className={classes.eventdate}>29</Typography>
                                                        </ListItemText>
                                                        <ListItemText className={classes.inboxdata}>
                                                            <Typography variant="h6" className={classes.logoname}>Weekly Meeting</Typography>
                                                            <Typography variant="body1" className={classes.logodata}>17:00 to 18:00</Typography>
                                                        </ListItemText>
                                                    </Box>
                                                    <Typography>
                                                        <Button>
                                                            <CalendarTodayIcon />
                                                        </Button>
                                                    </Typography>
                                                </ListItem>
                                            </div>

                                            <Divider />

                                            <ListItem>
                                                <Button className={classes.tasktext}>
                                                    See all <ArrowRightAltIcon className={classes.righticon} />
                                                </Button>
                                            </ListItem>

                                        </Box>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>

                </Box>
            </div>
        )
    }
}

export default withStyles(
    (theme) => ({
        ...ordersstyle(theme),
    }),
)(Orders);