const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log(`Test DB connected: ${uri}`);

  return {
    close: async () => {
      await mongoose.disconnect();
      await mongoServer.stop();
    }
  };
};