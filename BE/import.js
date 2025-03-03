const Store = require('./storeModel');
const fs = require('fs');

async function importData() {
    try {
        const stores = JSON.parse(fs.readFileSync('stores.json', 'utf-8'));

        await Store.deleteMany({});
        console.log('clean old data');

        await Store.insertMany(stores);
        console.log('import success');

        process.exit();
    } catch (err) {
        console.error('import fail', err);
    }
}

importData();