'use strict'

let a = +prompt('Введите 1-е число');

let b = +prompt('Введите 2-е число');

        if(a && b > 0){
            alert(a - b);
        } else if(a && b < 0){
            alert(a * b);
        } else if(a && b >= 0 || a && b <= 0){
            alert(a + b);
        }