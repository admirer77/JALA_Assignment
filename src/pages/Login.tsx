import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Checkbox from '../components/ui/Checkbox';
import { loginSchema } from '../utils/validation';
import { useAuthStore } from '../store/authStore';

type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { login, isLoading, error, clearError } = useAuthStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });
  
  const onSubmit = async (data: LoginFormValues) => {
    await login(data.email, data.password);
  };
  
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">JALA Academy</h1>
          <p className="mt-2 text-gray-600">Use the below details to login</p>
          <div className="mt-2">
            <p className="text-gray-600">Email: training@jalaacademy.com</p>
            <p className="text-gray-600">Password: jobprogram</p>
          </div>
          <div className="bg-yellow-300 p-2 mt-4 text-center">
            <p className="font-medium text-gray-800">
              Learn everything on Real-Time Scenarios. FREE for all.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-medium mb-6">Sign In</h2>
          
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
              type="text"
              placeholder="Email or Mobile No"
              icon={<Mail size={18} className="text-gray-400" />}
              error={errors.email?.message}
              {...register('email')}
            />
            
            <Input
              type="password"
              placeholder="Password"
              icon={<Lock size={18} className="text-gray-400" />}
              error={errors.password?.message}
              {...register('password')}
            />
            
            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember Me"
                {...register('rememberMe')}
              />
              
              <Button
                type="submit"
                isLoading={isLoading}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Sign In
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500">- OR -</p>
          </div>
          
          <div className="mt-4">
            <Link to="/forgot-password">
              <Button
                variant="secondary"
                fullWidth
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Forgot Password
              </Button>
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/admin-login" className="text-blue-500 hover:underline">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;