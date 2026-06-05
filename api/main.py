from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mock_data import alerts_data, portfolio_data

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
    return portfolio_data

@app.get("/api/alerts")
def get_alerts():
    return alerts_data