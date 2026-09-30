import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
  res.send('Bingwa Events & Media API is active');
});

// Example API endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is fully operational' });
});

app.listen(PORT, () => {
  console.log(`[Bingwa Backend] Running on http://localhost:${PORT}`);
});