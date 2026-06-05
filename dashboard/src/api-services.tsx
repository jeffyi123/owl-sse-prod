import type { HttpRequest } from "./types";

export async function apiRequest(req: HttpRequest) {
    const path = req.path
    const headers = req.headers ?? {};
    const options: RequestInit = {
        method: req.method,
        headers,
    };

    const response = await fetch(path, options);

    return response.json();
}

export async function fetchPortfolio() {
    return apiRequest({ path: "/api/portfolio", method: "GET", responseType: "json" });
}

export async function fetchAlerts() {
    return apiRequest({ path: "/api/alerts", method: "GET", responseType: "json" });
}
