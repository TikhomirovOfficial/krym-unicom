const menu = $('.modal-menu');
const menuButton = $('.present-menu__icon')

menuButton.click(() => {
    menu.toggleClass('modal-menu__opened')
    menuButton.toggleClass('present-menu__opened')
})

const sertificateEl = $('.sertificate-item')
const modalSertificate = $('.modal-image')
const modalSertificateImage = $('.modal-sertificate__img')
const modalSertificateClose = $('.modal-close-btn')

sertificateEl.click(function() {
    const srcImage = $($(this).children('img')[0]).attr('src')
    modalSertificateImage.attr('src', srcImage)
    modalSertificate.toggleClass('modal-image__opened')
})
modalSertificateClose.click(() => {
    modalSertificate.toggleClass('modal-image__opened')

})