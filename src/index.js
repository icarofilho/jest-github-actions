const app = require('./app')

const port = process.env.PORT || 3000
const urlDB = process.env.URL_BD || '';

app.listen(port, () => {
  console.log(`🚀Server is running on port ${port}`);
})