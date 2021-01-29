'use strict'

let val = +prompt('Введите число');

        let pow = +prompt('Введите степень');

    function power(val, pow){
        if(pow !== 1){
            return val;
        } else{
            return val * (val, pow - 1);
        }
}