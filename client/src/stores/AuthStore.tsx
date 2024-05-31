
import axios from 'axios';
import { create } from 'zustand';

interface AuthState {
    token: string | null;
    setToken: (token: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem('token'),
    setToken: (token) => {
        if (token) {
            localStorage.setItem('token', token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            localStorage.removeItem('token');
            delete axios.defaults.headers.common["Authorization"];
        }
        set({ token });
    }
}));

export default useAuthStore;
