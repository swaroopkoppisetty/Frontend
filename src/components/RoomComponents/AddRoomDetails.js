import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "components/actions/room";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

const useStyles =((theme) => ({
  root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

class AddRoomDetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
        this.roomNo = React.createRef();
        this.roomType = React.createRef();
        this.rate_per_day = React.createRef();
        this.isavailable = React.createRef();
         this.hotelName = React.createRef();
        this.props = props
        this.state = {message: ''}

  }

  addRoomDetails() {
    var room = {
      roomNo: this.roomNo.current.value,
      roomType: this.roomType.current.value,
      rate_per_day: this.rate_per_day.current.value,
      isavailable: this.isavailable.current.value,
        hotel : {
          hotelName: this.hotelName.current.value
      }
      
    };


    this.props.onAddRoomDetail(room)

    
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
    <TextField inputRef={this.roomNo} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} type ="number"  label="Room number"
     margin="normal" variant="outlined" />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.roomType} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} label="Room Type"
     margin="normal" variant="outlined" />
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
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     

  <TextField inputRef={this.isavailable} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} type ="boolean" label="Availability"
     margin="normal" variant="outlined" />

</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
    
<TextField inputRef={this.hotelName} id="outlined-basic" style={{ margin: 8,width:300,height:20 }}   label="Hotel Name"
     margin="normal" variant="outlined" />
</form>
<br/>  
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addRoomDetails.bind(this)}>Add Room</Button>
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

const mapStateToProps = (state) =>{

  return{
    message : state.admin.message,
    roomdetails : state.admin.roomdetails
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddRoomDetail : (payload) => dispatch(actions.addRoomDetails(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddRoomDetails)