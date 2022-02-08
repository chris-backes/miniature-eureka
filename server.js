const express = require('express');
//established local port if not being hosted on internet
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes/notes');
const htmlRoutes = require('./routes/htmlRoutes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//grabs routes to load page and interact with the database
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//establishes port connection, lets owner know connection has been established
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});