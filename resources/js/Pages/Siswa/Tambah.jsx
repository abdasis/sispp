import React, {useState} from "react";
import Authenticated from "@/Layouts/Authenticated";
import {Inertia} from "@inertiajs/inertia";
import {usePage} from "@inertiajs/inertia-react";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

const Semua = (props) => {
    const { errors } = usePage().props


    const [values, setValues] = useState({
        nama_siswa: "",
        nis: "",
        nisn: "",
        jenis_kelamin: "",
        alamat: "",
        telepon: "",
        email: "",
        tempat_lahir: "",
        tanggal_lahir: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        Inertia.post(route('siswa.simpan'), values, {
            onSuccess: () => {
                toast.success("Data berhasil disimpan");
            },
            onError: (error) => {
                toast.error(error);
            }
        });

    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={"Tambah Siswa"}
            breadcrumbs={[
                { label: "Dashboard", url: route('dashboard') },
                { label: "Siswa", url: route('siswa.semua') },
                { label: "Tambah Siswa" }
            ]}
        >
            <div className="card">
                <div className="card-header">
                    <strong>Tambah Data Siswa</strong>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-2">
                                            <label htmlFor="nama_siswa">Nama Lengkap</label>
                                            <input onChange={handleChange} value={values.nama_siswa} type="text" className={errors.nama_siswa ? 'form-control is-invalid' : 'form-control'} id="nama_siswa" placeholder="Nama Lengkap" />
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label htmlFor="nis">NIS</label>
                                            <input onChange={handleChange} value={values.nis}  type="text" className="form-control" id="nis" placeholder="NIS" />
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label htmlFor="nisn">NISN</label>
                                            <input onChange={handleChange} value={values.nisn} type="text" className="form-control" id="nisn" placeholder="NISN" />
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label htmlFor="tempat_lahir">Tempat Lahir</label>
                                            <input onChange={handleChange} value={values.tempat_lahir} type="text" className="form-control" id="tempat_lahir" placeholder="Tempat Lahir" />
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
                                            <input onChange={handleChange} value={values.tanggal_lahir} type="date" className="form-control" id="tanggal_lahir" placeholder="Tanggal Lahir" />
                                            {errors.tanggal_lahir && <small className={'text-danger'}>{errors.tanggal_lahir}</small>}

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
                                            <select onChange={handleChange} value={values.jenis_kelamin}  className="form-control" id="jenis_kelamin">
                                                <option value="">Pilih Jenis Kelamin</option>
                                                <option value={"Laki-Laki"}>Laki-Laki</option>
                                                <option value={"Perempuan"}>Perempuan</option>
                                            </select>
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}

                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label htmlFor="telepon">Telepon</label>
                                            <input onChange={handleChange} value={values.telepon} type="text" className="form-control" id="telepon" placeholder="Telepon" />
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label htmlFor="email">Email</label>
                                            <input onChange={handleChange}  type="email" className="form-control" id="email" placeholder="Email" />
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-2">
                                            <label htmlFor="alamat">Alamat</label>
                                            <textarea onChange={handleChange} value={values.alamat} className="form-control" id="alamat" rows="3" placeholder="Alamat"></textarea>
                                            {errors.nama_siswa && <small className={'text-danger'}>{errors.nama_siswa}</small>}

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-2">
                                            <button className="btn btn-primary" type={"submit"}>Simpan</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Semua;
