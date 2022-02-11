import React from 'react';
import {toast} from "react-toastify";

export default function Toast(){
    if (flash.message == 'berhasil'){
        toast.success(flash.message)
    }else (flash.message == 'gagal')
    {
        toast.error(flash.message)
    }
}
