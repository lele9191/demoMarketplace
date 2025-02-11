import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors())
const PORT = 8000;
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
