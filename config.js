module.exports = {
  port: process.env.PORT || 3000,
  database: process.env.MONGO_URI || 'mongodb://192.168.10.218:27017/nfp'
};
