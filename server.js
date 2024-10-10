const express = require('express');
var cors = require('cors')
const path = require('path');
const app = express();
const PORT = 8000;

app.use(cors())
// Servire file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, ''), {extensions: ['html']}));

// Aggiungi una route per la root (/)
app.get('/', cors(), (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/prodotti/osteocom',cors(), (req, res) => {
    res.sendFile(path.join(__dirname, 'prodotti', 'osteocom', 'osteocom.html'));
});



// Avvia il server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
