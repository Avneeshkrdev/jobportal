import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('token='))
                    ?.split('=')[1];

                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application));
                } else {
                    console.error('Failed to fetch applied jobs:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching applied jobs:', error);
            }
        };

        fetchAppliedJobs();
    }, [dispatch]);
};

export default useGetAppliedJobs;
