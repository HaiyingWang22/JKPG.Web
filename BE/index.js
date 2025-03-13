const express = require('express');
const cors = require('cors');
const Store = require('./storeModel');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


// Middleware
app.use(express.json());
app.use(cors());//Allow cross-domain requests


// get all stores
app.get('/api/stores', async (req, res) => {
  try {
      const stores = await Store.find();
      res.json(stores);
  } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// get store by name
app.get('/api/store', async (req, res) => {
  try {
      const name = req.query.name;
      const store = await Store.find({ name: new RegExp(name, 'i') });
      // use regular expression to prevent users from mistyping. 
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
      if (store) {
          res.json(store);
      } else {
          res.json({ message: 'not exist' });//didn't find 
      }
      
  } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// delete store by id
app.delete('/api/stores', async (req, res) => {
  try {
    const { id } = req.body;
    const deletedStore = await Store.findOneAndDelete({ _id: id });
    if (deletedStore) {
       res.json({ message: deletedStore.name+' '+'deletion successful' });
    }else{
       res.json({ message: 'not exist' });//didn't find 
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// change store by id
app.patch('/api/stores', async (req, res) => {
  try {
    //...updateFields contains random content that may be name and url or just name
    const { id, ...updateFields } = req.body;
    if (!id) {
      return res.status(400).json({ message: "miss store id" });
    }else{
      const updatedStore = await Store.findByIdAndUpdate({ _id: id }, updateFields);
      if (updatedStore) {
        res.json({
          message: updatedStore.name+" update sccucessful",
        });
      }else{
        res.json({ message: 'not exist' });//didn't find 
      }
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//add new store
app.post('/api/stores', async (req, res) => {
  try {
    const { name, url, district } = req.body;
    const newStore = new Store({ name, url, district });
    await newStore.save();
    res.json({ message: "successful add "+newStore.name });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});