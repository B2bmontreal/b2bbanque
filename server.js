const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simuler une base de données
let balance = 8568000;  // Solde initial
let transactions = [];  // Historique des transactions

// Récupérer le solde
app.get('/solde', (req, res) => {
  res.json({ balance });
});

// Récupérer l'historique des transactions
app.get('/historique', (req, res) => {
  res.json(transactions);
});

// Effectuer un virement
app.post('/virement', (req, res) => {
  const { amount, recipient } = req.body;
  
  if (amount <= 0 || !recipient) {
    return res.status(400).json({ message: 'Montant ou destinataire invalide' });
  }
  
  // Mettre à jour le solde
  balance -= amount;
  
  // Ajouter la transaction à l'historique
  const transaction = {
    date: new Date().toLocaleDateString(),
    type: 'Virement',
    amount: amount,
    recipient: recipient
  };
  transactions.push(transaction);

  // Répondre à la requête
  res.json({ message: 'Virement effectué avec succès' });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
