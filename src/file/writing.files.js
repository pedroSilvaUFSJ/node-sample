const fs = require('fs')

const product = {
    name: 'laptop',
    price: '€1005',
    descount: 50.00
}

fs.writeFile(
    __dirname + '/persistData.js',
    JSON.stringify(product),
    err => console.log(err || 'data saved successfully')
)