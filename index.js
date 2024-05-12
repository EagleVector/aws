import express from "express"

const app = express();
const PORT = 3000;

// Defining a route
app.get('/', (req, res) => {
  res.send('Congratulations HHLD Folks! We are in automated ECS setup. This is so COOL');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('ECS Demo is healthy')
})

// Starting the server
app.listen(PORT, () => {
  console.log(`Server started listening on http://localhost:${PORT}`);
})
