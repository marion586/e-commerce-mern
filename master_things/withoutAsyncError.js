const express = require("express");

const app = express();

const getUserFromDB = async (userId) => {
  if (userId === 1) {
    throw new Error("Database error");
  }

  return {
    id: userId,
    name: "Marion menye",
  };
};

app.get("/user/:id", async (req, res) => {
  try {
    const user = await getUserFromDB(parseInt(req.params.id));
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3008, () => {
  console.log("Server running on port 3008");
});
