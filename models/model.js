class Model {
    constructor (db, name, schema){
        this.db = db;
        this.name = name;
        this.schema = schema;
        this.Model = this.db.model(this.name, this.schema);
    }

    async create(data){
        let model = new this.Model(data);
        let result = await model.save();
        return result;
    }

}

module.exports = Model;