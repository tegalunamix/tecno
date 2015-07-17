
jQuery('#middle').fadeIn(150);

jQuery('a').click(function(event){
    if(this.href==''){
        event.preventDefault();        
    }
});


//window.addEvent('domready',function(){
	if(document.location.href.search('&layout=edit')>0 || document.location.href.search('crear-articulo.html')>0){		
		document.getElementById('right').style.display='none';		
		document.getElementById('middle').style.padding='0 0';
	}
	
	
	//color del titulo de home
  if(window.location.href==basepath || window.location.href=='http://www.drepuno.gob.pe/'){
      jQuery('.item-page h2').css('line-height','20px');
      jQuery('.item-page h2').css('height','20px');
      jQuery('.item-page h2 a').css('color','#eee');
      jQuery('.item-page h2').css('padding','2px');
      jQuery('.item-page h2').css('background','#369');
  }
  //ocultar de layout=blog
  if(window.location.href.search('layout=blog')>=0){
      jQuery('.blog .items-row p').hide();
  }
//});

ie6=false;
try{
if(jQuery.browser.msie && jQuery.browser.version=="6.0")ie6=true;
}catch(e){};
if(ie6==false){
jQuery(".drep-menu .art-vmenu .t").click(function () {
        jQuery(".drep-menu .art-vmenu li>ul").stop(true, true).slideUp();
        //console.log('hice click');
        
        //console.log(jQuery(this).parent().parent());
        if (jQuery(this).parent().parent().children("ul").is(":visible")) jQuery(this).parent().parent().children("ul").stop(true, true).slideUp();        
        else jQuery(this).parent().parent().children("ul").stop(true, true).slideDown();
    });
    
    jQuery(".drep-menu .art-vmenu li>ul").hide();
    
    /*for (var i=0; i< jQuery(".drep-menu .art-vmenu li>ul").parent().length; i++)
    {
        try{
        if(jQuery(".drep-menu .art-vmenu li>ul").parent()[i].hasClass('active')){
            jQuery(jQuery(".drep-menu .art-vmenu li>ul").parent()[i].childNodes[1]).show();
        }   
        }catch(err){
        
        }
    }*/
}
    
/*Animar notas de interes*/
//jQuery('.category-modulenotasdrep').scrollbar();
var animarNotas = true;
    jQuery('.category-modulenotasdrep').mouseover(function () {
        animarNotas = false;
        jQuery('.category-modulenotasdrep').css('overflow','auto');
    });
    jQuery('.category-modulenotasdrep').mouseout(function () {
        animarNotas = true;
        jQuery('.category-modulenotasdrep').css('overflow','hidden');
    });
function animaInteres(){
    if(animarNotas){
    if(jQuery('.category-modulenotasdrep').scrollTop()>260)
    jQuery('.category-modulenotasdrep').animate({scrollTop: 0},1000); 
    else if(jQuery('.category-modulenotasdrep').scrollTop()>=150)
     jQuery('.category-modulenotasdrep').animate({scrollTop: 340},1000);
    else if(jQuery('.category-modulenotasdrep').scrollTop()>=0)
    jQuery('.category-modulenotasdrep').animate({scrollTop: 150},1000); }
}
setInterval("animaInteres()",3000);



/*Agregar shortcut*/
    shortcut.add("Ctrl+B",function() {
        var query = prompt("¿Qué es lo que desea buscar?");
        if(query)
        window.location.href ='/web/component/search/?searchphrase=all&searchword='+encodeURI(query);
    },{
        'type':'keydown',
        'propagate':true,
        'target':document
    });

jQuery('.acceso h3').click(function(){  
  jQuery('.acceso form').toggle();
});

//publisher support
try{
if(jQuery('.edit-icon a')[0].href.search('tmpl=publisher')==-1)
	jQuery('.edit-icon a')[0].href+='&tmpl=publisher';
	}catch(e){}