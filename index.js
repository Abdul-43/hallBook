// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
const app = express();
import bookingRouter from './routes/booking.route.js'
import roomRouter from './routes/room.route.js'


const PORT = 4000;
const MONGO_URL = "mongodb://127.0.0.1";
const client = new MongoClient(MONGO_URL); // phone dial// top-level await
await client.connect(); // call button
console.log("Mongo is connected ✌️😊");

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

// const Hall = [{
//   "id": "1",
//   "roomID": "200",
//   "roomName": "Oneplus",
//   "customerName":"Abdul",
//   "date":new Date("2022-10-15"),
//   "startTime":"10:00",
//   "endTime":"12:00",
//   },
//   {
//     "id": "2",
//     "roomID": "201",
//     "roomName": "Redmi",
//     "customerName":"Ashok",
//     "date":new Date("2022-10-13"),
//     "startTime":"08:00",
//     "endTime":"12:00",
//     },
//     {
//         "id": "3",
//         "roomID": "202",
//         "roomName": "Oppo",
//         "customerName":"Prasanna",
//         "date":new Date("2022-10-14"),
//         "startTime":"12:00",
//         "endTime":"20:00",
//         }
//   ]

app.use(express.json())
app.use('/booking', bookingRouter)
app.use('/room', roomRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client}
