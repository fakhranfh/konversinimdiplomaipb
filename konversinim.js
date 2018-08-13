$(window).ready(function () {
    $("#form-konversi").submit(function(e){
        var nim = $('input[name="NIM"]').val();
        var hasil = $("#hasil-konv");
        e.preventDefault();

        if(nim == ""){
            hasil.html("Isi NIM terlebih dahulu");
        }
        else{
            kodePK = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","0","P","Q","R","S","T","W"];

            hslknv = "103";

            for(var i = 0;i < kodePK.length;i++){
                if(nim.substr(0, 1) == kodePK[i]){
                    if(i > 8){
                        hslknv += (i+1);
                    }
                    else{
                        hslknv += '0'+(i+1);
                    }
                    break;
                }
            }
            if(i == kodePK.length){
                hasil.html("NIM tidak valid");
            }
            hslknv += nim.substr(1, 6);

            hasil.html("Hasil konversi : "+hslknv);
        }
    });
});