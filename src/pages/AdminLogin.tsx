import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { loginSchema } from '../utils/validation';
import { useAuthStore } from '../store/authStore';

type AdminLoginFormValues = z.infer<typeof loginSchema>;

const AdminLogin: React.FC = () => {
  const { adminLogin, isLoading, error, clearError } = useAuthStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<AdminLoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'training@jalaacademy.com',
      password: 'jobprogram'
    }
  });
  
  const onSubmit = async (data: AdminLoginFormValues) => {
    await adminLogin(data.email, data.password);
  };
  
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Magnus</h1>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-medium mb-6">Admin - Sign in</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <span>{error}</span>
              <button 
                className="float-right" 
                onClick={clearError}
              >
                &times;
              </button>
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              type="email"
              value="training@jalaacademy.com"
              readOnly
              icon={<Mail size={18} className="text-gray-400" />}
              error={errors.email?.message}
              {...register('email')}
            />
            
            <Input
              type="password"
              value="••••••••"
              icon={<Lock size={18} className="text-gray-400" />}
              error={errors.password?.message}
              {...register('password')}
            />
            
            <div className="flex items-center justify-between">
              <Link to="/">
                <Button variant="link" className="text-blue-500">
                  Back
                </Button>
              </Link>
              
              <Button
                type="submit"
                isLoading={isLoading}
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;