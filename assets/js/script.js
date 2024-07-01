import { CountUp } from '../../node_modules/countup.js/dist/countUp.min.js';

window.addEventListener('load', () => {
  const option1 = {
    duration: 3,
    useGrouping: false,
    enableScrollSpy: true
  }

  let countup1 = new CountUp('countup1', 10, option1)
  let countup2 = new CountUp('countup2', 70, option1)
  let countup3 = new CountUp('countup3', 5, option1)
  countup1.start()
  countup2.start()
  countup3.start()
})


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
      })
      targetModals.forEach(function(item){
        item.style.display='none'
      })
      modalElement.style.display='block'
      item.style.background='#F2F2F2'

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





