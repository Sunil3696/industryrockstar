
const express = require("express");


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/api/user', authRoutes)




// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Error handling 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


