   // backend/config/env.js
   require('dotenv').config(); // Load environment variables from .env file

   const config = {
     PORT: process.env.PORT || 5000,
     DB_URI: process.env.DB_URI,
     // Add other environment variables as needed
   };

   module.exports = { config };
   