import HttpClient from './utils/HttpClient';

class ContactsService {
    constructor () {
        this.httpClient = new HttpClient('http://localhost:3001');
    }

    listContacts(orderBy = 'asc') {
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
    }

    getContactById(id) {
        return this.httpClient.get(`/contacts/${id}`);
    }

    createContact(body) {
        return this.httpClient.post('/contacts', { body });
    }

    updateContact(id, body) {
        return this.httpClient.put(`/contacts/${id}`, { body });
    }

    deleteContact(id) {
        return this.httpClient.delete(`/contacts/${id}`);
    }
}

export default new ContactsService();
