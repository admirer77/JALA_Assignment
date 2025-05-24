import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/authStore';

// Layout
import Layout from './components/layout/Layout';

// Authentication Pages
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import AdminLogin from './pages/AdminLogin';

// Protected Pages
import Home from './pages/Home';
import CreateEmployee from './pages/employee/CreateEmployee';
import SearchEmployee from './pages/employee/SearchEmployee';

// More Pages
import CollapsibleContent from './pages/more/CollapsibleContent';
import Tooltips from './pages/more/Tooltips';
import Popups from './pages/more/Popups';
import Links from './pages/more/Links';
import CssProperties from './pages/more/CssProperties';
import IFrames from './pages/more/IFrames';

// Route Guard
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const { user } = useAuthStore();
  
  useEffect(() => {
    // Setup auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          useAuthStore.setState({ user: null });
        }
      }
    );
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/employee/create" element={<CreateEmployee />} />
            <Route path="/employee/search" element={<SearchEmployee />} />
            
            {/* More Routes */}
            <Route path="/more/collapsible" element={<CollapsibleContent />} />
            <Route path="/more/tooltips" element={<Tooltips />} />
            <Route path="/more/popups" element={<Popups />} />
            <Route path="/more/links" element={<Links />} />
            <Route path="/more/css-properties" element={<CssProperties />} />
            <Route path="/more/iframes" element={<IFrames />} />
          </Route>
        </Route>
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;