import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Escritorio',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    { header: 'utilities' },
    {
        title: 'Clientes',
        icon: TypographyIcon,
        to: '/clientes'
    },
    // {
    //     title: 'Typography',
    //     icon: TypographyIcon,
    //     to: '/ui/typography'
    // },
    {
        title: 'Productos',
        icon: CopyIcon,
        to: '/productos'
    },
    /* {
        title: 'Shadow',
        icon: CopyIcon,
        to: '/ui/shadow'
    }, */
    { header: 'auth' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: UserPlusIcon,
        to: '/auth/register'
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: MoodHappyIcon,
        to: '/icons'
    },
    {
        title: 'Sample Page',
        icon: ApertureIcon,
        to: '/sample-page'
    },
];

export default sidebarItem;
