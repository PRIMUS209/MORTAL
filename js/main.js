$(document).ready(function () {


    $('#app').vide({
        mp4: 'video/video.mp4',
        webm: 'video/video.webm',
        ogv: 'video/video.ogv',
    });

})


function messageAlert() {
    alert('Отправили письмо на почту  ' +
        document.getElementById('email').value + ' , правда почтой России' )
}
function VerificationEMail() {

}
function Show() {
    if (document.getElementById('email').) {
        messageAlert()
    } else {
        alert('Введите корректный email!')
    }
}
