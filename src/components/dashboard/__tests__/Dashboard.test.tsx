import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard Component', () => {
  it('renders stats correctly', () => {
    render(<Dashboard />);
    expect(screen.getByText('Active Forms')).toBeInTheDocument();
    expect(screen.getByText('Pending Approvals')).toBeInTheDocument();
    expect(screen.getByText('Registered Institutions')).toBeInTheDocument();
    expect(screen.getByText('Paper Saved (kg)')).toBeInTheDocument();
  });

  it('renders activity feed correctly', () => {
    render(<Dashboard />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
    expect(screen.getByText('Form "Account Opening" approved by John Doe')).toBeInTheDocument();
  });

  it('renders quick links correctly', () => {
    render(<Dashboard />);
    expect(screen.getByText('Go to Forms')).toBeInTheDocument();
    expect(screen.getByText('Manage Institutions')).toBeInTheDocument();
    expect(screen.getByText('View Submissions')).toBeInTheDocument();
  });
}); 