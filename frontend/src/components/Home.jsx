import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect recruiters to the companies page
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, [user, navigate]); // Added user and navigate as dependencies

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
