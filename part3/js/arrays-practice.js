//STEP 01
var movies = ["Parasite", "Joker", "Avengers", "Avatar", "Notebook"];
window.console.log(movies[1]);

//STEP 02

var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
window.console.log(movies[0]);


//STEP 03

var movies = ["Parasite", "Joker", "Avengers", "Avatar", "Notebook"];
movies[movies.length] = "The Namesake";
window.console.log(movies.length);

//STEP 04

var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
delete movies[0];
window.console.log(movies);


//STEP 05
var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
movies[5] = "The Namesake";
movies[6] = "Halloween";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 06

var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
movies[5] = "The Namesake";
movies[6] = "Halloween";

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 07
var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
movies[5] = "The Namesake";
movies[6] = "Halloween";
movies.sort();

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

//STEP 08
var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
movies[5] = "The Namesake";
movies[6] = "Halloween";

window.console.log("Movies I like:\n\n");
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var leastFavMovies = [];
leastFavMovies[0] = "Hollywood";
leastFavMovies[1] = "Hidden Figures";
leastFavMovies[2] = "Into the wild";

window.console.log("\n\nMovies I regret watching:\n\n");
var element;
for (element in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(element)) {
        window.console.log(leastFavMovies[element]);
    }
}

//STEP 09

var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
movies[5] = "The Namesake";
movies[6] = "Halloween";

var leastFavMovies = [];
leastFavMovies[0] = "Hollywood";
leastFavMovies[1] = "Hidden Figures";
leastFavMovies[2] = "Into the wild";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 10

var movies = [];
movies[0] = "Parasite";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Avatar";
movies[4] = "Notebook";
movies[5] = "The Namesake";
movies[6] = "Halloween";

var leastFavMovies = [];
leastFavMovies[0] = "Hollywood";
leastFavMovies[1] = "Hidden Figures";
leastFavMovies[2] = "Into the wild";

movies = movies.concat(leastFavMovies);
window.console.log(movies.pop());
