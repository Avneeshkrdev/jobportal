import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                // Extract token from cookies
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('token='))
                    ?.split('=')[1];

                // Make the API request
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                // Dispatch action if the response is successful
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                } else {
                    // Handle unsuccessful response here, if needed
                    console.error('Failed to fetch jobs:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
                // Consider dispatching an error action to update the state
            }
        };

        fetchAllAdminJobs();
    }, [dispatch]); // Added dispatch to the dependency array
};

export default useGetAllAdminJobs;
