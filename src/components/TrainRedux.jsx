// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addCustomerAction, removeCustomerAction } from "../store/customerReducer";
// import './TrainRedux.css'

// let TrainRedux = () => {

//     const dispatch = useDispatch()
//     const cash = useSelector( state => state.cashReducer.cash)
//     const customers = useSelector( state => state.customersReducer.customers)

//     console.log(cash);

//     function addCash (cash) {
//         dispatch({type: "ADD_CASH", payload: cash})
//     }

//     function getCash (cash) {
//         dispatch({type: "GET_CASH", payload: cash})
//     }

//     function addCustomer (name) {
//         const customer = {
//             name,
//             id: Date.now(),
//         }
//         dispatch(addCustomerAction(customer))
//     }

//     function removeCustomer (customer) {
//         dispatch(removeCustomerAction(customer.id))
//     }

//     return (
//         <div className="mainBlockRedux">
//             <div className="total"> {cash} </div>
//             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '40vw'}}>
//                 <button onClick={ () => addCash(Number(prompt()))}> Пополнить счет </button>
//                 <button onClick={ () => getCash(Number(prompt()))}> Снять со счета </button>
//                 <button onClick={ () => addCustomer(prompt(customers))}> Добавить клиета</button>
//                 <button onClick={ () => removeCustomer() }> Удалить клиента </button>
//             </div>
//             {customers.length > 0 ?
//                 <div style={{fontSize: '2rem', marginTop: '15px', cursor: 'default'}}>
//                     {customers.map(customer => 
//                         <div onClick={ () => removeCustomer(customer.id)}> {customer.name} </div>
//                     )}
//                 </div>
//                 : 
//                 <div style={{fontSize: '2rem', marginTop: '15px', cursor: 'default'}}>
//                     Клиенты отсутствуют!!
//                 </div>
//             }
//         </div>
//     )
// }

// export default TrainRedux