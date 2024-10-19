import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('token='))
                    ?.split('=')[1];

                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                } else {
                    console.error('Failed to fetch jobs:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchAllJobs();
    }, [dispatch, searchedQuery]); // Add searchedQuery to the dependency array
};

export default useGetAllJobs;
