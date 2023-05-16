import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import CardPage from '../pages/CardPage';
import ConnexionPage from '../pages/ConnexionPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
       <CardPage/>    
      </div>

    )}
    ,{
    path: "/connexion",
    element: (
      <div>
        <ConnexionPage/>
      </div>

    )
  }

]);



export default router;
