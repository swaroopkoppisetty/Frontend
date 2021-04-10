/*eslint-disable*/
import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "customer/CustomDropdown/CustomDropdown.js";
import Button from "customer/CustomButtons/Button.js";
import { useAuth } from "views/contexts/AuthContext"
import {useHistory} from "react-router-dom"

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

 
    
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    var user = useAuth().currentUser;
    const history = useHistory();
    async function handleLogout() {
      setError('');
      try {
        await logout();
        history.push('/');
      } catch {
        setError('Failed to log out');
      }
    }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/customer/viewbooking" className={classes.dropdownLink}>
              View Bookings
            </Link>,
             
        <Link to="/customer/addpayment" className={classes.dropdownLink}>
        Add payment
        </Link>
      
            
          ]}

       />
        
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Profile"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
           
            <Link to="/customer/user" className={classes.dropdownLink}>
             User
           </Link>,
            <Button onClick={handleLogout}>
              LogOut
            </Button>
            
          ]}

       />
        
      </ListItem>
      
      
      
      
    </List>
  );
}
