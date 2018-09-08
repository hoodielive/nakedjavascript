function saveFile() {
    $.ajax({ 
        url,
        data,
        method: 'POST',
    }); 
    // remember if you have a key and value with the same name, just leave the value off 
} 

const url = "http://fileupload.com";
const data = { color: 'red' }; 

saveFile(url, data); 

