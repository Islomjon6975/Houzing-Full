import Home from '../pages/Home';
import Properties from '../pages/Properties';
import Contacts from '../pages/Contacts';


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
]