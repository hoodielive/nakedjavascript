var savedFile = {
    extension: 'jpg', 
    name: 'repost',
    size: 14040
}; 

function fileSummary({ name, extension, size }, { color } ) {
    return `The file ${name}.${extension} is of size ${size}`; 
}

fileSummary(savedFile); 

