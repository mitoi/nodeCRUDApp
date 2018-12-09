class Model {
    constructor (db, name, schema){
        this.db = db;
        this.name = name;
        this.schema = schema;
        this.Model = this.db.model(this.name, this.schema);
    }

    async create(data){
        let result = [];
        let createData = typeof data == "object" ? [data] : data;
        if(createData.length && createData.length > 0){
            for(let cdata of createData){
                let model = new this.Model(data);
                result.push(await model.save());
            }
        }

        return result;
    }

    async read(conditions, options){
        return await this.Model.find(conditions, null, options);
    }

    async update (conditions, newData){
        return await this.Model.update(conditions, newData);
    }

    async delete (conditions){
        return await this.Model.deleteMany(conditions);
    }

}

module.exports = Model;