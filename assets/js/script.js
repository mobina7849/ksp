
// menuPopover languages
document.addEventListener('DOMContentLoaded', function () {
  var menuPopover = new bootstrap.Popover(document.getElementById('menuPopover'), {
    content: function () {
      return document.getElementById('languageItems').innerHTML;
    },
    html: true
  });
});



// menu modal

document.addEventListener('DOMContentLoaded', function () {
  var hoverButtons = document.querySelectorAll('.hoverButton');
  var targetModals = document.querySelectorAll('.targetModal');
  var deviceshoverModal = new bootstrap.Modal(document.getElementById('deviceshoverModal'));

  hoverButtons.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    var modaltype = item.getAttribute('data-modal');
    var modalElement=document.getElementById(modaltype)

    targetModals.forEach(function(item){
      item.style.display='none'
    })
    deviceshoverModal.show();
    modalElement.style.display='block'
  });
});
});





document.addEventListener('DOMContentLoaded',function(){
  var modalMenuItems=document.querySelectorAll('.modalMenuItem')
  var targetModals = document.querySelectorAll('.targetModal');

  modalMenuItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      var modaltype = item.getAttribute('data-modal');
      var modalElement=document.getElementById(modaltype)
      modalMenuItems.forEach(function(item){
        item.style.background='none'
        item.style.color='#000'
      })
      targetModals.forEach(function(item){
        item.style.display='none'
      })
      modalElement.style.display='block'
      item.style.background='#ED1C24'
      item.style.color='#fff'
      item.style.boederRadius='4px'

    });
  });
})

// modal menu show devices

document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.menu_devices div');
  var hoveredImage = document.getElementById('hovered-image');
  var newDevices = document.querySelector('.new__devices')
  hoveredImage.style.display = 'none';
  menuItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      var imgUrl = item.getAttribute('data-img');
      hoveredImage.src = imgUrl;
      hoveredImage.style.display = 'block';
      newDevices.style.display = 'none'
    });

    item.addEventListener('mouseout', function () {
      hoveredImage.style.display = 'none';
      newDevices.style.display = 'flex'

    });
  });
});





(function($) {
    // CounterUp
    $('.count').countUp();

})(window.jQuery);