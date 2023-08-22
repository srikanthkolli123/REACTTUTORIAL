import React,{Component} from 'react';
import reportstyles from './Reportscomp.style';
import {Typography, Grid, Icon, Divider, List, ListItem,Paper} from '@mui/material';
import { styled, ThemeProvider, createTheme, } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { Button ,Box} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import filemanagerlogo from '../../Assets/icon-folder.svg';
import pdflogo from '../../Assets/icon-pdf.svg';
import svglogo from '../../Assets/icon-svg.svg';
import jpglogo from '../../Assets/icon-jpg.svg';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import mp4logo from '../../Assets/icon-mp4.svg';
import pnglogo from '../../Assets/icon-png.svg';
import otherlogo from '../../Assets/icon-other.svg';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LanguageIcon from '@mui/icons-material/Language';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material';

const data = [
    { name: 'January', thisyear: 40},
  ];


  class Dashboardcomp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: true,
        showGridItems: true,
      };
    }
  
    handleDashboardClick = () => {
      this.setState({ showGridItems: true });
    };
  
    handleListClick = () => {
      this.setState({ showGridItems: false });
    };
  
    render() {
      const { classes } = this.props;
      const { showGridItems } = this.state;
  return (
    <div className={classes.main}>
        <div className={classes.reports}>

            <Grid className={classes.header}>              
                <Typography variant="h4" sx={{ flexGrow: 1 }}>Reports</Typography>
                <Button variant="contained" className={classes.uploadbtn}><UploadIcon />Upload</Button>
            </Grid>    

            <Grid container spacing={2}>

                <Grid item xs={8}>

                    <div className={classes.maingrid}>
                        <Grid container sapcing={3} className={classes.griditem}>
            
                                <Grid item xs={8}>
                                    <div className={classes.seachfeild}>
                                        <Icon className={classes.searchicon}>
                                            <SearchIcon />
                                        </Icon>
                                        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={classes.griditemicon}>
                                    <Icon className={`${classes.gridicon} ${showGridItems ? classes.active : ''}`} onClick={() => this.handleDashboardClick()}>
                                        <DashboardIcon className={classes.listicon} />
                                    </Icon>
                                    <Icon className={`${classes.gridicon} ${!showGridItems ? classes.active : ''}`} onClick={() =>this.handleListClick()}>
                                        <FormatListBulletedIcon className={classes.listicon} />
                                    </Icon>
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={classes.griditemtext}>
                                        <div className={classes.gridtext}>
                                            <Typography variant='caption' className={`${classes.active} ${classes.listtext}`}> Sort By </Typography>
                                            <Typography variant='caption'>Latest</Typography>
                                        </div>
                                        <div className={classes.arrowicon}>
                                            <ArrowDropDownIcon className={classes.downicon}/>
                                        </div>
                                    </div>
                                </Grid>

                        </Grid>
                    </div>

                    {showGridItems && (
                       <div className={classes.griditems}>
                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                                   <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={filemanagerlogo} />
                               <Typography variant='h6'>AWS Credentials</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>503.9 MB• 12 items</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                   </AvatarGroup>
                               </div>
                               <div className={classes.bottomtext}>
                                   <Typography variant='caption'>Created at Jul 14, 2023</Typography>
                               </div>
                               
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={filemanagerlogo} />
                               <Typography variant='h6'>dev 2022</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>495.04 MB• 5 items</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                   </AvatarGroup>
                               </div>
                               <Typography variant='caption'>Created at Jul 14, 2023</Typography>
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={filemanagerlogo} />
                               <Typography variant='h6'>AI Resources</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>185.22 MB• 3 items</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                   </AvatarGroup>
                               </div>
                               <Typography variant='caption'>Created at Jul 14, 2023</Typography>
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={filemanagerlogo} />
                               <Typography variant='h6'>invoices</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>697.34 MB• 17 items</Typography>
                               </div>
                               <Typography variant='caption'>Created at Jul 13, 2023</Typography>
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={filemanagerlogo} />
                               <Typography variant='h6'>assets</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>99.07 MB• 12 items</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                   </AvatarGroup>
                               </div>
                               <Typography variant='caption'>Created at Jul 13, 2023</Typography>
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={pdflogo} />
                               <Typography variant='h6'>Personal-cv.pdf</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>450.38 MB</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                   </AvatarGroup>
                               </div>
                               <Typography variant='caption'>Created at Jul 12, 2023</Typography>
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={svglogo} />
                               <Typography variant='h6'>company-logo-white.svg</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>726.84 MB</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                   </AvatarGroup>
                               </div>
                               <Typography variant='caption'>Created at Jul 12, 2023</Typography>
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={jpglogo} />
                               <Typography variant='h6'>landing_cover1.jpeg</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>712.23 MB</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                   </AvatarGroup>
                               </div>
                               <Typography variant='caption'>Created at Jul 12, 2023</Typography>
                           </div>
                       </Box>

                       <Box>
                           <div className={classes.gridbox}>
                               <div className={classes.boxicons}>
                               <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                   <Button>
                                       <MoreVertIcon />
                                   </Button>
                               </div>
                               <img src={svglogo} />
                               <Typography variant='h6'>About-Hero_shape-xl.svg</Typography>
                               <Divider />
                               <div className={classes.boxbottom}>
                                   <Typography>357.06 MB</Typography>
                                   <AvatarGroup max={5} className={classes.avatars}>
                                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                   </AvatarGroup>
                               </div>
                               <Typography variant='caption'>Created at Jul 12, 2023</Typography>
                           </div>
                       </Box>

                       </div>
                    )}

                    {!showGridItems && (
                        <div className={classes.tablegrid}>
                           <Table>
                               <TableBody className={classes.tabledata}>

                                   <TableRow className={classes.inboxtext}>
                                      
                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <Avatar>
                                                   <LanguageIcon />
                                               </Avatar>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'  className={classes.lanicon}>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                               <div className={classes.firstdata}>
                                                   <Box>
                                                       <img src={filemanagerlogo} alt="Logo" />
                                                   </Box>
                                                   <div className={classes.tabletext}>
                                                       <Typography variant="h6" className={classes.logoname}>
                                                           AWS Credentials
                                                       </Typography>
                                                       <Typography variant="p" className={classes.logodata}>
                                                           503.9 MB • 12 items
                                                       </Typography>
                                                   </div>
                                               </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                   <Typography variant="h6" className={classes.logoname}>
                                       Created at
                                       </Typography>
                                       <Typography variant="h6" className={classes.logodata}>
                                       Jul 14, 2023
                                       </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>
                                   
                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                                   <TableRow className={classes.inboxtext}>

                                       <TableCell align="left">
                                           <div className={classes.firstdata}>
                                               <Box>
                                                   <img src={filemanagerlogo} alt="Logo" />
                                               </Box>
                                               <div className={classes.tabletext}>
                                                   <Typography variant="h6" className={classes.logoname}>
                                                       AWS Credentials
                                                   </Typography>
                                                   <Typography variant="p" className={classes.logodata}>
                                                       503.9 MB • 12 items
                                                   </Typography>
                                               </div>
                                           </div>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Typography variant="h6" className={classes.logoname}>
                                           Created at
                                           </Typography>
                                           <Typography variant="h6" className={classes.logodata}>
                                           Jul 14, 2023
                                           </Typography>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Box className={classes.avatarcontainer}>
                                               <AvatarGroup className={classes.avatarsec}>
                                                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                                   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.avatar}/>
                                               </AvatarGroup>
                                           </Box>
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon />} />
                                       </TableCell>

                                       <TableCell align='left'>
                                           <Button>
                                           <MoreVertIcon />
                                           </Button>
                                       </TableCell>

                                   </TableRow>

                               </TableBody>
                           </Table>
                        </div>
                    )}
                    
                </Grid>

                <Grid item xs={4}>
                    <div className={classes.maingrid}>
                        <div className={classes.innergrid}>
                        <div className={classes.rightgrid}>
                            <Box>
                                <Typography variant='h6'>Storage</Typography>
                                <Typography variant='caption'>Upgrade before reaching it</Typography>
                            </Box>
                            <div className={classes.chartContainer}>
                                <PieChart width={330} height={180}>
                                    <Pie
                                    dataKey="thisyear"
                                    // isAnimationActive={false}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={70}
                                    innerRadius={50}
                                    startAngle={180}
                                    endAngle={0}
                                    fill="#8884d8"/>
                                </PieChart>
                            </div>
                            <Box className={classes.charttext}>
                                <Typography variant='subtitle1'>75GB</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h5'>
                                    You’ve almost reached your limit
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body2'>
                                    You have used 75% of your available storage.
                                </Typography>   
                            </Box>
                            <Box className={classes.rightgridlist}>
                                <List>
                                    <ListItem>
                                        <img src={mp4logo}/>
                                        <List>
                                            <Typography variant='caption'>Mp4</Typography>
                                            <Typography variant='body2'>22.75 GB • 25 items</Typography>
                                        </List>
                                    </ListItem>
                                    <ListItem>
                                        <img src={pnglogo}/>
                                        <List>
                                            <Typography variant='caption'>PNG</Typography>
                                            <Typography variant='body2'>54.69 GB • 591 items</Typography>
                                        </List>
                                    </ListItem>
                                    <ListItem>
                                        <img src={pdflogo}/>
                                        <List>
                                            <Typography variant='caption'>PDF</Typography>
                                            <Typography variant='body2'>412.39 MB • 95 items</Typography>
                                        </List>
                                    </ListItem>
                                    <ListItem>
                                        <img src={otherlogo}/>
                                        <List>
                                            <Typography variant='caption'>Other</Typography>
                                            <Typography variant='body2'>261.43 MB • 210 items</Typography>
                                        </List>
                                    </ListItem>
                                </List>
                            </Box>
                        </div>
                        <Divider />
                        <div className={classes.upgradebtn}>
                        <Button variant="contained" className={classes.planbtn}>Upgrade Plan <ElectricBoltIcon className={classes.bolticon}/></Button>
                        </div>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>
    </div>
   
  );
}
}
export default withStyles(
    (theme) => ({
      ...reportstyles(theme),
    }),
)(Dashboardcomp);
 


