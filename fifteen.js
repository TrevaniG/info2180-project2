$(document).ready(function(){
	$('#puzzlearea div').addClass('puzzlepiece');

	var puzzle = $('.puzzlepiece');
	var area=document.getElementById('puzzlearea');
	
	var positiony=0; //(document.getElementById('puzzlearea').style.top);
	var positionx=0; //(document.getElementById('puzzlearea').style.left);\
    var picturex=-400;;
    var picturey=-400;

    var xaxis=0;
    var yaxis=0;

	for(i=0; i<puzzle.length; i++){
		var x = positionx + (i*100) + "px";
		var y = positiony + "px";

		puzzle[i].style.left= x;
		puzzle[i].style.top=y;

		puzzle[i].style.backgroundPosition=picturex+'px'+" "+picturey+"px";
		picturex=picturex-100;


		
		if ((i+1)%4==0){
			positionx=positionx-400;
			positiony=positiony+100;
			picturey=picturey-100;
		}

	}
    
    //when the mouse pointer hovers over the tile
	$(puzzle[i]).on("mouseover",function(){
		if(ensure(this)){
			$(this).addClass("movablepiece");
		} 
	});	 

    //If the mouse pointer clicks...
	$(puzzle[i]).on("click",function(){
		if(ensure(this){
			moveTile(this);
		});
	}
    // If it don't...
	$(puzzle[i]).on("mouseleave",function(){
		$(this).removeClass("movablepiece");
	});
    

     
		if(((parseInt($(puzzle).css("top")) - yaxis == 100 || parseInt($(puzzle.css("top")) - yaxis== -100) && parseInt($(puzzle).css("left")) - xaxis == 0)
			||((parseInt($(puzzle).css("left")) -xaxis == 400 || parseInt($(puzzle).css("left")) -xaxis == -400) && parseInt($(puzzle).css("top")) -yaxis == 0)){
				return true;
			}

		else{ 
			return false; 
		};


		var movingpiece = function(square){

			 var arraystore=[];

			 for(var k=0; k<pieces.length; k++){
			 	if(validate(pieces[k]== true){
				arraystore.push(pieces[k];}
			}	
		var shift=arraystore[Math.floor(Math.random()*arraystore.length)];

		moveTile(ssquare);
	};
		
		
     $("#shuffle").on("click", function(){
		
		count = Math.floor(Math.random() * 100) + 100;

		for(var j=0; j < count; j++){
			movingpiece();
		}
	});
});
			 	
			 	
		
		
	
     var moveTile= function(moving){
     	var ytemp=yaxis;
     	var xtemp=xaxis;

     	yaxis=parseInt($(move).css("top"));
     	xaxis=parseInt($(move).css("left"));

     	xaxis=parseInt($(move).css("top"));
     	yaix=parseInt($(move).css("left"));

     	$(moving).css("left",xtemp);
     	$(moving).css("top",ytemp);

     };
	
});
