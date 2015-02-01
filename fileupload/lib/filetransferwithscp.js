/**
 * Created by prrathore on 1/13/15.
 */

var client = require('scp2');
var fs = require('fs');

client.defaults({
    port: 22,
    host: 'hostname',
    username: 'username',
    privateKey: fs.readFileSync('privateKeyPath')
});

client.upload('/Users/prrathore/temp/DEVELOPMENT-application.properties', '/x/home/prrathore/temp/application-dev-scp.txt', function(err) {

    if(err) {
        console.log("File upload failed: " + err);
        client.close();
    }

    console.log("file moved to server successfully!!");
    client.close();
});

client.on('connect', function() {
    console.log("Connected!!");
});

client.on('ready', function() {
    console.log("Ready for file transfer!!");
});

client.on('error', function() {
    console.log("Some error occurred!!");
});

client.on('end', function() {
    console.log("Socket connection closed/ended!!");
});

client.on('mkdir', function(dir) {
    console.log("Directory created: " + dir);
});

//No need to print this callback as it has very verbose output when we print buffer
//client.on('transfer', function(buffer, uploaded, total) {
//    console.log("Transferred: " + buffer + " : " + uploaded + " : " + total);
//});

client.on('close', function() {
    console.log("Session closed!!");
});







