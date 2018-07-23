$(document).ready(function() {
    $('.js--how-it-works').waypoint(function(direction){
        if(direction=="down")
        {
           $('nav').addClass('sticky')
        }
        else
        {
           $('nav').removeClass('sticky')
        }
    
    
    });
});


var waypoint = new Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
    
    new Maplace({
    map_options: {
        set_center: [45.9, 10.9],
        zoom: 8
    }
}).Load();
    
});