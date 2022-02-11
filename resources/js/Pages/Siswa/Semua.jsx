import React from "react";
import Authenticated from "@/Layouts/Authenticated";

const Semua = (props) => {
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
            <h1>Halaman Semua Siswa</h1>
        </div>
    </Authenticated>
  );
};

export default Semua;
