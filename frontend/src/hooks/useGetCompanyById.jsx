import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleCompany = async () => {
            if (!companyId) return; // Prevent fetch if companyId is not provided

            try {
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('token='))
                    ?.split('=')[1];

                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                } else {
                    console.error('Failed to fetch company:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching company:', error);
            }
        };

        fetchSingleCompany();
    }, [companyId, dispatch]);
};

export default useGetCompanyById;
