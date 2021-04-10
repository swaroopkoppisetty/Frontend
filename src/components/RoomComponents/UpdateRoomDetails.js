import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from 'components/actions/room'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
//import Input from '@material-ui/core/Input';
import Alert from '@material-ui/lab/Alert';

const useStyles = ((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
        margin: theme.spacing(1),
    },
  }));


class UpdateRoomDetails extends Component {
  constructor(props) {
    super();
        this.roomId = React.createRef();
        this.roomNo = React.createRef();
        this.roomType = React.createRef();
        this.rate_per_day = React.createRef();
        this.isavailable = React.createRef();
        this.hotel = React.createRef();
        this.state = {message: ''}
  }

  updateRoomDetails() {
    console.log("updating...");

    var room = {
        roomId: this.roomId.current.value,
      //  roomNo: this.roomNo.current.value,
      //  roomType: this.roomType.current.value,
       rate_per_day: this.rate_per_day.current.value,
       isavailable: this.isavailable.current.value
       
    };

    this.props.onUpdateRoomDetails(room)

  }

  componentDidMount()
  {

    console.log(this.props.match.params.roomId)
    

  }
  


  render() {
    const classes = useStyles;
    return (

<div>
<br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
   <TextField inputRef={this.roomId}  value = {this.props.match.params.roomId} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} type="hidden"
     />
</form><br/>


<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.rate_per_day} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} type ="number" label="Rate per day"
     margin="normal" variant="outlined" />
</form>
<br/>   

<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
  

    
    
<TextField inputRef={this.isavailable} id="outlined-basic" style={{ margin: 8,width:300,height:20 }}   label="Availability"
     margin="normal" variant="outlined" />
</form>
<br/>  
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} startIcon={<SaveIcon />} 
onClick={this.updateRoomDetails.bind(this)}>Update Room</Button>
</div><br/>
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
<Alert severity="success">{this.props.message}</Alert>
</div>
</div>
)
}
}


const mapStateToProps = (state)=>{
  
  return {
   
    message : state.admin.message
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateRoomDetails : (payload) => dispatch(actions.EditRoomDetails(payload))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateRoomDetails)