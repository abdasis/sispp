<?php

namespace App\Repositories;

use App\Models\Siswa;

class SiswaRepository implements SiswaRepositoryInterface
{
    public function simpan(array $data)
    {
        return Siswa::create($data);
    }

    public function update($id, array $data)
    {
        return Siswa::find($id)->update($data);
    }

    public function hapus($id)
    {
        return Siswa::find($id)->delete();
    }

    public function hapusPermanen()
    {
        return Siswa::onlyTrashed()->forceDelete();
    }

    public function detail($id)
    {
        return Siswa::findOrFail($id);
    }

}
