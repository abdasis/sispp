import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import DataTable from 'react-data-table-component';
import {usePage} from "@inertiajs/inertia-react";
import {Table} from "react-bootstrap";

const Semua = (props) => {

    const {semua_siswa} = props;


    return (
    <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={"Semua Siswa"}
        breadcrumbs={[
            { label: "Dashboard", url: route('dashboard') },
            { label: "Siswa", url: route('siswa.semua') },
            { label: "Semua" }
        ]}
    >
        <div>
            <div className="card">
                <div className="card-header border-bottom border-light">
                    <strong>Data Semua Siswa</strong>
                </div>
                <div className="card-body">
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    </Authenticated>
  );
};

export default Semua;
