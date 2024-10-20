import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className='text-center px-4 sm:px-8 lg:px-16'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#0a02f8] font-medium'>
                    Find Your Perfect Match – Job Edition!
                </span>
                <h1 className='text-4xl sm:text-5xl font-bold'>
                    Find, Apply & <br /> Unlock Your <span className='text-[#6A38C2]'>Dream Roles</span>
                </h1>
                <p className='text-base sm:text-lg'>
                    Empowering your career journey with seamless job discovery, application, and success!
                </p>
                <div className='flex w-full max-w-md shadow-lg border border-gray-800 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full rounded-l-full py-2 px-3'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] hover:bg-[#5b30a6]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;