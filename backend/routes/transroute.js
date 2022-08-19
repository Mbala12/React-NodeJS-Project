const router = require('express').Router();

let Transactions = require('../models/transact');

router.route('/').get((req, res) =>{
    Transactions.find()
        .then(transact => res.json(transact))
        .catch(err => res.status(400).json('Error: ' +err));
});

const getRandonNumber = (min, max) =>{
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) +  min;
    return result;
}

router.route('/add').post((req, res)=>{
    const FNSender = req.body.FNSender;
    const PhoneSender = req.body.PhoneSender;
    const TownSender = req.body.TownSender;
    const CountrySender = req.body.CountrySender;
    const FNReceiver = req.body.FNReceiver;
    const PhoneReceiver = req.body.PhoneReceiver;
    const TownReceiver = req.body.TownReceiver;
    const CountryReceiver = req.body.CountryReceiver;
    const DateSender = Date.parse(req.body.DateSender);
    const Amount = Number(req.body.Amount);
    const Status = 'Pending';
    const DateReceiver = '';
    const code = FNSender.substr(0,1)+''+FNReceiver.substr(0,1)+''+getRandonNumber(100, 9999);
    const idtrans = code;
    
    const newTrans = new Transactions({idtrans, FNSender, PhoneSender, TownSender, CountrySender,
                                       FNReceiver, PhoneReceiver, TownReceiver, CountryReceiver, 
                                       DateSender, DateReceiver, Amount, Status});
    newTrans.save()
            .then(() => res.json('Transaction added'))
            .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req, res)=>{
    Transactions.findById(req.params.id)
                .then(transact => res.json(transact))
                .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) =>{
    Transactions.findByIdAndDelete(req.params.id)
                .then(() => res.json('Transaction has been deleted successfully'))
                .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req, res) =>{
    Transactions.findById(req.params.id)
                .then(transact =>{
                    transact.DateReceiver = Date.parse(req.body.DateReceiver);
                    transact.Status = 'Approved';
                    transact.FNSender = req.body.FNSender;
                    transact.PhoneSender = req.body.PhoneSender;
                    transact.TownSender = req.body.TownSender;
                    transact.CountrySender = req.body.CountrySender;
                    transact.FNReceiver = req.body.FNReceiver;
                    transact.PhoneReceiver = req.body.PhoneReceiver;
                    transact.TownReceiver = req.body.TownReceiver;
                    transact.CountryReceiver = req.body.CountryReceiver;
                    transact.DateSender = Date.parse(req.body.DateSender);
                    transact.Amount = Number(req.body.Amount);
                    transact.save()
                         .then(() => res.json('Transaction has been successfully updated'))
                         .catch(err => res.status(400).json('Error: '+err));
                })
                .catch(err => res.status(400).json('Error: '+err));
})

module.exports = router;

