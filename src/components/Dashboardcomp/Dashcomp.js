import React,{Component} from 'react';
import Dashcomstyles from './Dashcomp.style';
import { withStyles } from '@mui/styles';
import{Grid, ListItem, Button} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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


class Dashboardcomp extends Component {
constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }


  render(){
    
    const { classes } = this.props;
  return (
    <div className={classes.main}>
        <div className={classes.bodydata}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <div className={classes.griditem}>
                <ListItem>
                    <ListItemText>
                        <Typography variant='h6' className={classes.itemtitle}>Today</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <div className={classes.chartContainer}>
                        <BarChart width={700} height={155} data={data}>
                            <XAxis dataKey="month" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="thisyear" stackId="stack" fill="rgb(99, 102, 241)" barSize={20}/>
                            <Bar dataKey="lastyear" stackId="stack" fill="rgba(235, 238, 254, 0.85)" barSize={20} />
                        </BarChart>
                    </div>
                </ListItem>
                </div>
                   
            </Grid>
            <Grid item xs={4} >
                <div className={classes.griditem}>
                <ListItem className={classes.listitem}>
                    <ListItemText>
                        <Typography variant='h6' className={classes.itemtitle}>Recent Deposits</Typography>
                        <Typography variant='h6' className={classes.itemtext}>$3,024.00</Typography>
                        <Typography variant='caption' className={classes.itemcont}>on 15 March, 2019</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Button variant="text" className={classes.btn}>
                            <Typography className={classes.btntext}>View balance</Typography>
                        </Button>
                    </ListItemText>
                </ListItem>
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <div className={classes.griditem}>
                    <ListItem>
                        <ListItemText>
                            <Typography variant='h6' className={classes.itemtitle}>Recent Orders</Typography>
                        </ListItemText>
                    </ListItem>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableheader}>Date</TableCell>
                                <TableCell className={classes.tableheader}>Name</TableCell>
                                <TableCell className={classes.tableheader}>Ship To</TableCell>
                                <TableCell className={classes.tableheader}>Payment Method</TableCell>
                                <TableCell className={classes.tableheader}>Sale Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>16 Mar, 2019</TableCell>
                                <TableCell>Elvis Presley</TableCell>
                                <TableCell>Tupelo, MS</TableCell>
                                <TableCell >VISA ⠀•••• 3719</TableCell>
                                <TableCell>$312.44</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>16 Mar, 2019</TableCell>
                                <TableCell>Elvis Presley</TableCell>
                                <TableCell>Tupelo, MS</TableCell>
                                <TableCell >VISA ⠀•••• 3719</TableCell>
                                <TableCell>$312.44</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>16 Mar, 2019</TableCell>
                                <TableCell>Elvis Presley</TableCell>
                                <TableCell>Tupelo, MS</TableCell>
                                <TableCell >VISA ⠀•••• 3719</TableCell>
                                <TableCell>$312.44</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>16 Mar, 2019</TableCell>
                                <TableCell>Elvis Presley</TableCell>
                                <TableCell>Tupelo, MS</TableCell>
                                <TableCell >VISA ⠀•••• 3719</TableCell>
                                <TableCell>$312.44</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>16 Mar, 2019</TableCell>
                                <TableCell>Elvis Presley</TableCell>
                                <TableCell>Tupelo, MS</TableCell>
                                <TableCell >VISA ⠀•••• 3719</TableCell>
                                <TableCell>$312.44</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableBody>
                            <Button variant="text"className={`${classes.btn} ${classes.tablebtn}`}>
                                <Typography className={classes.btntext}>See more orders</Typography>
                            </Button>
                        </TableBody>
                    </Table>
                </div>
            </Grid>
        </Grid>
        <div className={classes.bodyfooter}>
                <Typography>Copyright © <a href="https://mui.com/">Your Website</a> 2023</Typography>
        </div>
        </div>
        
    </div>
   
  );
}
}
export default withStyles(
    (theme) => ({
      ...Dashcomstyles(theme),
    }),
)(Dashboardcomp);