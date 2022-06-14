import Home from '../pages/Home';
import Properties from '../pages/Properties';
import Contacts from '../pages/Contacts';
import Register from '../components/Register';
import { SignIn } from '../components/SignIn';
import { Favourite } from '../pages/Favourite';
import SelectedHouse from '../pages/SelectedHouse';
import MyProperties from '../components/MyProperties';
import AddNew from '../components/AddNew';


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
        useParams: true,
        private: false,
    },
    {
        id: 5,
        title: 'Register',
        path: '/register',
        element: <Register />,
        search: '?',
        hidden: true,
        useParams: true,
        private: false,
    },
    {
        id: 6,
        title: 'Favourite',
        path: '/favourite',
        element: <Favourite />,
        search: '?',
        hidden: true,
        useParams: true,
        private: false,
    },
    {
        id: 7,
        title: 'Selected House',
        path: '/properties/:id',
        element: <SelectedHouse />,
        search: '?',
        useParams: true,
        hidden: true,
        private: false,
    },
    {
        id: 8,
        title: 'My Properties',
        path: '/myproperties',
        element: <MyProperties />,
        search: '?',
        useParams: true,
        hidden: true,
        private: false,
    },
    {
        id: 9,
        title: 'Add New',
        path: '/properties/addnew',
        element: <AddNew />,
        search: '?',
        useParams: true,
        hidden: true,
        private: false,
    },
];

