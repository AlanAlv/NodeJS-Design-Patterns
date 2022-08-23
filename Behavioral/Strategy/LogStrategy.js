let path = require('path');
let { appendFile } = require('fs')

class LogStrategy {

    static noDate(timestamp, message){
        console.log(message);
    }

    static toFile(timestamp, message){
        let filename = path.join(__dirname, 'logs.txt');
        appendFile(filename, `${timestamp} - ${message} \n`, error => {
            console.log('Error writing to file');
            console.log(error);
        })
    }

    static toConsole(timestamp, message){
        console.log(`${timestamp} - ${message}`);
    }

    static none(){
        
    }
}

module.exports = LogStrategy;