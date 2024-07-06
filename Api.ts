import axios from 'axios';

const API = axios.create({
  baseURL: 'http://your-backend-api-url',
});

export const login = (email: string, password: string) =>
  API.post('/auth/login', { email, password });

export const signup = (username: string, email: string, password: string) =>
  API.post('/auth/signup', { username, email, password });

export const getJournals = () => API.get('/journals');

export const createJournal = (title: string, content: string, category: string) =>
  API.post('/journals', { title, content, category });

export const updateJournal = (id: string, title: string, content: string, category: string) =>
  API.put(`/journals/${id}`, { title, content, category });

export const deleteJournal = (id: string) => API.delete(`/journals/${id}`);
