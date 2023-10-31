import HttpClient from './utils/HttpClient';

class ContactsService {
    constructor () {
        this.httpClient = new HttpClient('http://localhost:3001');
    }

    listContacts(orderBy = 'asc') {
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
    }

    createContact(body) {
        return this.httpClient.post('/contacts', { body });
    }
}

export default new ContactsService();