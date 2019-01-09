$(window).ready(function () {
    $("#form-konversi").submit(function(e){
        var nim = $('input[name="NIM"]').val();
        var hasil = $("#hasil-konv");
        e.preventDefault();
// /^[A-Z][0-9]{6}$/i
        if(nim == ""){
            hasil.html("Isi NIM terlebih dahulu");
        }
        else{
            kodePK = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","0","P","Q","R","S","T","W"];

            hslknv = $('#bank').val();

            if($('#bank').val() !== '')
                hslknv += '-';

            hslknv += "103-";


            for(var i = 0;i < kodePK.length;i++){
                if(nim.substr(0, 1).toUpperCase() == kodePK[i]){
                    if(i > 8){
                        hslknv += (i+1);
                    }
                    else{
                        hslknv += '0'+(i+1);
                    }
                    break;
                }
            }

            hslknv += '-';

            if(i == kodePK.length || nim.length !== 7){
                hasil.html("NIM tidak valid");
            }
            else{
                hslknv += nim.substr(1, 6);
                hasil.html("Hasil konversi : "+hslknv);
            }
        }
    });
});