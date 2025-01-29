const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Permet l'accès depuis d'autres domaines (CORS)
app.use(express.json()); // Pour analyser les corps de requêtes JSON

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue à B2B Banque!');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
