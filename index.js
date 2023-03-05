// document.getElementById("#btn-wa").click(function(){
//     var nomor = "6289668251233";
//     var pesan = "Pesan disini";
//     var win = window.open('https://api.whatsapp.com/send?phone='+nomor+'&text='+pesan);
//     if (win) {
//         //Browser has allowed it to be opened
//         win.focus();
//     } else {
//         //Browser has blocked it
//         alert('Please allow popups for this website');
//     }
// return false;
// });

// document.getElementById("btn-wa").addEventListener("click", function(){
//     var nomor = "6289668251233";
//     var pesan = "Pesan disini";
//     var win = window.open('https://api.whatsapp.com/send?phone='+nomor+'&text='+pesan);
//     if (win) {
//         //Browser has allowed it to be opened
//         win.focus();
//     } else {
//         //Browser has blocked it
//         alert('Please allow popups for this website');
//     }
// return false;
// });

// function run(){
//     var nomor = "6289668251233";
//     var pesan = "Pesan disini";
//     var win = window.open('https://api.whatsapp.com/send?phone='+nomor+'&text='+pesan);
//     if (win) {
//         //Browser has allowed it to be opened
//         win.focus();
//     } else {
//         //Browser has blocked it
//         alert('Please allow popups for this website');
//     }
// }

function run(){
    var nomor = "6289668251233";
    var pesan = document.getElementById("pesan").value;
    var win = window.open('https://api.whatsapp.com/send?phone='+nomor+'&text='+pesan);
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}