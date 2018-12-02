class Model {
    constructor (db, name, schema){
        this.db = db;
        this.name = name;
        this.schema = schema;
        this.Model = this.db.model(this.name, this.schema);
    }

    create(data){
        
    }

}

module.exports = Model;