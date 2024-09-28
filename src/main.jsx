import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './home'
import Profile from './Profile/index'
import AddListing from './AddListing'
import { ClerkProvider } from '@clerk/clerk-react'
import { Toaster } from 'sonner'
import SearchByCategory from './search/[category]'
import SearchByOption from './search'
import ListingDetails from './Listing-Details/[id]'
import PreOwned from './components/ui/PreOwned'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/add-listing",
    element: <AddListing />
  },
  {
    path: "/search", 
    element: <SearchByOption />
  },
  {
    path: "/preowned", 
    element: <PreOwned />
  },
  {
    path: "/search/:category", 
    element: <SearchByCategory />
  },
  {
    path: "/listing-details/:id", 
    element: <ListingDetails />
  },
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>,
)
