import {
    CreditCardIcon,
    LayoutPanelLeft,
    Users,
    WebhookIcon,
} from 'lucide-react';
import React from 'react';

export const authPrefix = '/auth';

type Route = {
    path: string;
    title: string;
    icon: React.FC<{ className?: string }>;
};
export const routes = {
    unprotected: {
        landing: '/',
        tos: '/tos',
        privacy: '/privacy',
        login: authPrefix + '/login',
        signup: authPrefix + '/signup',
        forgotPassword: authPrefix + '/forgot-password',
        passwordReset: authPrefix + '/password-reset',
        error: '/error',
    },
    dashboard: '/dashboard',
    contacts: '/dashboard/contacts',
    settings: '/dashboard/settings',
    billing: '/dashboard/settings/billing',
};

export const primaryNavigation: Record<string, Route> = {
    sites: {
        path: '/dashboard',
        icon: LayoutPanelLeft,
        title: 'Dashboard',
    },
    team: {
        path: '/stores',
        icon: WebhookIcon,
        title: 'Stores',
    },
    billing: {
        path: '/billing',
        icon: CreditCardIcon,
        title: 'Billing',
    },
};

export const dashboardNav: Record<string, Route> = {
    sites: {
        path: '/dashboard/settings/sites',
        icon: WebhookIcon,
        title: 'Sites',
    },
    team: {
        path: '/dashboard/settings/team',
        icon: Users,
        title: 'Team',
    },
    billing: {
        path: '/dashboard/settings/billing',
        icon: CreditCardIcon,
        title: 'Billing',
    },
};

export const appNavigation = {
    app: [
        {
            title: 'Dashboard',
            href: routes.dashboard,
        },
        {
            title: 'Contacts',
            href: routes.contacts,
        },
        {
            title: 'Settings',
            href: routes.settings,
        },
    ],
    settings: [
        {
            title: 'Settings',
            href: '/dashboard/settings',
            icon: 'user',
        },
        {
            title: 'Billing',
            href: '/dashboard/settings/billing',
            icon: 'creditCard',
        },
    ],
};
