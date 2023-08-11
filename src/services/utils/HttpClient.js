class HttpClient {
    constructor (baseURL) {
        this.baseURL = baseURL;
    }

    async get(path) {
        const response = await fetch(`${this.baseURL}/${path}`);

        return response.json();
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
            method: 'DELETE'
        });

        return response;
    }
}

export default HttpClient;
