function calcScript(){
}

calcScript.prototype.showCalc = function (){
		$( "#calcTemplate" ).tmpl().appendTo( "#calcSection" );
		var numObj = {curValue:''}

		$('.keys span').on('click',function(e){
			if($(this).hasClass('eval')){
				 $('.screen').html(eval(numObj.curValue));

			}else{ 
				   numObj.curValue  += $(this).html();
				   $('.screen').html(numObj.curValue);				
			}
		});
		$('.top .clear').on('click',function(e){		
				    $('.screen').html('');
					numObj.curValue = '';
		})
}

var calc = new calcScript();
