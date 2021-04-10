
const saveRoomDetails = () =>{

    return {type : "ADD_ROOMDETAILS",payload : {message : "Successfully added a room"}}

}

export const addRoomDetails = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/roomdetails', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveRoomDetails())
                }
            })
}}

const findRoomDetails = (data) =>{
    return {type : "FIND_ROOMDETAILS",payload:(data)}
}

export const fetchRoomDetails = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/roomdetails', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findRoomDetails(data));
            })
        
    }

}

const removeRoomDetails = (payload) =>{

    return {type : "DELETE_ROOMDETAILS",payload}

}

export const deleteRoomDetails = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8082/api/v1/roomdetails/" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted room'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeRoomDetails({roomdetails : data,message}))
                dispatch(fetchRoomDetails())
                
            })
            
}}


// const findUser = (user) =>{
//     return {type : "FIND_USER",payload : {user}}
// }

// export const fetchUser = (id) => {

//     const requestOptions = {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         fetch('http://localhost:8080/api/v1/users/'+id, requestOptions)
//             .then(res => {
//                 console.log(res);
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 dispatch(findUser(data));
//             })
        
//     }

// }

const updateRoomDetails = () =>{
console.log('inside update room')
    return {type : "UPDATE_ROOMDETAILS",payload : {message : "Successfully updated room"}}

}

export const EditRoomDetails = (payload) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/roomdetails' , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateRoomDetails())
                }
            })
}}
