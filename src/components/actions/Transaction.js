
const saveTransactions = () =>{

    return {type : "ADD_TRANSACTIONS",payload : {message : "Successfully added TRANSACTION"}}

}

export const addtransactions = (id,amount) =>{
   
    var Transaction = {
      
        amount: amount,
      
        payments: {
          paymentId: id
      } 
    } 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Transaction)
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/transaction', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveTransactions())
                }
            })
}}

const findTransactions = (payload) =>{
    return {type : "FIND_Transactions",payload}
}

export const fetchTransaction = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8082/api/v1/transactions', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findTransactions(data));
            })
        
    }

}




