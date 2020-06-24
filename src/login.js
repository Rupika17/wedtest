import React ,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './login.css';
import { withRouter } from "react-router-dom";


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  errorText: '',
  errorTextPass:''
  }
 }
 handleClick=(event)=>{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var userId=this.state.username;
  var regexpassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  var passw=this.state.password;

  

  if(this.state.username=="" )
  {
      this.setState({errorText:"Cannot be empty!"})
  } 
  else if(this.state.password=="")
  {
      this.setState({errorTextPass:"Cannot be empty!"})
  }
  else
  {
      this.setState({errorText:""})
  }
  if(userId.match(mailformat))
  {
    this.setState({errorText:""})
  }
  else 
  {
    this.setState({errorText:"Invalid Email!"})
  }
  if(passw.match(regexpassw)) 
  { 
    this.setState({errorTextPass:""})
  }
  else 
  {
    this.setState({errorTextPass:"Invalid Password!"})
  }
  if (this.state.username=="abc@gmail.com" && this.state.password=="Abc123")
  {
    this.props.history.push("/dashboard");
  }
  
 }
render() {
    return (
      <div className="main-div">
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"  
             showMenuIconButton={false}
           />
           <TextField
             hintText="Enter your Username / Email ID"
             floatingLabelText="Username"
             errorText={this.state.errorText}
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               errorText={this.state.errorTextPass}
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default withRouter(Login);
