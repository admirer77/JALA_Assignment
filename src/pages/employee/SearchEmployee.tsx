import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useEmployeeStore } from '../../store/employeeStore';
import { Employee } from '../../types';

const SearchEmployee: React.FC = () => {
  const { employees, fetchEmployees, isLoading, error } = useEmployeeStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);
  
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter((employee) => {
        const fullName = `${employee.first_name} ${employee.last_name}`.toLowerCase();
        return (
          fullName.includes(searchTerm.toLowerCase()) ||
          employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.mobile.includes(searchTerm)
        );
      });
      setFilteredEmployees(filtered);
    }
  }, [searchTerm, employees]);
  
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Employee</h1>
        <span className="mx-2 text-gray-400">Search</span>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <span>{error}</span>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search by name, email, or mobile"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search size={18} className="text-gray-400" />}
            />
          </div>
          <Button
            onClick={() => setSearchTerm('')}
            variant="secondary"
          >
            Clear
          </Button>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading employees...</p>
          </div>
        ) : filteredEmployees.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No employees found. {employees.length > 0 ? 'Try a different search term.' : 'Create an employee to get started.'}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Name</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Email</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Mobile</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Skills</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{employee.first_name} {employee.last_name}</td>
                    <td className="py-3 px-4">{employee.email}</td>
                    <td className="py-3 px-4">{employee.mobile}</td>
                    <td className="py-3 px-4">{employee.skills.join(', ')}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button
                          variant="link"
                          className="text-blue-500"
                          size="sm"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="link"
                          className="text-red-500"
                          size="sm"
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchEmployee;