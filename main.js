

function psw_check(){
    let psw = document.getElementById('psw');
    let pswc = document.getElementById('pswc');
    if(psw.value == pswc.value && psw.value.length>0){
        psw.classList.add('valid');
        pswc.classList.add('valid');
        psw.classList.remove('invalid');
        pswc.classList.remove('invalid');
        psw.style.boxShadow="1px 1px green";
        pswc.style.boxShadow="1px 1px green";
    console.log('valid')
    }
    else{
        psw.classList.add('invalid');
        pswc.classList.add('invalid');
        psw.classList.remove('valid');
        pswc.classList.remove('valid');
        psw.style.boxShadow="1px 1px red";
        pswc.style.boxShadow="1px 1px red";
console.log('invalid')
    }

}
