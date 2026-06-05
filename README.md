# OWL SSE Dashboard

This repository contains a small dashboard prototype for OWL Fund Intelligence. The front end is a Vite + React app that fetches mock API data from a Python FastAPI backend. The goal was to create a minimal UI for displaying portfolio allocation and alerts.

Approach
- Frontend: Vite + React (TypeScript). A lightweight `apiRequest` helper centralizes fetch calls and response handling.
- Backend: FastAPI serving mock data so frontend development can proceed without a production API.
- UI: a simple header navigation, an alerts menu (with icons), and a portfolio allocation pie chart component.

Libraries
- Frontend: React, React DOM, Vite, TypeScript, Recharts (for charts), @vitejs/plugin-react
- Tooling: ESLint, TypeScript tooling
- Backend: FastAPI, Uvicorn (development server)
- Runtimes: Node.js for the frontend and Python (3.10+) for the backend

Future work
- Add a portfolio performance line chart to visualize returns over time.
- Add sections to track "funds monitored" and calculate/display average YTD return across the monitored funds.
