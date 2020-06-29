const realEstateAggregator = require("@vaniina/real-estate-aggregator");
const express = require("express");
const app = express();

app.get("/search", async (req, res) => {
  const query = req.query;
  const results = await realEstateAggregator({
    maxPrice: query.maxPrice || 99999999,
    minRooms: query.minRooms || 0,
    minBedrooms: query.minBedrooms || 0,
    minSpace: query.minSpace || 0,
    debug: false,
  });

  res.json(results);
});

app.listen(process.env.PORT || 3000);
