import { setCompanies} from '@/redux/companySlice'
import { COMPANY_API_END_POINT} from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCompanies = async () => {
            try {
                const token = document.cookie
            .split('; ') // Split the cookie string by "; " to get individual key-value pairs
            .find(row => row.startsWith('token=')) // Find the token entry
            ?.split('=')[1];
            
            
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{
                    headers: {
                'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                'Content-Type': 'application/json' // Ensure the correct content type if necessary
            },
                    withCredentials:true});
                console.log('called');
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    },[])
}

export default useGetAllCompanies