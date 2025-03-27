const express = require("express");
const app = express();

// Middleware qui transforme les fonctions asynchrones en middleware Express
const asyncHandler = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};

// Fonction asynchrone pour récupérer un utilisateur
const getUserFromDB = async (userId) => {
  // Simule une erreur de base de données
  if (userId === 1) {
    throw new Error("Database Error");
  }
  return { id: userId, name: "John Doe" };
};

app.get(
  "/user/:id",
  asyncHandler(async (req, res, next) => {
    const user = await getUserFromDB(parseInt(req.params.id));
    res.json(user);
  })
);

// Middleware d'erreur pour attraper toutes les erreurs
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong!" });
});
// Démarrer le serveur
app.listen(3008, () => {
  console.log("Server running on port 3008");
});
