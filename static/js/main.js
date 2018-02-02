$(function() {
    if (!SVG.supported) {
      alert('SVG is not supported');
      return;
    }

    var images = [
        '/static/img/001_eye.svg',
        '/static/img/002_bottle.svg',
        '/static/img/003_pin.svg',
        '/static/img/004_bear.svg',
        '/static/img/005_gift.svg',
        '/static/img/006_cubes.svg',
        '/static/img/007_car.svg',
        '/static/img/008_snow.svg'
    ];

    var card = SVG('main-card');
    var circle = card.circle(640).fill('#f06');

    $.each(images, function(index, value) {
        var imagePath = images[index];
        var imageBlockId = 'image' + index;
        $('<div/>').attr('id', imageBlockId).appendTo('#field');
        var draw = SVG(imageBlockId).size(128, 128);
        draw.image(imagePath);
    });
});
