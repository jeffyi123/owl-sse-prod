export interface Allocation {
    category: string;
    allocation: number;
}

export interface Alert {
    title: string;
    description: string;
}

export interface HttpRequest {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any
    headers?: any
    responseType?: any
    type?: string
}