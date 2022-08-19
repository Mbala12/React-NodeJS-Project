import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = () =>{
    //toast.success('Success', { position: toast.POSITION.BOTTOM_RIGHT });
    toast.info('Success', { position: toast.POSITION.TOP_CENTER});
    
    //window.location = '/';
}

export default class CreateTransaction extends Component{

    constructor(props){
        super(props);

        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeCountryReceiver = this.onChangeCountryReceiver.bind(this);
        this.onChangeTownReceiver = this.onChangeTownReceiver.bind(this);
        this.onChangePhoneReceiver = this.onChangePhoneReceiver.bind(this);
        this.onChangeFNameReceiver = this.onChangeFNameReceiver.bind(this);
        this.onChangeCountrySender = this.onChangeCountrySender.bind(this);
        this.onChangeTownSender = this.onChangeTownSender.bind(this);
        this.onChangePhoneSender = this.onChangePhoneSender.bind(this);
        this.onChangeFNameSender = this.onChangeFNameSender.bind(this);
        this.onChangeDateSender = this.onChangeDateSender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            FNSender: '',
            PhoneSender: '',
            TownSender: '',
            CountrySender: '',
            FNReceiver: '',
            PhoneReceiver: '',
            TownReceiver: '',
            CountryReceiver: '',
            DateSender: new Date(),
            Amount: 0
        }
    }

    onChangeFNameSender = (e) =>{
        this.setState({ FNSender: e.target.value });
    }
    onChangePhoneSender = (e) =>{
        this.setState({ PhoneSender: e.target.value });
    }
    onChangeTownSender = (e) =>{
        this.setState({ TownSender: e.target.value });
    }
    onChangeCountrySender = (e) =>{
        this.setState({ CountrySender: e.target.value });
    }
    onChangeFNameReceiver = (e) =>{
        this.setState({ FNReceiver: e.target.value });
    }
    onChangePhoneReceiver = (e) =>{
        this.setState({ PhoneReceiver: e.target.value });
    }
    onChangeTownReceiver = (e) =>{
        this.setState({ TownReceiver: e.target.value });
    }
    onChangeCountryReceiver = (e) =>{
        this.setState({ CountryReceiver: e.target.value });
    }
    onChangeDateSender = (date) =>{
        this.setState({ DateSender: date });
    }
    onChangeAmount = (e) =>{
        this.setState({ Amount: e.target.value });
    }
   

    onSubmit = (e) =>{
        //const URI = 'http://localhost:5000/transact/add';
        e.preventDefault();
        const transaction = {
            FNSender: this.state.FNSender,
            PhoneSender: this.state.PhoneSender,
            TownSender: this.state.TownSender,
            CountrySender: this.state.CountrySender,
            FNReceiver: this.state.FNReceiver,
            PhoneReceiver: this.state.PhoneReceiver,
            TownReceiver: this.state.TownReceiver,
            CountryReceiver: this.state.CountryReceiver,
            DateSender: this.state.DateSender,
            Amount: this.state.Amount
        }
        
        console.log(transaction);

        axios.post('http://localhost:5000/trans/add', transaction)
             .then(res => console.log(res.data));

        //toast.info('Success', { position: toast.POSITION.TOP_CENTER});

        window.location = '/';
    }

    render(){
        return(
            <div >
                <h2>Send Money</h2>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6">
                        <label>Sender Full Name: </label>
                        <input type="text" className="form-control" value={this.state.FNSender} onChange={this.onChangeFNameSender} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Sender Phone No.: </label>
                        <input type="text" className="form-control" value={this.state.PhoneSender} onChange={this.onChangePhoneSender} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Sender Origin Town: </label>
                        <input type="text" className="form-control" value={this.state.TownSender} onChange={this.onChangeTownSender} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Sender Origin Country: </label>
                        <input type="text" className="form-control" value={this.state.CountrySender} onChange={this.onChangeCountrySender} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Receiver Full Name: </label>
                        <input type="text" className="form-control" value={this.state.FNReceiver} onChange={this.onChangeFNameReceiver} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Receiver Phone No.: </label>
                        <input type="text" className="form-control" value={this.state.PhoneReceiver} onChange={this.onChangePhoneReceiver} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Receiver Origin Town: </label>
                        <input type="text" className="form-control" value={this.state.TownReceiver} onChange={this.onChangeTownReceiver} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Receiver Origin Country: </label>
                        <input type="text" className="form-control" value={this.state.CountryReceiver} onChange={this.onChangeCountryReceiver} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Sending Date: </label>
                        <div className="input-group">
                            <DatePicker selected={this.state.DateSender} onChange={this.onChangeDateSender} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Sending Amount: </label>
                        <input type="text" className="form-control" value={this.state.Amount} onChange={this.onChangeAmount} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="submit" value="Submit" className="btn btn-success" onClick={notify} /> 
                    </div>
                </form>
            </div>
        )
    }
}