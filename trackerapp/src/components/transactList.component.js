import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Transaction = props =>(
    <tr>
        <td>{ props.transaction.idtrans }</td>
        <td>{ props.transaction.FNSender }</td>
        <td>{ props.transaction.PhoneSender }</td>
        <td>{ props.transaction.FNReceiver }</td>
        <td>{ props.transaction.PhoneReceiver }</td>
        <td>{ props.transaction.DateSender.substring(0, 10) }</td>
        <td>{ props.transaction.Amount }</td>
        <td>{ props.transaction.DateReceiver.substring(0, 10) }</td>
        <td>{ props.transaction.Status }</td>
        {/* <td>
            <Link to={"/edit/" +props.transaction._id } >Edit</Link> | <a href="#" onClick={() => { props.deleteTransaction(props.transaction._id)}}>Delete</a>
        </td> */}
    </tr>
)


export default class TransactList extends Component{
    constructor(props){
        super(props);
        this.deleteTransaction = this.deleteTransaction.bind(this);
        this.state = {
            transactions: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/trans/')
             .then(response => {
                 this.setState({
                     transactions: response.data
                 })
             })
             .catch(error =>{
                 console.log(error);
             })
    }

    deleteTransaction = (id) =>{
        axios.delete('http://localhost:5000/trans/'+id)
             .then(res => console.log(res.data));
        this.setState({
            transactions: this.state.transactions.filter(element => element._id !== id)
        })
    }

    TransactList(){
        return this.state.transactions.map(currentTransaction => {
            return <Transaction transaction = { currentTransaction } deleteTransaction = { this.deleteTransaction } key = { currentTransaction._id } />
        })
    }

    render(){
        return(
            <div >
                <h3>All Transactions</h3>
                <hr />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>S. Name</th>
                            <th>S. Phone No.</th>
                            <th>R. Name</th>
                            <th>R. Phone No.</th>
                            <th>S. Date</th>
                            <th>Amount</th>
                            <th>R. Date</th>
                            <th>Status</th>
                           {/*  <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { this.TransactList()}
                    </tbody>
                </table>
            </div>
        )
    }
}