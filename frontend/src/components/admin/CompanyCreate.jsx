import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import Cookies from 'js-cookie'; // Import js-cookie
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyName, setCompanyName] = useState('');

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    };

    const handleCreateCompany = async () => {
        try {
            const token = document.cookie
                .split('; ') // Split the cookie string by "; " to get individual key-value pairs
                .find(row => row.startsWith('token=')) // Find the token entry
                ?.split('=')[1];

            const res = await axios.post(
                `${COMPANY_API_END_POINT}/register`,
                { companyName }, // Payload without the token
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Include the token in the headers
                        'Content-Type': 'application/json' // Ensure the correct content type
                    },
                    withCredentials: true // Ensure cookies are sent with the request
                }
            );

            if (res.data.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res.data.company._id;
                navigate(`/admin/companies/${companyId}`);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error('Error creating company:', error);
            toast.error('An error occurred while creating the company.');
        }
    };

    return (
        <div className=' h-screen '>
            <Navbar />
            <div className='flex justify-center items-center flex-row md:h-[80vh]'>
            <div className=' mx-auto px-4 sm:px-6 lg:px-8 border border-gray-300 rounded-lg shadow-lg  flex flex-col justify-center w-[40%] items-center '>
            <div>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl sm:text-3xl my-2'>Your Company Name</h1>
                    <p className='text-gray-500 text-sm md:text-base'>
                        What would you like to name your company? (You can change this later.)
                    </p>
                </div>

                <Label className="block text-base">Company Name</Label>
                <Input
                    type="text"
                    className="my-2 w-[80%] "
                    placeholder="Google, Microsoft, etc."
                    value={companyName}
                    onChange={handleCompanyNameChange}
                />
                <div className='flex flex-col sm:flex-row items-center gap-2 my-10'>
                    <Button 
                        variant="outline" 
                        onClick={() => navigate('/admin/companies')}
                        className="w-full sm:w-auto"
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleCreateCompany}
                        className="w-full sm:w-auto"
                    >
                        Continue
                    </Button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CompanyCreate;