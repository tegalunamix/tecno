!function($){$(function(){var $window=$(window)
$('section [href^=#]').click(function(e){e.preventDefault()})
$('.container').tooltip({selector:"a[rel=tooltip]"})
$("a[rel=popover]").popover().click(function(e){e.preventDefault()})
$('#myCarousel').carousel()})}(window.jQuery)
function createTicker(){var tickerLIs=jQuery(".breaking-news ul").children();tickerItems=new Array();tickerLIs.each(function(el){tickerItems.push(jQuery(this).html());});i=0;rotateTicker();}
function rotateTicker(){if(i==tickerItems.length){i=0;}
tickerText=tickerItems[i];c=0;typetext();setTimeout("rotateTicker()",6000);i++;}
var isInTag = false;                                        
function typetext() {	                                      
	var thisChar = tickerText.substr(c, 1);                   
	if( thisChar == '<' ){ isInTag = true; }                  
	if( thisChar == '>' ){ isInTag = false; }                 
	jQuery('.breaking-news ul').html(tickerText.substr(0, c++));   
	if(c < tickerText.length+1)                                     
		if( isInTag ){                                                
			typetext();                                                 
		}else{                                                        
			setTimeout("typetext()", 12);                               
		}                                                             
	else {                                                          
		c = 1;                                                        
		tickerText = "";                                              
	}	                                                              
}
    $(".buscar").keyup(function() 
    {
      var cajabusqueda = $(this).val();
      var dataString = 'buscarpalabra='+ cajabusqueda;
      if(cajabusqueda=='')
      {
      }
      else
      {
        $.ajax({
          type: "POST",
          minLength: 1,
          url: "/buscar/",
          data: dataString,
          cache: false,
          success: function(html)
          {
              $(".result").html(html).show();
          }
        });
        }return false; 
    });
  jQuery(function($){
     $("#cajabusqueda").Watermark("Buscar contenido");
     });

/*Desactivar anticlik*/
//document.oncontextmenu = function(){return false}
/*Desactiva ctrl+s*/
/*document.addEventListener("keydown", function(e) {
           if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             e.preventDefault();
             //alert('captured');
           }
         }, false);*/

/*** widgets */
jQuery(document).ready(function(e) {
    jQuery('body').append('<div id="widgetHelp"><div class="marco" style="display:none;"><div class="btn cerrar">X</div><iframe src="feedback.html" allowtransparency="1" application="1" frameborder="0" name="widget" width="500" height="520" scrolling="no"></iframe></div><a href="feedback.html" class="btn fback">Libro de Recamaciónes</a></div>');
  jQuery('#widgetHelp .btn').click(function(e){
    e.preventDefault();
    jQuery('#widgetHelp .marco').toggle();
  });
  
  jQuery('#widgetHelp .cerrar').click(function(e){
    e.preventDefault();
    jQuery('#widgetHelp .marco').hide(200);
  });
  
  
});