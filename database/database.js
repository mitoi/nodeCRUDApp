const mongoose = require('mongoose');

class Database{
    constructor(dbName, url, port, username, password){
        this.url = url || '127.0.0.1';
        this.port = port || '27017';
        this.dbName = dbName || 'test';
        this.username = username;
        this.password = password;
    }

    async connect(){
        let authString = "";
        if(this.username && this.password){
            authString = this.username + ":" + this.password+"@";
        }
        let connectionString = "mongodb://" + authString + this.url + ":" + this.port + "/" + this.dbName;
        console.log(connectionString)
        let db = await mongoose.createConnection(connectionString,  {useNewUrlParser: true });
        mongoose.Promise = global.Promise;
        db.on('error', (err) => {throw(err)});
        return db;
    }
}

module.exports = Database;