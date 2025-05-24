import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { Employee } from '../types';

interface EmployeeState {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
  fetchEmployees: () => Promise<void>;
  createEmployee: (employee: Omit<Employee, 'id' | 'created_at' | 'user_id'>) => Promise<void>;
  updateEmployee: (id: string, employee: Partial<Employee>) => Promise<void>;
  deleteEmployee: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useEmployeeStore = create<EmployeeState>((set, get) => ({
  employees: [],
  isLoading: false,
  error: null,
  
  fetchEmployees: async () => {
    try {
      set({ isLoading: true, error: null });
      
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('Not authenticated');
      
      const { data, error } = await supabase
        .from('employees')
        .select('*')
        .eq('user_id', userData.user.id);
        
      if (error) throw error;
      
      set({ employees: data as Employee[], isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  createEmployee: async (employee) => {
    try {
      set({ isLoading: true, error: null });
      
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('Not authenticated');
      
      const { error } = await supabase
        .from('employees')
        .insert([{ ...employee, user_id: userData.user.id }]);
        
      if (error) throw error;
      
      // Refresh the list
      await get().fetchEmployees();
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  updateEmployee: async (id, employee) => {
    try {
      set({ isLoading: true, error: null });
      
      const { error } = await supabase
        .from('employees')
        .update(employee)
        .eq('id', id);
        
      if (error) throw error;
      
      // Refresh the list
      await get().fetchEmployees();
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  deleteEmployee: async (id) => {
    try {
      set({ isLoading: true, error: null });
      
      const { error } = await supabase
        .from('employees')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      // Refresh the list
      await get().fetchEmployees();
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  clearError: () => {
    set({ error: null });
  },
}));