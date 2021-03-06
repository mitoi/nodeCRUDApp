
(async function App(){
    const Database = require('./database/database');
    const Model = require('./models/model');

    let db = new Database('test');
    let connection = await db.connect();

    let productSchema = {
        name: {type: String, required: true, max: 100},
        price: {type: Number, required: true},
    }
    let productModel = new Model (connection, 'products', productSchema)
    //let newProducts = await productModel.create([{name: 'Sony Xperia z3+', price: 10},
    //                                           {name:'Samsung s6 edge', price: 12}]);

    let sonyProducts = await productModel.read({name:/Sam/i});
    console.log(sonyProducts)
})();