
const admin = require("firebase-admin");

// Firebase Admin SDK service account credentials
const serviceAccount = require("../../rock-star-tools-25g0k7-firebase-adminsdk-4hauj-fae7cada48.json"); // Update the path to your service account file

// Initialize Firebase Admin SDK
if (!admin.apps.length) { // Prevent reinitialization
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rock-star-tools-25g0k7-default-rtdb.firebaseio.com/", 
  });
}

// Export the initialized admin object
module.exports = admin;