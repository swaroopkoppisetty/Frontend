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
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
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
            <Link to="/admin/booking" className={classes.dropdownLink}>
              View Bookings
            </Link>,
             <Link to="/admin/user" className={classes.dropdownLink}>
             View Users
           </Link>,
           <Link to="/admin/addhotel" className={classes.dropdownLink}>
           Add Hotel
         </Link>,
          <Link to="/admin/addroom" className={classes.dropdownLink}>
          Add Room
        </Link>,
        <Link to="/admin/viewroom" className={classes.dropdownLink}>
        View Room
      </Link>
      
            // <a
            //   href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   Documentation
            // </a>
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
           
            <Button onClick={handleLogout}>
              LogOut
            </Button>
            
          ]}

       />
        
      </ListItem>
      
      
      
      
    </List>
  );
}
