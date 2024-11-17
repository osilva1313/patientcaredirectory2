import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { AgencyPage } from './pages/AgencyPage';
import { PartnerPage } from './pages/PartnerPage';
import { AdminLayout } from './pages/admin/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { AgenciesList } from './pages/admin/AgenciesList';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Header />
              <SearchPage />
            </>
          }
        />
        <Route
          path="/agency/:id"
          element={
            <>
              <Header />
              <AgencyPage />
            </>
          }
        />
        <Route
          path="/partners"
          element={
            <>
              <Header />
              <PartnerPage />
            </>
          }
        />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="agencies" element={<AgenciesList />} />
        </Route>
      </Routes>
    </Router>
  );
}