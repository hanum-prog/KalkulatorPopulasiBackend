const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk menghitung pertumbuhan populasi
app.post('/calculate', (req, res) => {
    const { initialPopulation, growthRate, years } = req.body;

    // Validasi input
    if (!initialPopulation || !growthRate || !years) {
        return res.status(400).json({ error: "Data tidak lengkap" });
    }

    let populationData = [initialPopulation];
    for (let i = 1; i <= years; i++) {
        const nextPopulation = populationData[i - 1] * (1 + growthRate / 100);
        populationData.push(nextPopulation);
    }

    res.json({ populationData });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
