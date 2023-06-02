import { model, Schema } from "mongoose";

const movieDetailsSchema = new Schema(
    {
        "title": {
            "type": "String"
        },
        "year": {
            "type": "Number"
        },
        "rated": {
            "type": "String"
        },
        "runtime": {
            "type": "Number"
        },
        "countries": {
            "type": [
                "String"
            ]
        },
        "genres": {
            "type": [
                "String"
            ]
        },
        "director": {
            "type": "String"
        },
        "writers": {
            "type": [
                "String"
            ]
        },
        "actors": {
            "type": [
                "String"
            ]
        },
        "plot": {
            "type": "String"
        },
        "poster": {
            "type": "String"
        },
        "imdb": {
            "id": {
                "type": "String"
            },
            "rating": {
                "type": "Number"
            },
            "votes": {
                "type": "Number"
            }
        },
        "tomato": {
            "meter": {
                "type": "Number"
            },
            "image": {
                "type": "String"
            },
            "rating": {
                "type": "Number"
            },
            "reviews": {
                "type": "Number"
            },
            "fresh": {
                "type": "Number"
            },
            "consensus": {
                "type": "String"
            },
            "userMeter": {
                "type": "Number"
            },
            "userRating": {
                "type": "Number"
            },
            "userReviews": {
                "type": "Number"
            }
        },
        "metacritic": {
            "type": "Number"
        },
        "awards": {
            "wins": {
                "type": "Number"
            },
            "nominations": {
                "type": "Number"
            },
            "text": {
                "type": "String"
            }
        },
        "type": {
            "type": "String"
        }
    }
    ,
    { collection: "movieDetails" }
);


// Mongoose erstellt automatisch collection Namen
// MovieDetail --> moviedetails

// wenn wir im Schema ein zweites object (options) 
// übergeben können wir den Collection Name angeben

export const MovieDetail = model("MovieDetail", movieDetailsSchema);

// export default MovieDetail;