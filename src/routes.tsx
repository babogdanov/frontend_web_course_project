import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import FileUploadPage from './pages/FileUpload/FileUpload.page';
import HomePage from './pages/Home/Home.page';


const Routes = () => (
    <RouterRoutes>
      {/* public routes */}
      <Route path="/" element={<HomePage/>} />
      <Route path="/upload" element={<FileUploadPage/>} />
    </RouterRoutes>
  );
  
  export default Routes;