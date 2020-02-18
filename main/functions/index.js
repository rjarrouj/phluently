const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
require('dotenv').config();
const app = express();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const cors = require('cors')({origin: true});
const moment = require('moment');
admin.initializeApp();

exports.CheckoutSession = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const token = request.body.stripeToken
    let amount = request.body.amount;
    let email = request.body.email;

    stripe.customers.create({
      email: request.body.email,
      card: token.id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: email + " has made Payment for his Job",
        currency: "usd",
        customer: customer.id
      }))
      .then(charge => response.send(charge))
      .catch(err => {
        console.log("Error:", err);
        response.status(500).send({error: "Purchase Failed"});
    });
  })
})

// Auto Cancel or Auto Complete Job
// exports.scheduledFunction = functions.pubsub.schedule('every 1 minutes').onRun((context) => {
//   const jobs = admin.database().ref('jobs').orderByKey('status').equalTo('active').once('value');
//   return jobs.then(results => {
//     results.forEach(job => {
//       let jobDate = job.date + ' ' + job.end_time;
//       let date = moment(jobDate);
//       let date2 = new Date();
//       var year = date2.getFullYear();
//       var month = date2.getMonth()+1; 
//       var day = date2.getDate();
//       var hour = date2.getHours();
//       var minute = date2.getMinutes();

//       var check = year+' '+month+' '+day+' '+hour+':'+minute; 
//       var currentDate = moment(check);

//       var duration = moment.duration(date.diff(currentDate));
//       var hours = duration.asHours().toFixed(2);
//       console.log(job)
//       console.log(hours)
//       // if(hours < 24.00) {
//       //    Late
//       //     this.late = true;
//       // }
//       // else {
//       //    Not Late
          
//       // }
//     });
//   });
// });