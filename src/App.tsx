import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import FormBuilder from './components/formbuilder/FormBuilder';
import NotificationSystem from './components/common/NotificationSystem';
import FileUpload from './components/file/FileUpload';

const App: React.FC = () => {
  return (
    <Router>
      <NotificationSystem>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form-builder" element={<FormBuilder />} />
          <Route path="/notifications" element={<NotificationSystem />} />
          <Route path="/file-upload" element={<FileUpload />} />
        </Routes>
      </NotificationSystem>
    </Router>
  );
};

export default App; 