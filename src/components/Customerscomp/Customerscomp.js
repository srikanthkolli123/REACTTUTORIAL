import React, { Component } from 'react'
import customersStyle from './Customerscomp.style';
import { withStyles } from '@mui/styles';
import {Box,Grid,Icon,Typography,Button,List,ListItem,ListItemText,Divider} from '@mui/material';
import {Table,TableBody,TableCell,TableHead,TableRow,Checkbox,CardActions} from '@mui/material';
import {InputBase,Avatar,Switch,Chip,Stack,MenuItem,FormControl,Select,TextField} from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import carsonimg from '../../Assets/avatar-carson-darrin.png';
import franperezimg from '../../Assets/avatar-fran-perez.png';
import jieyanimg from '../../Assets/avatar-jie-yan-song.png';
import antonioimg from '../../Assets/avatar-alcides-antonio.png';
import marcusimg from '../../Assets/avatar-marcus-finn.png';

class Customerscomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: true,
          openPage: 'CustomersPage',
          Email: '',
          selectedCustomerId: null,
          searchQuery: '',
        };
      }

      handleArrowForwardClick = (customerId) => {
        this.setState({ openPage: 'customersinnerpage' })
        this.setState({ selectedCustomerId: customerId });
      };
    
      handleWestIconClick = () => {
        this.setState({ openPage: 'CustomersPage' });
      };
    
      handleEditButtonClick = (customerId) => {
        this.setState({ openPage: 'customerseditpage' });
        this.setState({ selectedCustomerId: customerId });
      };
    
      handleCancelButtonClick = () => {
        this.setState({ openPage: 'customersinnerpage' });
      };

      handleChange = (event) => {
        this.setState({ Email: event.target.value });
      };

      handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
      };

     
  
  render() {
    
    const tableData = [
        {
            id: 1,
            img: carsonimg,
            name: 'Carson Darrin',
            email: 'carson.darrin@devias.io',
            location: 'Cleveland, Ohio, USA',
            quantity: 3,
            amount: 300.0,
            state:'New York',
            address1:'Street John Wick, no. 7',
            address2:'House #25',
            phonenumber:'+55 748 327 439',
            country:'USA',
            label:'5e86805e2bafd54f66cc95c3' 
        },
        {
            id: 2,
            img: franperezimg,
            name: 'Fran Perez',
            email: 'fran.perez@devias.io',
            location: 'Atlanta, Georgia, USA',
            quantity: 0,
            amount: 0.00,
            state:'New York',
            address1:'Street John Wick, no. 7',
            address2:'House #25',
            phonenumber:'+55 748 327 439',
            country:'USA',
            label:'5e86805e2bafd54f66cc95c3'
        },
        {
            id: 3,
            img: jieyanimg,
            name: 'Jie Yan Song',
            email: 'jie.yan.song@devias.io',
            location: 'North Canton, Ohio, USA',
            quantity: 6,
            amount: 5600.00,
            state:'New York',
            address1:'Street John Wick, no. 7',
            address2:'House #25',
            phonenumber:'+55 748 327 439',
            country:'USA',
            label:'5e86805e2bafd54f66cc95c3' 
        },
        {
            id: 4,
            img:antonioimg,
            name: 'Anika Visser',
            email: 'anika.visser@devias.io',
            location: 'Madrid, Madrid, Spain',
            quantity: 1,
            amount: 500.00,
            state:'New York',
            address1:'Street John Wick, no. 7',
            address2:'House #25',
            phonenumber:'+55 748 327 439',
            country:'Spain',
            label:'5e86805e2bafd54f66cc95c3'
        },
        {
            id: 5,
            img: marcusimg,
            name: 'Miron Vitold',
            email: 'miron.vitold@devias.io',
            location: 'San Diego, California, USA',
            quantity: 0,
            amount: 0.00,
            state:'New York',
            address1:'Street John Wick, no. 7',
            address2:'House #25',
            phonenumber:'+55 748 327 439',
            country:'USA',
            label:'5e86805e2bafd54f66cc95c3'   
        },
      ];

        const { selectedCustomerId } = this.state;
        const {classes} = this.props;
        const { index,Email,} = this.state;
        const { openPage,searchQuery } = this.state;
        const filteredTableData = tableData.filter((row) => row.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <div>

        {openPage === 'CustomersPage' && (  
            <div className={classes.customerspage}>   
            
                <Grid className={classes.header}>              
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>Customers</Typography>
                </Grid> 

                <Grid className={classes.bottomheader}>   

                    <div className={classes.BoxIocns}>
                        <Button  className={classes.impexpbtn}><FileUploadOutlinedIcon />Import</Button>
                        <Button  className={classes.impexpbtn}><FileDownloadOutlinedIcon />Export</Button>
                    </div>

                    <div>
                        <Button variant="contained" className={classes.addbtn}><AddIcon />Add</Button>
                    </div>
                    
                </Grid> 

                <Grid container spacing={1}>

                    <Grid item xs={12}>

                        <div className={classes.maingrid}>

                            <Grid className={classes.boxheader}>
                                <ListItem className={classes.headerlist}>
                                        <Typography>All</Typography>
                                        <Typography>Accepts marketing</Typography>
                                        <Typography>Prospect</Typography>
                                        <Typography>Returning</Typography>
                                </ListItem>
                            </Grid>

                            <div className={classes.searchgrid}>

                                <Grid container sapcing={2} className={classes.griditem}>

                                    <Grid item xs={10}>
                                        <div className={classes.seachfeild}>
                                            <Icon className={classes.searchicon}>
                                                <SearchIcon />
                                            </Icon>
                                            <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} value={searchQuery} onChange={this.handleSearchChange}/>
                                        </div>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <div className={classes.griditemtext}>
                                            <div className={classes.gridtext}>
                                                <FormControl sx={{ m: 1, minWidth: 180}}>
                                                    <Select value={index} onChange={this.handleChange} displayEmpty>
                                                    <Typography variant='caption' className={`${classes.active} ${classes.listtext}`}> Sort By </Typography>
                                                        <MenuItem value="">Last update(newest)</MenuItem>
                                                        <MenuItem value={10}>Last update(oldest) </MenuItem>
                                                        <MenuItem value={20}>Total orders(highest)</MenuItem>
                                                        <MenuItem value={30}>Total orders(lowest)</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>

                            </div>
                            
                            <div className={classes.tablegrid}>
                                <Table>
                                    <TableHead className={classes.tablehead}>
                                        <TableRow className={classes.inboxtext}>

                                            <TableCell align="left">
                                            <Checkbox className={classes.checkbox}/>
                                            </TableCell>

                                            <TableCell align='left'>
                                                    <Typography className={classes.tableheadtxt}>Name</Typography>
                                            </TableCell>

                                            <TableCell align='left'>
                                                <Typography className={classes.tableheadtxt}>Location</Typography>
                                            </TableCell>

                                            <TableCell align='left'>
                                                <Typography className={classes.tableheadtxt}>Orders</Typography>
                                            </TableCell>

                                            <TableCell align='left'>
                                                <Typography className={classes.tableheadtxt}>Spent</Typography>
                                            </TableCell>

                                            <TableCell align='right'>
                                                <Typography className={classes.tableheadtxt}>Actions</Typography>
                                            </TableCell>

                                        </TableRow>
                                    </TableHead>

                                    <TableBody className={classes.tabledata}>
                                        
                                    {filteredTableData.map((row) => (
                                        <TableRow key={row.id} className={classes.inboxtext}>
                                            <TableCell align="left">
                                            <Checkbox className={classes.checkbox}/>
                                            </TableCell>

                                            <TableCell align="left">
                                                <CardActions disableSpacing className={classes.actioncard}>
                                                    <Avatar src={row.img} className={classes.bodyavatar} />
                                                    <Box>
                                                        <Typography className={classes.logoname} onClick={() => this.handleArrowForwardClick(row.id)}>{row.name}</Typography>
                                                        <Typography className={classes.logotext}>{row.email}</Typography>
                                                    </Box>
                                                </CardActions>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Typography className={classes.logotext}>{row.location}</Typography>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Typography className={classes.logotext}>{row.quantity}</Typography>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Typography className={classes.logotext}>${row.amount.toFixed(2)}</Typography>
                                            </TableCell>

                                            <TableCell align="left">
                                                <CardActions disableSpacing className={classes.actionicons}>
                                                <Button onClick={() => this.handleEditButtonClick(row.id)}>
                                                    <EditOutlinedIcon />
                                                </Button>
                                                <Button onClick={() => this.handleArrowForwardClick(row.id)}>
                                                    <ArrowForwardOutlinedIcon />
                                                </Button>
                                                </CardActions>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </div>

                        </div>

                    </Grid>

                </Grid>

            </div>
        )}

        {(openPage === 'customersinnerpage' && 
            <div className={classes.customersinnerpage}>

                <Grid container spacing={1}>
                    <Grid className={classes.innerheader}>
                        <WestOutlinedIcon onClick={this.handleWestIconClick} className={classes.arrowicon}/> 
                        <Typography variant="h4" sx={{ flexGrow: 1 }}>Customers</Typography>
                    </Grid>
                </Grid>
                
                <div>
                    <Grid container spacing={2} className={classes.customerdetails}>

                        <Grid item xs={6}>
                        {tableData.map((row, index) => (
                                    <React.Fragment key={row.id}>
                                        
                                        {selectedCustomerId === row.id && (
                                            <>
                                            <CardActions disableSpacing className={classes.actioncard}>
                                                <Avatar alt="Remy Sharp" src={row.img} className={classes.innerbodyavatar}/>
                                                <Box>
                                                    <Typography  className={classes.customermail}>{row.email}</Typography>
                                                    <Stack direction="row">
                                                        <Typography  className={classes.customerid}>user_id:</Typography>
                                                        <Chip label={row.label} />
                                                    </Stack>
                                                </Box>
                                            </CardActions>
                                            </>
                                        )}
                                        
                                    </React.Fragment>
                                ))}
                        </Grid>

                        <Grid item xs={6}>
                            <CardActions disableSpacing className={classes.detailsbtn}>
                                {selectedCustomerId && (
                                    <Button className={classes.editbtn} 
                                        onClick={() => this.handleEditButtonClick(selectedCustomerId)}>
                                        Edit <EditOutlinedIcon />
                                    </Button>
                                )}
                                <Button variant="contained" className={classes.addbtn}>
                                    Actions <KeyboardArrowDownOutlinedIcon />
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid className={classes.detailsheader}>
                        <ListItem className={classes.detailslist}>
                            <Typography>Details</Typography>
                            <Typography>Invoices</Typography>
                            <Typography>Logs</Typography>
                        </ListItem>
                    </Grid>
                </div>

                <Grid container spacing={2} className={classes.griditem}>

                    <Grid item xs={4}>

                        <div className={classes.detailsgrid}>

                            <Box>
                                <ListItem className={classes.customerdetailslist}>
                                    <ListItemText>
                                    <Typography variant='h4' className={classes.listheader}>Basic Details</Typography>
                                    </ListItemText>
                                </ListItem>

                                {tableData.map((row, index) => (
                                    <React.Fragment key={row.id}>
                                        
                                        {selectedCustomerId === row.id && (
                                            <>
                                            <ListItem className={classes.customerdetailslist}>
                                            <ListItemText>
                                                <Typography variant="h6">Email</Typography>
                                                <Typography variant="body2">{row.email}</Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.customerdetailslist}>
                                                <ListItemText>
                                                    <Typography variant="h6">Phone</Typography>
                                                    <Typography variant="body2">{row.phonenumber}</Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            
                                            <ListItem className={classes.customerdetailslist}>
                                                <ListItemText>
                                                    <Typography variant="h6">Country</Typography>
                                                    <Typography variant="body2">{row.country}</Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.customerdetailslist}>
                                                <ListItemText>
                                                    <Typography variant="h6">State/Region</Typography>
                                                    <Typography variant="body2">{row.state}</Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.customerdetailslist}>
                                                <ListItemText>
                                                    <Typography variant="h6">Address1</Typography>
                                                    <Typography variant="body2">{row.address1}</Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />

                                            <ListItem className={classes.customerdetailslist}>
                                                <ListItemText>
                                                    <Typography variant="h6">Address2</Typography>
                                                    <Typography variant="body2">{row.address2}</Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            </>
                                        )}
                                        
                                    </React.Fragment>
                                ))}

                                <ListItem>
                                <ListItemText>
                                    <Button className={classes.resetbtn}>
                                        <Typography>Reset Password</Typography>
                                    </Button>
                                </ListItemText>
                                </ListItem>
                            </Box>

                        </div>

                    </Grid>

                    <Grid item xs={8}>

                        <div className={classes.detailsgrid}>
                            <Grid>
                                <Box>
                                    <List>
                                        <ListItem className={classes.customerdetailslist}>
                                            <Typography variant='h4' className={classes.listheader}>Payment</Typography>
                                        </ListItem>

                                        <ListItem className={classes.customerdetailslist}>
                                            <Box><Typography variant="h6">Credit Card</Typography></Box>
                                            <Box><Typography variant="body2">**** **** **** **** 4142</Typography></Box>
                                        </ListItem>
                                        <Divider />

                                        <ListItem className={classes.customerdetailslist}>
                                            <Box><Typography variant="h6">Paid</Typography></Box>
                                            <Box sx={{pl:'50px'}}><Typography variant="body2">2 ($50.00)</Typography></Box>
                                        </ListItem>
                                        <Divider />

                                        <ListItem className={classes.customerdetailslist}>
                                            <Box><Typography variant="h6">Draft</Typography></Box>
                                            <Box sx={{pl:'50px'}}><Typography variant="body2">1 ($5.00)</Typography></Box>
                                        </ListItem>
                                        <Divider />

                                        <ListItem className={classes.customerdetailslist}>
                                            <Box><Typography variant='h6'>State/Region</Typography></Box>
                                            <Box><Typography variant="body2">2 ($50.00)</Typography></Box>
                                        </ListItem>
                                        <Divider />

                                        <ListItem className={classes.customerdetailslist}>
                                            <Box><Typography variant='h6'>Unpaid/Due</Typography></Box>
                                            <Box sx={{pl:'10px'}}><Typography variant="body2" className={classes.eventdate}>1 ($12.00)</Typography></Box>
                                        </ListItem>
                                        <Divider />

                                        <ListItem className={classes.customerdetailslist}>
                                        <Box><Typography variant='h6'>Refunded</Typography></Box>
                                        <Box sx={{pl:'25px'}}><Typography variant="body2">0 ($0.00)</Typography></Box>
                                        </ListItem>
                                        <Divider />

                                        <ListItem className={classes.customerdetailslist}>
                                        <Box><Typography variant='h6'>Gross Income</Typography></Box>
                                        <Box><Typography variant="body2">$1,200.00</Typography></Box>
                                        </ListItem>
                                        <Divider />

                                        <ListItem>
                                            <CardActions disableSpacing className={classes.detailsbtn}>
                                                <Button variant="outlined" className={classes.invoicebtn}>
                                                    <Typography>Create Invoice</Typography>
                                                </Button>
                                                <Button className={classes.invoicebtn}>
                                                    <Typography>Resend Due Invoices</Typography>
                                                </Button>
                                            </CardActions>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                        </div>

                        <div className={classes.detailsgrid}>
                            <Grid>
                                <Box>
                                    <List>
                                        <ListItem className={classes.customerdetailslist}>
                                            <ListItemText>
                                            <Typography variant='h4' className={classes.listheader}>Emails</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem className={classes.customerdetailslist}>
                                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                            <Select value={Email} onChange={this.handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                                                <MenuItem value="">Resend Last Invoice</MenuItem>
                                                <MenuItem value={10}>Second Password reset</MenuItem>
                                                <MenuItem value={20}>Send verification</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </ListItem>
                                        <ListItem className={classes.customerdetailslist}>
                                            <Button variant="contained" className={classes.addbtn}>Send email &nbsp;<ArrowRightAltIcon /></Button>
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box>
                                <List>
                                    <ListItem className={classes.customerdetailslist}>
                                        <ListItemText>
                                            <Typography variant='h6'>Mail Type</Typography>
                                        </ListItemText>
                                        <ListItemText>
                                            <Typography variant='h6'>Date</Typography>
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem className={classes.customerdetailslist}>
                                        <ListItemText>
                                            <Typography variant='h6'>Order confirmation</Typography>
                                        </ListItemText>
                                        <ListItemText>
                                            <Typography variant='body2'>16/07/2023 | 04:55</Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />

                                    <ListItem className={classes.customerdetailslist}>
                                        <ListItemText>
                                            <Typography variant='h6'>Order confirmation</Typography>
                                        </ListItemText>
                                        <ListItemText>
                                            <Typography variant='body2'>14/07/2023 | 22:40</Typography>
                                        </ListItemText>
                                    </ListItem>
                                    </List> 
                                </Box>
                            </Grid>
                        </div>

                        <div className={classes.detailsgrid}>
                            <Grid>
                                <Box>
                                    <List>
                                        <ListItem className={classes.customerdetailslist}>
                                            <ListItemText>
                                            <Typography variant='h4' className={classes.listheader}>Data Management</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <Button variant="outlined" className={classes.deletebtn}>
                                                <Typography>Delete Account</Typography>
                                            </Button>
                                        </ListItem>
                                    </List>
                                
                                    <ListItem className={classes.customerdetailslist}>
                                        <ListItemText>
                                            <Typography variant='body2'>Remove this customer’s chart if he requested that, 
                                                if not please be aware that what has been deleted can never brought back</Typography>
                                        </ListItemText>
                                    </ListItem>
                                    
                                </Box>
                            </Grid>
                        </div>

                    </Grid>

                </Grid>

            </div>
        )}

        {(openPage === 'customerseditpage' &&
            <div className={classes.customerseditpage}>

                <Grid container spacing={1}>
                    <Grid item className={classes.innerheader}>
                        <WestOutlinedIcon onClick={this.handleWestIconClick} className={classes.arrowicon}/> 
                        <Typography variant="h4" sx={{ flexGrow: 1 }}>Customers</Typography>
                    </Grid>
                </Grid> 

                <Grid>
                {tableData.map((row, index) => (
                    <React.Fragment key={row.id}>
                        
                        {selectedCustomerId === row.id && (
                            <>
                            <CardActions disableSpacing className={classes.actioncard}>
                                <Avatar alt="Remy Sharp" src={row.img} className={classes.innerbodyavatar}/>
                                <Box>
                                    <Typography  className={classes.customermail}>{row.email}</Typography>
                                    <Stack direction="row">
                                        <Typography  className={classes.customerid}>user_id:</Typography>
                                        <Chip label={row.label} />
                                    </Stack>
                                </Box>
                            </CardActions>
                            </>
                        )}
                    </React.Fragment>
                ))}
                </Grid>

                <div className={classes.editpage}>
                    
                    <Grid className={classes.listheader}>
                        <Typography variant='h4'>Edit Customers</Typography>
                    </Grid>

                    {tableData.map((row) => (
                        <React.Fragment key={row.id}>
                            {selectedCustomerId === row.id && (
                                <Grid container spacing={2} className={classes.inputlist}>
                                <Grid item xs={6} className={classes.inputtextgrid}>
                                    <TextField id="name" label="Full name" required defaultValue={row.name} variant="filled" fullWidth />
                                </Grid>
                                <Grid item xs={6} className={classes.inputtextgrid}>
                                    <TextField id="email" label="Email address" required defaultValue={row.email} variant="filled" fullWidth/>
                                </Grid>
                                <Grid item xs={6} className={classes.inputtextgrid}>
                                    <TextField id="country" label="Country" defaultValue={row.location} variant="filled" fullWidth/>
                                </Grid>
                                <Grid item xs={6} className={classes.inputtextgrid}>
                                    <TextField id="state" label="State/Region" required defaultValue={row.state} variant="filled" fullWidth/>
                                </Grid>
                                <Grid item xs={6} className={classes.inputtextgrid}>
                                    <TextField id="address1" label="Address1" defaultValue={row.address1} variant="filled" fullWidth/>
                                </Grid>
                                <Grid item xs={6} className={classes.inputtextgrid}>
                                    <TextField id="address2" label="Address2" defaultValue={row.address2} variant="filled" fullWidth/>
                                </Grid>
                                <Grid item xs={6} className={classes.inputtextgrid}>
                                    <TextField id="phonenumber" label="Phone number" defaultValue={row.phonenumber} variant="filled" fullWidth/>
                                </Grid>
                                </Grid>
                            )}
                        </React.Fragment>
                    ))}

                    <Grid className={classes.listheader}>
                        <CardActions>
                            <Box>
                                <Typography variant='h4'>Make Contact Info Public</Typography>
                                <Typography variant='body2'>Means that anyone viewing your profile will be able to see your contacts details</Typography>
                            </Box>
                            <Switch defaultChecked/>
                        </CardActions>
                    </Grid>
                    <Divider/>

                    <Grid className={classes.listheaderbottom}>
                        <CardActions>
                            <Box>
                                <Typography variant='h4'>Available to hire</Typography>
                                <Typography variant='body2'>Toggling this will let your teammates know that you are available for acquiring new projects</Typography>
                            </Box>
                            <Switch />
                        </CardActions>
                    </Grid>

                    <Grid>
                        <CardActions disableSpacing className={classes.updatebtn}>
                            <Button variant="contained" className={classes.updatecancelbtn}>
                                <Typography>Update</Typography>
                            </Button>
                            <Button className={classes.cancelbtn} onClick={this.handleCancelButtonClick}>
                                <Typography>Cancel</Typography>
                            </Button>
                        </CardActions>
                    </Grid>
                    
                </div>

            </div>
        )}

    </div>
)
}
}

export default withStyles(
    (theme) => ({
      ...customersStyle(theme),
    }),
)(Customerscomp);