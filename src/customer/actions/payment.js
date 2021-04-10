import { CardActions } from "@material-ui/core";

import *  as actions from './Transaction'

const savePayments = () =>{

    return {type : "ADD_PAYMENTS",payload : {message : "Successfully added payment"}}

}

export const addPayments = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/payment', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(savePayments())
                 }
                return res.json()

            }).then(data=>{
                console.log(data)
               dispatch(actions.addtransactions(data.paymentId,data.bookingDetails.amount))
            })
}}

const findPayments = (payload) =>{
    return {type : "FIND_PAYMENTS",payload}
}

export const fetchPayments = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/payments', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findPayments(data));
            })
        
    }

}




