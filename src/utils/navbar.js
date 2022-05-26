import Home from '../pages/Home';
import Properties from '../pages/Properties';
import Contacts from '../pages/Contacts';
import Register from '../components/Register';
import { SignIn } from '../components/SignIn';
import { Favourite } from '../pages/Favourite';
import { NotFound } from '../components/NotFound';


export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        element: <Home />,
        search: '?',
        hidden: false,
        private: false,
    },
    {
        id: 2,
        title: 'Properties',
        path: '/properties',
        element: <Properties />,
        search: '?',
        hidden: false,
        private: false,
    },
    {
        id: 3,
        title: 'Contacts',
        path: '/contacts',
        element: <Contacts />,
        search: '?',
        hidden: false,
        private: false,
    },
    {
        id: 4,
        title: 'Sign in',
        path: '/signin',
        element: <SignIn />,
        search: '?',
        hidden: true,
        private: false,
    },
    {
        id: 5,
        title: 'Register',
        path: '/register',
        element: <Register />,
        search: '?',
        hidden: true,
        private: false,
    },
    {
        id: 6,
        title: 'Favourite',
        path: '/favourite',
        element: <Favourite />,
        search: '?',
        hidden: true,
        private: false,
    },
]