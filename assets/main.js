function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val().toLowerCase();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        if (nama === 'riswan') {
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (Harimau Putih)`);
            $('#search').val('');
        } else {
            let status = [
                'isi',
                'kosong',
            ]
            const randomStatus = Math.floor(Math.random() * status.length);
            if (randomStatus === 0) {
                let khodam = [
                    'Harimau Putih',
                    'Raja',
                    'Singa Langit',
                    'Taring Emas',
                    'Elang Sakti',
                    'Cakra Langit',
                    'Syaitan',
                    'Malaikat',
                    'Peri',
                    'Naga',
                    'Jin',
                    'Iblis',
                    'Kuntilanak',
                    'Pocong'

                ];
                const random = Math.floor(Math.random() * khodam.length);
                $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
                $('#search').val('');
            } else {
                $('#result').html(`${nama.toUpperCase()} - KOSONG`);
                $('#search').val('');
            }
        }
    }
}

$(document).ready(function() {
    $('#btn-search').click(cekKhodam);
});