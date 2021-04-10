

const initialState = {
    hotels : [
       
    ],
    message : ''
}

const reducer = (state = initialState, { type, payload }) => {

    console.log(type);
    switch (type) {
        
    case "FIND_HOTELS" :
        return {hotels : payload,message:''}

    // case "FIND_USER" :
    //         return {users : payload,updateUser : payload.user}

    case "ADD_HOTEL":
        return {hotels: state.hotels,message:payload.message}

    case "DELETE_HOTEL":
        var filteredList = state.hotels.filter((hotel)=> hotel.hotelId !== payload.hotel.hotelId)
        return {hotels: filteredList,message:''}

    case "UPDATE_HOTEL":
        console.log(payload.message)
            return {hotels: state.hotels,message:payload.message}

            case "FIND_ROOMDETAILS" :
                return {roomdetails : payload,message:''}
        
            // case "FIND_USER" :
            //         return {users : payload,updateUser : payload.user}
        
            case "ADD_ROOMDETAILS":
                return {roomdetails: payload.data}
        
            case "DELETE_ROOMDETAILS":
                var roomList = state.roomdetails.filter((roomdetails)=> roomdetails.roomId !== payload.roomdetails.roomId)
                return {roomdetails: roomList,message:''}
        
            case "UPDATE_ROOMDETAILS":
                console.log(payload.message)
                    return {roomdetails: state.roomdetails,message:payload.message}    
                    
                    case "FIND_USERS" :
        return {users : payload,message:''}

    // case "FIND_USER" :
    //         return {users : payload,updateUser : payload.user}

    case "ADD_USER":
        return {users: state.users,message:payload.message}

    case "DELETE_USER":
        var userList = state.hotels.filter((user)=> user.userId !== payload.user.userId)
        return {users: userList,message:''}

    case "UPDATE_USER":
        console.log(payload.message)
            return {users: state.users,message:payload.message}

            case "FIND_BOOKINGDETAILS" :
                return {bookingdetails : payload,message:''}
        
            // case "FIND_USER" :
            //         return {users : payload,updateUser : payload.user}
        
            case "ADD_BOOKINGDETAILS":
                return {bookingdetails: state.bookingdetails,message:payload.message}
        
            case "DELETE_BOOKINGDETAILS":
                var bookingList = state.bookingdetails.filter((bookingDetails)=> bookingDetails.bookingId !== payload.bookingDetails.bookingId)
                return {bookingdetails: bookingList,message:''}
        
            case "UPDATE_BOOKINGDETAILS":
                console.log(payload.message)
                    return {bookingdetails: state.bookingdetails,message:payload.message}

            
             case "ADD_PAYMENT":
                return {payments: state.payments,message:payload.message}

                case "ADD_TRANSACTION":
                    return {Transactions: state.Transactions,message:payload.message}
    
    default:
        return state
    }
}

export default reducer