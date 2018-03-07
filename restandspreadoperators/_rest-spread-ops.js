const defaultColors = ['red', 'green']; 

const userFavoriteColors = ['orange', 'yellow']; 

const fallColors = ['fire red', 'fall orange']; 

//defaultColors.concat(userFavoriteColors); LOL or...  
[ 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ]; // this is very dope imo
