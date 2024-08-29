import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        
        localStorage.removeItem('token'); 
        
       
        localStorage.removeItem('user');
        
        
        setTimeout(() => {
            navigate('/login'); 
        }, 1000); 
    }, [navigate]);

    
   
};

export default LogoutPage;
