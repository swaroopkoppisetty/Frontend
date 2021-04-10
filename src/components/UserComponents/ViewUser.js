import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import User from "./User.js";
import * as actions from 'components/actions/user'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { Grid } from "@material-ui/core";
// import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
function styles(theme) {
  return ({
    root: {
        maxWidth: 500,
        minWidth:300,
        margin: 20,
        marginTop: '10%',
        border: '2px solid #73AD21',
        borderRadius: '30 px',
        transition: 'transform .3s',
        '&:hover': {
        transform: 'scale(1.2)',
        },
        },
      media: {
          height: 300,
      },
      gridContainer: {
          paddingLeft: "5px",
          paddingRight: "5px"
      },
      cardActionArea: {
          flexGrow: 0,
          flexDirection: 'row',
          alignItems: 'center',
          margin: '50px',
      },
      new: {
          display: "flex",
      },
      
  });
}

class ViewUser extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }

    fetchData() {

        console.log("fetching data.....")



    }

    componentDidMount() {
        this.props.onFetchUsers()
    }

    deleteUser(id) {
         //console.log("deleting hotel "  + id)
        
        
        return this.props.onDeleteUser(id)
    }



    render() {

        if (this.props.users===undefined) {
            return (
                <h1>Loading....</h1>
                )
        }

        var usersList = this.props.users.map((user, i) => {
            const {classes } = this.props;
            return (
                
     <div className={classes.cardActionArea} style={{display:'inline-flex'}}>
    <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xl={true}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooCjLBrpz55i7W0A5ppkl6C-Luhx06opOpA&usqp=CAU"
                    title="User image"
                />
                 <CardContent key={i}>
                <Typography gutterBottom variant="h5" component="h2">
                <span> {user.userName}</span>
                
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <b>Id:</b> {user.userId}<br/> 
                    <b>Email:</b> {user.email}<br/> 
                    <b>Password:</b> {user.password}<br/>
                    <b>Mobile:</b> {user.mobile}<br/>
                    <b>Address:</b> {user.address}<br/>                    
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<DeleteIcon />}
      ><Button onClick={ this.deleteUser.bind(this,user.userId) }>
        Delete
      </Button>
      </Button>
      <Link to={"/admin/updateuser/"+user.userId}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Edit
      </Button>
      </Link>
       </CardActions>
        </Card>
        </Grid>
        </Grid> 
        
</div>  
);
});

            

        return (
            <div style={{display:"flex"}}>
                <div>{usersList}</div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.admin.users
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsers()),
        onDeleteUser : (id) => dispatch(actions.deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(withStyles(styles)(ViewUser));