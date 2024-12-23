import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button' 
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'
import { ArrowLeft } from 'lucide-react'

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div className=' h-screen'>
      <Navbar />
      <div className=' mx-auto my-10 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between my-5'>
        <Button
                      onClick={() => navigate("/admin/companies")}
                            variant="outline"
                            className="flex items-center gap-4 justify-center  text-gray-500 font-semibold"
                        >
                            <ArrowLeft className='w-4 h-4' />
                            <span>Back</span>
                    </Button>
          <Input
            className="w-1/2 mb-4 sm:mb-0"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className="w-full sm:w-auto" onClick={() => navigate("/admin/jobs/create")}>
            New Jobs
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default AdminJobs;