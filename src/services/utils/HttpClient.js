import APIError from '../../errors/APIError';

class HttpClient {
    constructor (baseURL) {
        this.baseURL = baseURL;
    }

    async get(path) {
        const response = await fetch(`${this.baseURL}/${path}`);

        let body = null;

        const contentType = response.headers.get('Content-Type');

        if (contentType.includes('application/json')) {
            body = await response.json();
        }

        if (response.ok) {
            return body;
        }

        throw new APIError(
            response,
            body,
        );
    }

    async post(path, body) {
        const response = await fetch(`${this.baseURL}/${path}`, {
            method: 'POST',
            body: JSON.parse(body),
        });

        return response;
    }

    async put(path, body, id) {
        const response = await fetch(`${this.baseURL}/${path}/${id}`, {
            method: 'PUT',
            body: JSON.parse(body),
        });

        return response;
    }

    async delete(path, id) {
        const response = await fetch(`${this.baseURL}/${path}/${id}`, {
            method: 'DELETE',
        });

        return response;
    }
}

export default HttpClient;
