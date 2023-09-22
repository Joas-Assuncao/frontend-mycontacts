import { HttpClient } from './utils/HttpClient';
import { delay } from '../utils/delay';

class CategoryService {
    constructor () {
        this.httpClient = new HttpClient('http://localhost:3001');
    }

    async listCategories() {
        await delay(1500);
        return this.httpClient.get('/categories');
    }
}

export default new CategoryService();
