
import React, { Component } from 'react';
import integrationStyle from './Integrationcomp.style';
import { withStyles } from '@mui/styles';
import { Box, Grid, Icon, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox, CardActions } from '@mui/material';
import { InputBase, Avatar, Switch, Chip, Stack, MenuItem, FormControl, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';


class Integration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      openPage: 'integrationpage',
      selectedCustomers: [],
      isScrollbarVisible: false,
      searchQuery: '',
      startDate: null,
      endDate: null,
    };
  }


  handleStartDateChange = (date) => {
    this.setState({ startDate: date });
  };

  handleEndDateChange = (date) => {
    this.setState({ endDate: date });
  };

  handleFirstCellClick = () => {
    this.setState({ openPage: 'invoicepage' });
  };

  handleArrowForwardClick = () => {
    this.setState({ openPage: 'invoicepage' });
  };

  handleWestIconClick = () => {
    this.setState({ openPage: 'integrationpage' });
  };

  handleCustomerSelection = (customerName) => {
    const { selectedCustomers } = this.state;
    const index = selectedCustomers.indexOf(customerName);
    if (index === -1) {
      this.setState((prevState) => ({
        selectedCustomers: [...prevState.selectedCustomers, customerName],
      }));
    } else {
      this.setState((prevState) => ({
        selectedCustomers: prevState.selectedCustomers.filter((name) => name !== customerName),
      }));
    }
  };

  getFilteredData = (data) => {
    const { selectedCustomers, searchQuery, startDate, endDate } = this.state;

    let filteredData = data;

    if (selectedCustomers.length > 0) {
      filteredData = filteredData.filter((row) => selectedCustomers.includes(row.customer));
    }

    if (searchQuery.trim() !== '') {
      filteredData = filteredData.filter((row) =>
        row.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredData;
  };


  handleMouseEnter = () => {
    this.setState({ isScrollbarVisible: true });
  };

  handleMouseLeave = () => {
    this.setState({ isScrollbarVisible: false });
  };

  handleSearchInputChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
  };


  render() {

    const customerdata = [
      {
        name: 'Blind Spots Inc.',
      },
      {
        name: 'Dispatcher Inc.',
      },
      {
        name: 'ACME SRL'
      },
      {
        name: 'Novelty I.S',
      },
      {
        name: 'Beauty Clinic SRL',
      },
      {
        name: 'Division Inc.',
      },
    ]

    const canceleddata = [
      {
        id: '1',
        avatar: 'TT',
        invoiceNumber: 'INV-0015',
        customer: 'Terry Thomas',
        amount: '$781.50',
        issuedDate: '22/07/2023',
        dueDate: '08/08/2023',
        paymentStatus: 'CANCELED',
      },
      {
        id: '2',
        avatar: 'NI',
        invoiceNumber: 'INV-0013',
        customer: 'Novelty I.S',
        amount: '$496.23',
        issuedDate: '13/07/2023',
        dueDate: '29/07/2023',
        paymentStatus: 'CANCELED',
      }
    ]

    const paiddata = [
      {
        id: '1',
        avatar: 'AS',
        invoiceNumber: 'INV-0019',
        customer: 'ACME SRL',
        amount: '$55.50',
        issuedDate: '26/07/2023',
        dueDate: '31/08/2023',
        paymentStatus: 'Paid',
      },
      {
        id: '2',
        avatar: 'BS',
        invoiceNumber: 'INV-0018',
        customer: 'Blind Spots Inc.',
        amount: '$688.90',
        issuedDate: '27/07/2023',
        dueDate: '02/08/2023',
        paymentStatus: 'Paid',
      },
      {
        id: '3',
        avatar: 'BC',
        invoiceNumber: 'INV-0017',
        customer: 'Beauty Clinic SRL',
        amount: '$695.20',
        issuedDate: '27/07/2023',
        dueDate: '05/08/2023',
        paymentStatus: 'Paid',
      },
    ]

    const pendingdata = [
      {
        id: '1',
        avatar: 'MJ',
        invoiceNumber: 'INV-0021',
        customer: 'Matt Jason',
        amount: '$23.11',
        issuedDate: '24/07/2023',
        dueDate: '20/08/2023',
        paymentStatus: 'Pending',
      },
      {
        id: '2',
        avatar: 'MJ',
        invoiceNumber: 'INV-0020',
        customer: 'Matt Jason',
        amount: '$253.76',
        issuedDate: '24/07/2023',
        dueDate: '12/08/2023',
        paymentStatus: 'Pending',
      },
    ]

    const invoiceData = [
      {
        img: 'AS',
        customer: 'ACME SRL',
        logo: <LayersOutlinedIcon />,
        email: 'www.devias.io',
        paymentStatus: 'PAID',
        invoiceNumber: 'INV-0019',

        address: 'Street King William, 123',
        addressid: 'Level 2, C, 442456',
        city: 'San Francisco, CA, USA',

        companyno: 'Company No. 4675933',
        companyvatno: 'EU VAT No. 949 67545 45',
        contactmail: 'accounts@devias.io',
        contactnumber: '(+40) 652 3456 23',

        dueDate: '31 jul 2023',
        issuedDate: '26 jul 2023',
        invoiceNumber: 'INV-0019',

        billedTo: 'ACME SRL',
        location: 'Countdown Grey Lynn',
        billingId: '6934656584231',
        area: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand',
      },
    ];

    const { classes } = this.props;
    const { openPage, isScrollbarVisible } = this.state;
    const { selectedCustomers } = this.state;
    const filteredCanceledData = this.getFilteredData(canceleddata);
    const filteredPaidData = this.getFilteredData(paiddata);
    const filteredPendingData = this.getFilteredData(pendingdata);
    const paidCount = filteredPaidData.length;
    const pendingCount = filteredPendingData.length;
    const canceledCount = filteredCanceledData.length;



    return (
      <div>
        {openPage === 'integrationpage' && (
          <div className={classes.integrationpage}>
            <Grid className={classes.pagetitle}>
              <Typography variant='h6'>Integration</Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className={classes.detailsgrid}>
                  <Box>
                    <ListItem className={classes.integrationdetailslist}>
                      <ListItemText>
                        <Typography variant='h4' className={classes.listheader}>Filter</Typography>
                      </ListItemText>
                    </ListItem>
                    <Box>
                      <ListItem className={classes.integrationdetailslist}>
                        <div className={classes.seachfeild}>
                          <Icon className={classes.searchicon}>
                            <SearchIcon />
                          </Icon>
                          <InputBase placeholder="Invoice number" className={classes.inputfeild} inputProps={{ 'aria-label': 'search' }}
                            value={this.state.searchQuery} onChange={this.handleSearchInputChange} />
                        </div>
                      </ListItem>
                    </Box>
                    <ListItem className={classes.issuelist}>
                      <ListItemText>
                        <Typography variant='h6' className={classes.issueheader}>Issue date</Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem className={classes.dateform}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="From"
                          value={this.state.startDate}
                          onChange={this.handleStartDateChange}
                          format='DD/MM/YYYY'
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </ListItem>
                    <ListItem className={classes.dateform}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="To"
                          value={this.state.endDate}
                          format='DD/MM/YYYY'
                          onChange={this.handleEndDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </ListItem>
                    <ListItem className={classes.issuelist}>
                      <ListItemText>
                        <Typography variant='h6' className={classes.issueheader}>From customer</Typography>
                      </ListItemText>
                    </ListItem>


                    <div className={classes.checkboxlist}>
                      <Box className={`${classes.formcheckbox} ${isScrollbarVisible ? 'show-scrollbar' : ''}`}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}>
                        <List>
                          {customerdata.map((customer) => (
                            <ListItem key={customer.name} className={classes.selectcheckbox}>
                              <FormControlLabel control={<Checkbox checked={selectedCustomers.includes(customer.name)}
                                onChange={() => this.handleCustomerSelection(customer.name)}
                              />} label={customer.name} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </div>

                    <ListItem className={classes.invoicebtn}>
                      <CardActions>
                        <Switch />
                        <Box>
                          <Typography variant='body2'>Paid only</Typography>
                        </Box>
                      </CardActions>
                    </ListItem>
                    <ListItem className={classes.invoicebtn}>
                      <CardActions>
                        <Switch defaultChecked />
                        <Box>
                          <Typography variant='body2'>Group by status</Typography>
                        </Box>
                      </CardActions>
                    </ListItem>
                  </Box>
                </div>
              </Grid>

              <Grid item xs={8}>
                <div className={classes.invoicegrid}>

                  <div className={classes.invoiceheader}>
                    <Box>
                      <ListItem className={classes.invoicedetailslist}>
                        <Typography variant='h3' className={classes.listheader}>Invoices</Typography>
                        <CardActions disableSpacing className={classes.filteraddbtn}>
                          <Button className={classes.filterbtn} ><FilterAltOutlinedIcon />Filter</Button>
                          <Button variant="contained" className={classes.newbtn}><AddOutlinedIcon />New</Button>
                        </CardActions>
                      </ListItem>
                    </Box>
                  </div>

                  <div className={classes.amountgrid}>

                    <Box>
                      <div className={classes.gridsecInner}>
                        <Avatar className={classes.totalicon}>
                          <CheckBoxOutlinedIcon />
                        </Avatar>
                        <Box className={classes.list}>
                          <Typography variant="body2" className={classes.title}>Total</Typography>
                          <Typography variant="h6" className={classes.caption}>$5,300.00</Typography>
                          <Typography variant="body2" className={classes.title}>from 12 invoices</Typography>
                        </Box>
                      </div>
                    </Box>

                    <Box>
                      <div className={classes.gridsecInner}>
                        <Avatar className={classes.paidicon}>
                          <CheckBoxOutlinedIcon />
                        </Avatar>
                        <Box className={classes.list}>
                          <Typography variant="body2" className={classes.title}>Paid</Typography>
                          <Typography variant="h6" className={classes.caption}>$1,439.60</Typography>
                          <Typography variant="body2" className={classes.title}>from 3 invoices</Typography>
                        </Box>
                      </div>
                    </Box>

                    <Box>
                      <div className={classes.gridsecInner}>
                        <Avatar className={classes.pendingicon}>
                          <QueryBuilderOutlinedIcon />
                        </Avatar>
                        <Box className={classes.list}>
                          <Typography variant="body2" className={classes.title}>Pending</Typography>
                          <Typography variant="h6" className={classes.caption}>$276.87</Typography>
                          <Typography variant="body2" className={classes.title}>from 2 invoices</Typography>
                        </Box>
                      </div>
                    </Box>

                  </div>

                  <div className={classes.amountstack}>
                    <Stack spacing={2}>

                      <Stack>
                        <Typography variant="caption" className={classes.canceledcount}>Canceled ({canceledCount})</Typography>
                        <Table className={classes.tablestack}>
                          <TableBody className={classes.tableamount}>
                          {filteredCanceledData.filter(row => row.paymentStatus === 'CANCELED').map(row => (
                            <TableRow key={row.id} className={classes.tableRowNoBorder}>
                              <TableCell>
                                <CardActions className={classes.firstcell} onClick={this.handleFirstCellClick}>
                                  <Avatar><Typography variant='h6'>{row.avatar}</Typography></Avatar>
                                  <div className={classes.invnumber}>
                                    <Typography variant='body1'>{row.invoiceNumber}</Typography>
                                    <Typography variant='body2'>{row.customer}</Typography>
                                  </div>
                                </CardActions>
                              </TableCell>
                              <TableCell>
                                <Typography variant='body2' className={classes.amount}>
                                  {row.amount}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant='body1'>Issued</Typography>
                                <Typography variant='body2'>{row.issuedDate}</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant='body1'>Due</Typography>
                                <Typography variant='body2'>{row.dueDate}</Typography>
                              </TableCell>
                              <TableCell>
                                <div className={classes.payment}>
                                  <Typography variant='body1' className={classes.paymentstatus}>
                                    {row.paymentStatus}
                                  </Typography>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Button>
                                  <ArrowForwardOutlinedIcon onClick={this.handleArrowForwardClick} />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}

                          </TableBody>
                        </Table>
                      </Stack>

                      <Stack>
                        <Typography variant="caption" className={classes.paidcount}>Paid ({paidCount})</Typography>
                        <Table className={classes.tablestack}>
                          <TableBody className={classes.tableamount}>

                          {filteredPaidData.filter(row => row.paymentStatus === 'Paid').map(row =>  (
                              <TableRow key={row.id} className={classes.tableRowNoBorder}>
                                <TableCell>
                                  <CardActions className={classes.firstcell} onClick={this.handleFirstCellClick}>
                                    <Avatar><Typography variant='h6'>{row.avatar}</Typography></Avatar>
                                    <div className={classes.invnumber}>
                                      <Typography variant='body1'>{row.invoiceNumber}</Typography>
                                      <Typography variant='body2'>{row.customer}</Typography>
                                    </div>
                                  </CardActions>
                                </TableCell>
                                <TableCell>
                                  <Typography variant='body2' className={classes.amount}>
                                    {row.amount}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography variant='body1'>Issued</Typography>
                                  <Typography variant='body2'>{row.issuedDate}</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography variant='body1'>Due</Typography>
                                  <Typography variant='body2'>{row.dueDate}</Typography>
                                </TableCell>
                                <TableCell>
                                  <div className={classes.paymentpaid}>
                                    <Typography variant='body1' className={classes.paymentstatus}>
                                      {row.paymentStatus}
                                    </Typography>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Button>
                                    <ArrowForwardOutlinedIcon onClick={this.handleArrowForwardClick} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}

                          </TableBody>
                        </Table>

                      </Stack>

                      <Stack>
                        <Typography variant="caption" className={classes.pendingcount}>Pending ({pendingCount})</Typography>
                        <Table className={classes.tablestack}>
                          <TableBody className={classes.tableamount}>

                          {filteredPendingData.filter(row => row.paymentStatus === 'Pending').map(row =>  (
                                <TableRow key={row.id} className={classes.tableRowNoBorder}>
                                  <TableCell>
                                    <CardActions className={classes.firstcell} onClick={this.handleFirstCellClick}>
                                      <Avatar><Typography variant='h6'>{row.avatar}</Typography></Avatar>
                                      <div className={classes.invnumber}>
                                        <Typography variant='body1'>{row.invoiceNumber}</Typography>
                                        <Typography variant='body2'>{row.customer}</Typography>
                                      </div>
                                    </CardActions>
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant='body2' className={classes.amount}>
                                      {row.amount}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant='body1'>Issued</Typography>
                                    <Typography variant='body2'>{row.issuedDate}</Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant='body1'>Due</Typography>
                                    <Typography variant='body2'>{row.dueDate}</Typography>
                                  </TableCell>
                                  <TableCell>
                                    <div className={classes.payment}>
                                      <Typography variant='body1' className={classes.paymentstatus}>
                                        {row.paymentStatus}
                                      </Typography>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <Button>
                                      <ArrowForwardOutlinedIcon onClick={this.handleArrowForwardClick} />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                            ))}

                          </TableBody>
                        </Table>
                      </Stack>

                    </Stack>
                  </div>
                </div>
                
              </Grid>

            </Grid>
          </div>
        )}


        {openPage === 'invoicepage' && (
          <div className={classes.invoicepage}>

            <Grid container spacing={1}>
              <Grid item className={classes.innerheader}>
                <WestOutlinedIcon className={classes.arrowicon} onClick={this.handleWestIconClick} />
                <Typography variant="h4" sx={{ flexGrow: 1 }}>Invoices</Typography>
              </Grid>
            </Grid>

            <div>
              <Grid container spacing={2} className={classes.customerdetails}>
                {invoiceData.map((data, index) => (
                  <Grid item xs={6}>
                    <CardActions disableSpacing className={classes.actioncard}>
                      <Avatar className={classes.innerbodyavatar}>
                        <Typography>{data.img}</Typography>
                      </Avatar>
                      <Box>
                        <Typography className={classes.customermail}>{data.invoiceNumber}</Typography>
                        <Typography className={classes.customerid}>{data.customer}</Typography>
                      </Box>
                    </CardActions>
                  </Grid>
                ))}
                <Grid item xs={6}>
                  <CardActions disableSpacing className={classes.detailsbtn}>
                    <Button className={classes.editbtn}> Preview </Button>
                    <Button variant="contained" className={classes.addbtn}>Download</Button>
                  </CardActions>
                </Grid>
              </Grid>
            </div>

            <Divider />

            <div className={classes.invoicedetails}>


              {invoiceData.map((data, index) => (
                <Grid key={index} className={classes.invoiceheaderdetails}>
                  <CardActions className={classes.invoicelogo}>
                    {data.logo && (
                      <Box>
                        {data.logo}
                        <Typography className={classes.invoiceemail}>
                          {data.email}
                        </Typography>
                      </Box>
                    )}
                    {data.paymentStatus && (
                      <Box>
                        <Typography className={classes.colorpaid}>
                          {data.paymentStatus}
                        </Typography>
                        <Typography className={classes.paidnumber}>
                          {data.invoiceNumber}
                        </Typography>
                      </Box>
                    )}
                  </CardActions>
                </Grid>
              ))}

              {invoiceData.map((data, index) => (
                <Grid key={index} className={classes.invoiceheaderdetails}>
                  <CardActions className={classes.invoicecardaddress}>
                    <div className={classes.invoiceaddress}>
                      <Box>
                        <Typography>{data.address}</Typography>
                        <Typography>{data.addressid}</Typography>
                        <Typography>{data.city}</Typography>
                      </Box>
                      <Box>
                        <Typography>{data.companyno}</Typography>
                        <Typography>{data.companyvatno}</Typography>
                      </Box>
                    </div>
                    <Box>
                      <Typography>{data.contactmail}</Typography>
                      <Typography>{data.contactnumber}</Typography>
                    </Box>
                  </CardActions>
                </Grid>
              ))}

              {invoiceData.map((data, index) => (
                <Grid key={index} className={classes.invoiceheaderdetails}>
                  <CardActions className={classes.invoiceduedates}>
                    <Box>
                      <Typography variant='body1'>Due date</Typography>
                      <Typography variant='body2'>{data.dueDate}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='body1'>Date of issue</Typography>
                      <Typography variant='body2'>{data.issuedDate}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='body1'>Number</Typography>
                      <Typography variant='body2'>{data.invoiceNumber}</Typography>
                    </Box>
                  </CardActions>
                </Grid>
              ))}

              {invoiceData.map((data, index) => (
                <Grid key={index} className={classes.invoiceheaderdetails}>
                  <CardActions className={classes.invoiceduedates}>
                    <Box>
                      <Typography variant='body1'>Billed to</Typography>
                      <Typography variant='body2'>{data.billedTo}</Typography>
                      <Typography variant='body2'>{data.location}</Typography>
                      <Typography variant='body2'>{data.billingId}</Typography>
                      <Typography variant='body2'>{data.area}</Typography>
                    </Box>
                  </CardActions>
                </Grid>
              ))}


              <div>
                <Table>
                  <TableHead className={classes.pricetable}>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>DESCRIPTION</TableCell>
                      <TableCell>QTY</TableCell>
                      <TableCell>UNITY PRICE</TableCell>
                      <TableCell>TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Freelancer Subscription (12/05/2019 - 11/06/2019)</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>$55.50</TableCell>
                      <TableCell>$55.50</TableCell>
                    </TableRow>
                    <TableRow className={classes.pricetablerow}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell><Typography variant='h6'>Subtotal</Typography></TableCell>
                      <TableCell><Typography variant='h6'>$55.50</Typography></TableCell>
                    </TableRow>
                    <TableRow className={classes.pricetablerow}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell><Typography variant='h6'>Taxes</Typography></TableCell>
                      <TableCell><Typography variant='h6'>$5.50</Typography></TableCell>
                    </TableRow>
                    <TableRow className={classes.pricetablerow}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell><Typography variant='h6'>Total</Typography></TableCell>
                      <TableCell><Typography variant='h6'>$55.50</Typography></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <Grid>
                <Box className={classes.notestxt}>
                  <Typography variant='h6'>Notes</Typography>
                  <Typography>Please make sure you have the right bank registration
                    number as I had issues before and make sure you guys cover transfer expenses.</Typography>
                </Box>
              </Grid>
            </div>
          </div>
        )}


      </div>

    );
  }
}
export default withStyles((theme) => ({
  ...integrationStyle(theme),
}))(Integration);