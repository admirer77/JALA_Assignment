export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
  created_at: string;
}

export interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  date_of_birth: string;
  gender: 'male' | 'female';
  address: string;
  country: string;
  city: string;
  other_city?: string;
  skills: string[];
  created_at: string;
  user_id: string;
}

export type Country = {
  id: string;
  name: string;
  cities: string[];
};

export type AuthState = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  adminLogin: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
};