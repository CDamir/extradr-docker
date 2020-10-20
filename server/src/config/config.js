const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGO_URI +
    process.env.MONGO_HOST +
    ":" +
    process.env.MONGO_PORT +
    "/" +
    process.env.MONGO_DB_NAME,
    dbUri: 'mongodb+srv://extradr-admin:damir123@cluster0.btow8.mongodb.net/extradr-dev?retryWrites=true&w=majority'
};
export default config;
