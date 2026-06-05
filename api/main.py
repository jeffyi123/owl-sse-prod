from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React (running on port 3000) to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/portfolio")
def get_portfolio():
    return [
        {"category": "Hedge Funds", "allocation": 32},
        {"category": "Private Equity", "allocation": 25},
        {"category": "Venture Capital", "allocation": 18},
        {"category": "Real Assets", "allocation": 12},
        {"category": "Fixed Income", "allocation": 8},
        {"category": "Public Equity", "allocation": 5},
    ]

@app.get("/api/alerts")
def get_alerts():
    return [
        {"title": "Tiger Global 25% YTD", "description": "Outperforming Benchmark"},
        {"title": "PM departure at Citadel", "description": "Senior PM leaving"},
    ]