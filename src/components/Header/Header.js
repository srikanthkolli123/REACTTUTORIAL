import React,{Component} from 'react';
import headerStyle from './Header.style';
import { withStyles } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';


class Header extends Component {
constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleLogoutClick =()=>{
    window.location.href='./Login'
  }

  render(){
    
    const { classes } = this.props;
  return (
    <div className={classes.main}>
        
        <div className={classes.header}>
            
            <Toolbar>
                <Typography className={classes.headertitle} variant="h6" sx={{ flexGrow: 1 }}>Production</Typography>
                <IconButton>
                    <Badge badgeContent={4} color='secondary'>
                        <NotificationsIcon className={classes.notificationcount} />
                    </Badge>
                </IconButton>
                <IconButton className={classes.notificationcount}  onClick={() => this.handleLogoutClick()}>
                  <AccountCircle />
                </IconButton>
            </Toolbar>
       
        </div>
       
    </div>
   
  );
}
}
export default withStyles((theme) => ({
  ...headerStyle(theme)}))
  (Header);