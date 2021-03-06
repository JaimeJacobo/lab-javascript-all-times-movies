/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movieArray){

    return movieArray.map((movieObject)=>{
  
    let durationArray = movieObject.duration.split(' ');
    let hours = durationArray[0][0]
    let howManyDigitsMinutes =  durationArray[1].length - 3
    let minutes = durationArray[1].substr(0, howManyDigitsMinutes)
    let totalDuration =  Number(hours)*60 + Number(minutes)
    let newMovie = movieObject;
    newMovie.duration =  totalDuration.toString();
  
    return newMovie;
  
    })
  }
  
  turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 

let ratesAverage = movies.reduce((constAcc, eachObject)=>{

    let sum = constAcc + Number(eachObject.rate)
    return sum
    
      },0)
    
      console.log((ratesAverage / movies.length).toFixed(2));


// Get the average of Drama Movies

let dramaMoviesRate = movies.reduce((constAcc, eachObject)=>{

    if ((eachObject.genre).includes('Drama')) {
         sum = constAcc + eachObject.rate;
         return sum;
        } 
        
        
    },0)
    
    console.log(dramaMoviesRate)


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
