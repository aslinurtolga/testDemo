const sum = require('./sum')

// 1+2 ==3
// 1 + 2'nin toplamının 3'e eşit olup olmadığını test etmek istiyoruz

// test('properly adds two numbers',() => {
//     if (sum (1, 2) === 3) {
//         fdgsfdg
//     }else {
//         throw Error
//     }
// }) // normal JS olarak böyle yapardık fakat hantal ve kullanımı zordur


// test adındaki bu fonksiyonu kullanıyoruz ve bu test fonksiyonunun ilk parametresi sadece testin ne yaptığını gösteren bir dizgedir, bu yüzden bizim durumumuzda sadece iki sayıyı düzgün bir şekilde eklediğini söyleyebiliriz.

//sadece içine test etmek istediğinizi yazmanız yeterli. Bu testi açlıştırdığımızda aslında konsolun içinde görenecek, ikinci bir şey bir fonksiyon olacak ve bu fonksyion testinizi çalıştırmak için çağrılan şeydir.

test('properly adds two numbers',() => {
    expect (
        sum (1,2) // bu bölümün içindeki herşeyin diğer bölümle ilgili birşeyler yapmasını bekliyoruz
        ).toBe (3)
    // beklenen .. olan
});