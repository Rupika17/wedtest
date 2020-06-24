import React ,{Component, useEffect} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withRouter } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

 function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [rows1, setRows] = React.useState(rows);
  const [name, changeName] = React.useState('');
  useEffect(()=>{
    setRows(rows);
  })

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSave=()=>{
    rows.push(createData(6,'prd',23,3));
    setRows(rows);
    console.log(rows)   

  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Products
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="id"
            value = {name}
            onChange={(e)=> changeName(e.target.value)}
            fullWidth
            hintText="Enter your Product ID"
            floatingLabelText="Product ID"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            hintText="Enter your Product Name"
            floatingLabelText="Product Name"
           
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="rate"
            hintText="Enter your Product Rate"
            floatingLabelText="Rate"
            type="number" 
            inputProps={{ min: "0", max: "10", step: "1" }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="quality"
            hintText="Enter your Product Quality"
            floatingLabelText="Quality"
            type="number" inputProps={{ min: "0", max: "3", step: "1" }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(id, name, rate, quality) {
    
    return { id, name, rate, quality };
  }
  
  const rows = [
    createData(1,'Product 1', 1590, 6.0),
    createData(2,'Product 2', 2370, 9.0),
    createData(3,'Product 3', 2621, 16.0),
    createData(4,'Product 4', 3052, 3.7),
    createData(5,'Product 5', 3560, 16.0),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
   function CustomizedTables() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="right">Rate</StyledTableCell>
              <StyledTableCell align="right">Quality</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.rate}</StyledTableCell>
                <StyledTableCell align="right">{row.quality}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        errorText: ''
        }
       }
       render() {
        return (
           <div>
               <MuiThemeProvider>
          <div>
               <AppBar 
                title="Welcome ABC"
                showMenuIconButton={false}
               />
               <div style={{marginTop:"30px", textAlign:"right", marginRight:"5px"}}>
               <FormDialog />
               </div>
               <div style={{marginTop:"30px"}}>
               <CustomizedTables />
               </div>
               </div>
               </MuiThemeProvider>
           </div> 
        )
       }
}
export default withRouter(Home);