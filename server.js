const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const SWIGGY_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=80593&catalog_qa=undefined&query=Idli&submitAction=ENTER";

app.get("/api/menu", async (req, res) => {
  try {
    const response = await fetch(SWIGGY_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const contentType = response.headers.get("content-type");

    // ❌ Not JSON → log & fail safely
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Non-JSON response from Swiggy:", text.slice(0, 300));

      return res.status(500).json({
        error: "Swiggy blocked the request",
        message: "Non-JSON response received"
      });
    }

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error("Error fetching swiggy menu:", err);

    res.status(500).json({
      error: "Failed to fetch menu",
      message: err.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
