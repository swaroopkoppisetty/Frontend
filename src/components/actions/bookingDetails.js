
const saveBookingDetails = () =>{

    return {type : "ADD_BookingDetails",payload : {message : "Successfully added booking"}}

}

export const addBookingDetails = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/bookingdetails', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBookingDetails())
                }
            })
}}

const findBookingDetails = (payload) =>{
    return {type : "FIND_BOOKINGDETAILS",payload}
}

export const fetchBookingDetails = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/bookingdetails', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBookingDetails(data));
            })
        
    }

}

const removeBookingDetails = (payload) =>{

    return {type : "DELETE_BOOKINGdETAILS",payload}

}

export const deleteBookingDetails = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8082/api/v1/bookingdetails/" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted booking details'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeBookingDetails({BookingDetails : data,message}))
            })
            
}}




const updateBookingDetails = () =>{
console.log('inside update booking details')
    return {type : "UPDATE_BOOKINGDETAILS",payload : {message : "Successfully updated booking details"}}

}

export const EditBookingDetails = (payload) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/bookingdetails' , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateBookingDetails())
                }
            })
}}
