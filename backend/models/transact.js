const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactSchema = new Schema({
    idtrans:{ type: String, required: true, unique: true, trim: true, minlength: 5},
    FNSender: { type: String, required: true },
    PhoneSender:{ type: String, required: true},
    TownSender: { type: String, required: true},
    CountrySender: { type: String, required: true },
    FNReceiver:{ type: String, required: true},
    PhoneReceiver: { type: String, required: true},
    TownReceiver: { type: String, required: true },
    CountryReceiver:{ type: String, required: true},
    DateSender: { type: Date, required: true },
    DateReceiver: {type: Date },
    Amount: { type: Number, required: true},
    Status: { type: String, required: true }
},
{ timestamps: true });

const Transact = mongoose.model('Transact', transactSchema);

module.exports = Transact;