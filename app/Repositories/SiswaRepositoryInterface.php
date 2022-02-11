<?php

namespace App\Repositories;

interface SiswaRepositoryInterface
{
    public function simpan(array $data);

    public function update($id, array $data);

    public function hapus($id);

    public function hapusPermanen();

    public function detail($id);
}
