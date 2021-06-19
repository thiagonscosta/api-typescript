import mongoose from 'mongoose';
import config from './config/config';

mongoose.connect(config.db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongodb connection successfully')
});

connection.on('error', err => {
  console.log(err);
  process.exit(0);
});