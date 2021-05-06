class Weather {
  isStormy(){
    return (Math.random()*20) <= 4 ? true : false
  }
}

// w = new Weather;
// console.log(w.isStormy())
