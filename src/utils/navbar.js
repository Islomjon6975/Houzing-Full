import Home from '../pages/Home';
import Properties from '../pages/Properties';
import Contacts from '../pages/Contacts';
import Register from '../components/Register';
import { SignIn } from '../components/SignIn';


export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/',
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
]