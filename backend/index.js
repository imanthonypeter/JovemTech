require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const { connectDB, sequelize } = require('./config/db');

require('./models/Usuario');
require('./models/Vaga');
require('./models/Candidatura');

connectDB().then(() => {
  sequelize.sync({ alter: true }).then(() => console.log('Modelos sincronizados.'));
});

app.use(cors());
app.use(express.json());

const vagasRoutes = require('./routes/vagas');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');

app.use('/api/vagas', vagasRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
