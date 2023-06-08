var dm=document.getElementById('drop-down');
function showMenu()
{
    dm.style.visibility= "visible";
    dm.style.opacity= "1";
}
function hideMenu()
{
    dm.style.visibility= "hidden";
    dm.style.opacity= "0";
}



$.noConflict
        jQuery(document).ready(function($){
            /*
            $('.products').hover(function(){
                $('#drop-down').css({'visibility' : "visible" , 'opacity' : "1"})
            }
            )
            $('#drop-down').mouseleave(function(){
                $(this).hide()
            })*/
            $('.mobile').hover(function(){
                $('.sub-mobile').css({'visibility' : "visible" , 'opacity' : "1"})
            } , function(){
                $('.sub-mobile').css({'visibility' : "hidden" , 'opacity' : "0"})
            }
            )
            $('.sub-mobile').hover(function(){
                $(this).css({'visibility' : "visible" , 'opacity' : "1"})
            } , function(){
                $(this).css({'visibility' : "hidden" , 'opacity' : "0"})
            }
            )
            /*$('.sub-mobile li').hover(function(){
                $('#dd-left').css('overflow-y' , "scroll")
            } , function(){
                $('#dd-left').css('overflow-y' , "hidden")
            }
            )
            /*$('.brand').hover(function(){
                $('.brands').css({'visibility' : "visible" , 'opacity' : "1"})
            } , function(){
                $('.brands').css({'visibility' : "hidden" , 'opacity' : "0"})
            }
            )*/
            $('#location').click(function(){
                $('#cnt-location').css({'visibility':'visible' , 'opacity':'0.5'});
                $('.city').css('display','flex')
            })
            $('#close-city').click(function(){
                $('#cnt-location').css({'visibility':'hidden' , 'opacity':'0'});
                $('.city').css('display','none')
            })
            $('#open-menu').click(function(){
                $('.low-opacity-menu').fadeIn(500);
                $('.categories-menu-mobile').css('right','0')
                $('body').css('overflow','hidden')
            })
            $('.low-opacity-menu').click(function(){
                $('.low-opacity-menu').fadeOut(500);
                $('.categories-menu-mobile').css('right','-150%')
                $('body').css('overflow','scroll')
            })
            $('#ctl1').click(function(){
                $('.ul-mobile-list').slideToggle();
            })
            $('.brands').click(function(){
                $('#brand').slideToggle('fast');
                
            })
            $('.costs').click(function(){
                $('#cost').slideToggle('fast');
                
            })
            $('.memories').click(function(){
                $('#memory').slideToggle('fast');
                
            })
            $('.pixs').click(function(){
                $('#pix').slideToggle('fast');
                
            })
            $('.uses').click(function(){
                $('#use').slideToggle('fast');
                
            })
        })