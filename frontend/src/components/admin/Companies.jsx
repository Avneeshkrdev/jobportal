import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input, dispatch]);

    return (
        <div className="  w-full min-h-screen border border-black bg-gray-50"> {/* Full screen height and width */}
            <Navbar />
            {/* Full-width container with no padding */}
            <div className="w-full px-4 sm:px-6 lg:px-8 my-6"> 
                {/* Flexbox for input and button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                    <Input
                        className="w-full sm:w-80"  // Full width on mobile, fixed on larger screens
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                        className="w-full sm:w-auto sm:ml-4"
                        onClick={() => navigate('/admin/companies/create')}
                    >
                        New Company
                    </Button>
                </div>
                {/* Full-width table container */}
                <div className="bg-white shadow rounded-lg overflow-x-auto w-full">
                    <CompaniesTable className="w-full table-auto" />
                </div>
            </div>
        </div>
    );
};

export default Companies;
