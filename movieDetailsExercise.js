import mongoose from "mongoose";
import { MovieDetail } from "./Model/MovieDetail.js";


mongoose.connect("mongodb://127.0.0.1:27017/video")
    .then((connection) => console.log("Connected"));



// -------lvl_1-2_quering-mit-mongoose -------------


// ----------------- 1 ----------------------------- 


const movies1 = await MovieDetail.find(
    { director: "Steven Spielberg" },
    { titel: 1 },
    null);

console.log(movies1);


// ----------------- 2 ----------------------------- 


const movies2 = await MovieDetail.find(
    { "tomato.userReviews": { $gt: 40_000 } },
    null,
    { "tomato.userReviews": -1 },
    { limit: 20 });

// console.log(movies2);


// ----------------- 3 ----------------------------- 


const movies3 = await MovieDetail.find(
    { "year": { $gte: 2000, $lte: 2005 } },
    { title: 1, year: 1 },
    {});

// console.log(movies3);


// ----------------- 4 ----------------------------- 


const movies4 = await MovieDetail.find(
    { "tomato.userRating": { $gte: 4.0 }, year: { $gt: 2010 } },
    { title: 1, director: 1 },
    {});

// console.log(movies4);


// ----------------- 5 ----------------------------- 


const movies5 = await MovieDetail.find(
    { "tomato.userReviews": { $le: 1_000 }, year: { $lt: 2005 } },
    null,
    { "tomato.userReviews": 1 },
    { limit: 10 });

// console.log(movies5);


// ----------------- 6 ----------------------------- 


const movies6 = await MovieDetail.find(
    { tomato: { $exists: false } },
    null,
    null);

// console.log(movies6);


// ----------------- 7 ----------------------------- 


const movies7 = await MovieDetail.find(
    { "imdb.votes": { $lt: 1_000, $gt: 100 } },
    { title: 1, "imdb.rating": 1 },
    null);

// console.log(movies7);


// ----------------- 8 ----------------------------- 


const movies8 = await MovieDetail.find(
    null,
    null,
    { "imdb.rating": -1 });

// console.log(movies8);


// ----------------- 9 ----------------------------- 


const movies9 = await MovieDetail.find(
    null,
    null,
    { "imdb.rating": -1 },
    { limit: 10 });

// console.log(movies9);


// ----------------- 10 ----------------------------- 


const movies10 = await MovieDetail.find(
    { genres: ["Crime", "Drama"] },
    { title: 1, genres: 1 },
    { "imdb.rating": 1 },
);

// console.log(movies10);


// --------------------------------------------------