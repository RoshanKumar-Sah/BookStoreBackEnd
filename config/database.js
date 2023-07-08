const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mail4sahrs:ZS12sNTHQjm2ctbr@bookstore.yvtyfxl.mongodb.net/BookStore?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));