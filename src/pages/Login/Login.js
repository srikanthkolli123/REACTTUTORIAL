import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import loginStyle from './Login.style';
import { withStyles } from '@mui/styles';
import LockIcon from '@mui/icons-material/Lock';
import { Avatar, Typography, Button, FormGroup, ListItem, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TableFooter from '@mui/material/TableFooter';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            email: '',
            password: '',
        };
    }

    handleInputChange =(prop)=> (event) => {
        this.setState({
          [prop]:event.target.value
        });
      };

    handleLogin = () => {
        if(!emailRegex.test(this.state.email)){
            alert("Please enter valid email")
            return;
        } if(this.state.password === ""){
            alert("Please enter password")
        } else {
            window.location.href = '/Dashboard'
        }
      };
  render() {
    const {classes} = this.props;
    const {email, password} = this.props;
    return (
        <div className={classes.main}>
            <div>
            <Avatar className={classes.signinlogo}><LockIcon /></Avatar>
            <Typography className={classes.signintext}>Sign in</Typography>
            <FormGroup>
                <TextField className={classes.textfield} label="Email Address*" variant="outlined" onChange={this.handleInputChange('email')}/>
                <TextField className={classes.textfield} label="Password*" variant="outlined" onChange={this.handleInputChange('password')}/>
                <FormControlLabel control={<Checkbox/>} label="Remember me" />
                <Button className={classes.formbtn} onClick={this.handleLogin}>
                    <Typography>SIGN IN</Typography>
                </Button>
            </FormGroup>
            <ListItem className={classes.listtext}>
                <Typography className={classes.formtext}><a href="html.forgotpassword">Forgot password?</a></Typography>
                <Typography className={classes.formtext}><a href="html.signup">Don't have an account? Sign Up</a></Typography>
            </ListItem>
            
        </div>
        
            <TableFooter className={classes.copyrights}>
                <Typography className={classes.copyrightstext}>Copyright © <a href="https://mui.com/">Your Website</a> 2023</Typography>
            </TableFooter>
       
        </div>
    )
  }
}

// export default withRouter(Login);

export default withStyles(
    (theme) => ({
      ...loginStyle(theme),
    }),
)(Login);