const app = require("./app"); // Import the configured app
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
