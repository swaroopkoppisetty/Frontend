import React, { useEffect } from "react";
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
import {useAuth} from "views/contexts/AuthContext"
import {useDispatch,useSelector} from 'react-redux'
import {fetchUser} from 'customer/actions/user'

function styles(theme) {
  return ({
    root: {
        maxWidth: 500,
        minWidth: 300,
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
          height: 200,
      },
      gridContainer: {
          paddingLeft: "5px",
          paddingRight: "5px"
      },
      cardActionArea: {
          flexGrow: 0,
          flexDirection: 'column',
          alignItems: 'center',
          margin: '30px',
      },
      new: {
          display: "flex",
      },
      
  });
}



 
 function ViewUser() {

const user = useAuth().currentUser
const dispatch = useDispatch()
const customer = useSelector((state)=>state.customer.user)
useEffect(() => {
dispatch(fetchUser(user.email))


}, [dispatch,user.email])


    





     return (
         <div>
             {customer && <div>
                <Card>
            <CardActionArea>
                <CardMedia
                    
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooCjLBrpz55i7W0A5ppkl6C-Luhx06opOpA&usqp=CAU"
                    title="User image"
                />
                 <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <span> {customer.userName}</span>
                
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <b>Id:</b> {customer.userId}<br/> 
                    <b>Email:</b> {customer.email}<br/> 
                    <b>Password:</b> {customer.password}<br/>
                    <b>Mobile:</b> {customer.mobile}<br/>
                    <b>Address:</b> {customer.address}<br/>                    
                </Typography>
                </CardContent>
            </CardActionArea>
            
                </Card>
                 
                 
                 
                 
                 
                 
                 
                    </div> }
         </div>
     )
 }
 
 export default ViewUser
 