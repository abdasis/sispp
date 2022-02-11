import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={'Dashboard'}
            breadcrumbs={[
                {
                    label: 'Dashboard',
                    url: route('dashboard'),
                },
            ]}
        >
            <Head title="Dashboard" />

            <h1>Selamat Datang <span className="text-danger">{props.auth.user.name}</span></h1>
        </Authenticated>
    );
}
