import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { forgotPasswordSchema } from '../utils/validation';
import { useAuthStore } from '../store/authStore';

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword: React.FC = () => {
  const { resetPassword, isLoading, error, clearError } = useAuthStore();
  const [resetSent, setResetSent] = React.useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    }
  });
  
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    await resetPassword(data.email);
    setResetSent(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Magnus</h1>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-medium mb-6">Forgot Password</h2>
          
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
          
          {resetSent ? (
            <div className="text-center">
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Password reset link has been sent to your email.
              </div>
              <Link to="/">
                <Button variant="primary">Back to Login</Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                icon={<Mail size={18} className="text-gray-400" />}
                error={errors.email?.message}
                {...register('email')}
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
                  Get Password
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;