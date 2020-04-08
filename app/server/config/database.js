import mongoose from 'mongoose';

import CONFIG from './config';

/**
 * Configure database
 */
const configureDatabase = async () => {
  // set MongoDB options
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  // configure MongoDB connection
  try {
    mongoose.connect(CONFIG.mongo_db_uri, options);
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.error(`Unable to connect to MongoDB: ${err}`);
    // exit process with failure
    process.exit(1);
  }
};

export default configureDatabase;
