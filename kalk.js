function perhitungan(e){
    event.preventDefault();
    var a = parseInt(document.getElementById("numA").value);
    var b = parseInt(document.getElementById("numB").value);
    var op = document.getElementById("operasi").value;
    var hasil;

    if(op=='tambah'){
        hasil=a+b;
    }
    else if(op=='kurang'){
        hasil=a-b;
    }
    else if(op=='kali'){
        hasil=a*b;
    }
    else if(op=='bagi'){
        hasil=a/b;
    }

    alert(hasil);
}