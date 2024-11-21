import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Params from './components/Params.jsx';
import Github, { GithubLoader } from './components/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />  // Fixed typo here
//       },
//       {
//         path: 'contact',
//         element: <Contact />  // Fixed typo here
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      
     <Route path='/' element={<Home />} />
     <Route path='about' element={<About />} />
     <Route path='contact' element={<Contact />} />
    <Route path='params/:id' element={<Params />} />
    <Route path='github' loader={GithubLoader} element={<Github />} />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
