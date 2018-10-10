// function that tells the current time 

function getTime() { 
  const date = new Date(); 
  return console.log(date.getHours() + ':' + date.getMinutes()); 
}

getTime();
