import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import Radio from '../../components/ui/Radio';
import Checkbox from '../../components/ui/Checkbox';
import Textarea from '../../components/ui/Textarea';
import { employeeSchema } from '../../utils/validation';
import { useEmployeeStore } from '../../store/employeeStore';

type EmployeeFormValues = z.infer<typeof employeeSchema>;

const countries = [
  { value: '', label: '--Select Country--' },
  { value: 'usa', label: 'USA' },
  { value: 'uk', label: 'UK' },
  { value: 'india', label: 'India' },
  { value: 'australia', label: 'Australia' },
  { value: 'canada', label: 'Canada' },
];

const cities = {
  usa: [
    { value: '', label: '--Select City--' },
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
  ],
  uk: [
    { value: '', label: '--Select City--' },
    { value: 'london', label: 'London' },
    { value: 'manchester', label: 'Manchester' },
    { value: 'birmingham', label: 'Birmingham' },
  ],
  india: [
    { value: '', label: '--Select City--' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
  ],
  australia: [
    { value: '', label: '--Select City--' },
    { value: 'sydney', label: 'Sydney' },
    { value: 'melbourne', label: 'Melbourne' },
    { value: 'brisbane', label: 'Brisbane' },
  ],
  canada: [
    { value: '', label: '--Select City--' },
    { value: 'toronto', label: 'Toronto' },
    { value: 'vancouver', label: 'Vancouver' },
    { value: 'montreal', label: 'Montreal' },
  ],
};

const skills = [
  { id: 'aws', label: 'AWS' },
  { id: 'devops', label: 'DevOps' },
  { id: 'full-stack', label: 'Full Stack Developer' },
  { id: 'middleware', label: 'Middleware' },
  { id: 'qa-automation', label: 'QA-Automation' },
  { id: 'webservices', label: 'WebServices' },
];

const CreateEmployee: React.FC = () => {
  const { createEmployee, isLoading, error, clearError } = useEmployeeStore();
  const [successMessage, setSuccessMessage] = React.useState('');
  
  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      date_of_birth: '',
      gender: 'male',
      address: '',
      country: '',
      city: '',
      other_city: '',
      skills: [],
    }
  });
  
  const selectedCountry = watch('country');
  const useOtherCity = watch('other_city') !== '';
  
  const onSubmit = async (data: EmployeeFormValues) => {
    try {
      await createEmployee(data);
      setSuccessMessage('Employee created successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Employee</h1>
        <span className="mx-2 text-gray-400">Create</span>
      </div>
      
      <div className="bg-white rounded-lg shadow-md">
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
        
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <span>{successMessage}</span>
            <button 
              className="float-right" 
              onClick={() => setSuccessMessage('')}
            >
              &times;
            </button>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Employee Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Input
                label="First Name"
                placeholder="First Name"
                error={errors.first_name?.message}
                {...register('first_name')}
              />
              
              <Input
                label="Last Name"
                placeholder="Last Name"
                error={errors.last_name?.message}
                {...register('last_name')}
              />
              
              <Input
                label="Email"
                placeholder="Email Id"
                type="email"
                error={errors.email?.message}
                {...register('email')}
              />
              
              <Input
                label="Mobile Number"
                placeholder="Mobile No"
                error={errors.mobile?.message}
                {...register('mobile')}
              />
              
              <Input
                label="Date Of Birth"
                placeholder="dd/mm/yyyy"
                type="date"
                error={errors.date_of_birth?.message}
                {...register('date_of_birth')}
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <div className="flex space-x-4">
                  <Radio
                    label="Male"
                    value="male"
                    {...register('gender')}
                  />
                  <Radio
                    label="Female"
                    value="female"
                    {...register('gender')}
                  />
                </div>
                {errors.gender && (
                  <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                )}
              </div>
            </div>
            
            <div className="mt-6">
              <Textarea
                label="Address"
                placeholder="Address"
                rows={4}
                error={errors.address?.message}
                {...register('address')}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Country"
                      options={countries}
                      error={errors.country?.message}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setValue('city', ''); // Reset city when country changes
                      }}
                    />
                  )}
                />
              </div>
              
              <div className="flex flex-col">
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="City"
                      options={selectedCountry ? cities[selectedCountry as keyof typeof cities] || [] : [{ value: '', label: '--Select City--' }]}
                      error={useOtherCity ? undefined : errors.city?.message}
                      disabled={useOtherCity}
                      {...field}
                    />
                  )}
                />
                
                <div className="mt-2 flex items-center">
                  <Checkbox
                    label="Other City"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setValue('city', 'other');
                      } else {
                        setValue('city', '');
                        setValue('other_city', '');
                      }
                    }}
                  />
                </div>
                
                {useOtherCity && (
                  <Input
                    placeholder="Enter city name"
                    className="mt-2"
                    error={errors.other_city?.message}
                    {...register('other_city')}
                  />
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Skills</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Controller
                  key={skill.id}
                  name="skills"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      label={skill.label}
                      value={skill.id}
                      checked={field.value?.includes(skill.id)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const value = e.target.value;
                        const currentSkills = field.value || [];
                        
                        if (checked) {
                          field.onChange([...currentSkills, value]);
                        } else {
                          field.onChange(currentSkills.filter((s) => s !== value));
                        }
                      }}
                    />
                  )}
                />
              ))}
            </div>
            {errors.skills && (
              <p className="mt-2 text-sm text-red-600">{errors.skills.message}</p>
            )}
          </div>
          
          <div className="p-6 flex justify-end space-x-4">
            <Button
              type="button"
              variant="danger"
              as={Link}
              to="/home"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              isLoading={isLoading}
              className="bg-green-500 hover:bg-green-600"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;