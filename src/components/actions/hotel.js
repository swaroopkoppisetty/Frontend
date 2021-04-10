
const saveHotel = () =>{

    return {type : "ADD_HOTEL",payload : {message : "Successfully added hotel"}}

}

export const addHotel = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/hotel', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveHotel())
                }
            })
}}

const findHotel = (payload) =>{
    return {type : "FIND_HOTELS",payload}
}

export const fetchHotels = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/hotel', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findHotel(data));
            })
        
    }

}

const removeHotel = (payload) =>{

    return {type : "DELETE_HOTEL",payload}

}

export const deleteHotel = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8082/api/v1/hotel/" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted hotel'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeHotel({hotel : data,message}))
                dispatch(fetchHotels())
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

const updateHotel = () =>{
console.log('inside update hotel')
    return {type : "UPDATE_HOTEL",payload : {message : "Successfully updated hotel"}}

}

export const EditHotel = (payload) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/hotel' , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateHotel())
                }
            })
}}
