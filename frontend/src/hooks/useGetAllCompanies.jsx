import { setCompanies } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                // Extract token from cookies
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('token='))
                    ?.split('=')[1];

                // Make the API request
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                console.log('API call successful'); // Logging for debugging
                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                } else {
                    console.error('Failed to fetch companies:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching companies:', error);
                // Optionally, dispatch an error action here
            }
        };

        fetchCompanies();
    }, [dispatch]); // Adding dispatch to the dependency array
};

export default useGetAllCompanies;
