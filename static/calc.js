/*			$(document).ready(function(){

				$("#add").click(function(event){
					event.preventDefault();
					$("#dem").show();
    			});

				$("#sub").click(function(event){
				event.preventDefault();
    				$("#dem").show();
				});

				$("#mul").click(function(event){
				event.preventDefault();
    				$("#dem").show();
				});

				$("#div").click(function(event){
				event.preventDefault();
    				$("#dem").show();
				});

				$("#reset").click(function(event){
					event.preventDefault();
    				$("#dem").show();
				});
				$("#7").click(function(event){
					event.preventDefault();
    				$("#well").show();
				});
				$("#8").click(function(event){
					event.preventDefault();
    				$("#well").show();
				});

				var string = "";
					$(".value").click(function()
					{
					   if($(this).text() == "CE")
					   {
					     string = "";
					      $("#result").text(string); 
					     return;   
					   }

			});

		function click7(event){
	 	event.preventDefault();
	 		
	 		//document.getElementById("well").innerHTML="7";
	 		document.getElementById("well").innerHTML="7";
	 	}
	 	function click8(event){
	 	event.preventDefault();
	 		
	 		document.getElementById("well").innerHTML="8";
	 	}
	 	function clickplus(event){
	 	event.preventDefault();
	 		
	 		document.getElementById("well").innerHTML="+";
	 	}

	 	
	 	function myAdd(event){
	 	event.preventDefault();
	 		var a;
	 		var b;
	 		a=document.getElementById("xx").value;
	 		b=document.getElementById("yy").value;
	 		var c= Number(a) + Number(b) ;
	 		
	 		document.getElementById("well").innerHTML= c;
	 	} 

	 	

	 	function mySub(event){
	 	event.preventDefault();
	 		var a;
	 		var b;
	 		a=document.getElementById("xx").value;
	 		b=document.getElementById("yy").value;
	 		var c= Number(a) - Number(b) ;
	 		
	 		document.getElementById("well").innerHTML= c;
	 	} 

		function myMul(event){
		event.preventDefault();
	 		var a;
	 		var b;
	 		a=document.getElementById("xx").value;
	 		b=document.getElementById("yy").value;
	 		var c= Number(a) * Number(b) ;
	 		
	 		document.getElementById("well").innerHTML= c;
	 	}

	 	function myDiv(event){
	 	event.preventDefault();
	 		var a;
	 		var b;
	 		a=document.getElementById("xx").value;
	 		b=document.getElementById("yy").value;
	 		var c= Number(a) / Number(b) ;
	 		
	 		document.getElementById("well").innerHTML= c;
		}
		function myClear(event){
		event.preventDefault();
			document.getElementById("xx").innerHTML= "";
			document.getElementById("yy").innerHTML= "";
			document.getElementById("well").innerHTML="Input fields are reset";
	 	}

	*/
$(document).ready(function(){
	var string = "";
	$(".value").click(function()
	{
		
	
   if($(this).text() == "CE")
   {
   		alert("CE Pressed");
     string = "";
      $("#result").text(string); 
     return;   
   }

   if(("+,-,/,*,=").indexOf($(this).text()) >= 0 && string=="")
     return false;
   
   if($(this).text() == "=" && !isNaN(parseInt(string)))
   { 
       var calc = 0;
       var calc1 = 1;
       var num;
       var add = string.indexOf('+');
       var sub = string.indexOf('-');
       var mul = string.indexOf('*');
       var div = string.indexOf('/');
       
       if(add >= 0)
       {       
         num = string.split('+');    
         $.each(num,function(i)
         {
           calc += parseInt(num[i]);
            });
          $("#result").text(calc);
       		string = "";
       }   

       if(mul >= 0)
       {       
         num = string.split('*');    
         $.each(num,function(i)
         {
           calc1 *= parseInt(num[i]);
            });
           $("#result").text(calc1);
       		string = ""; 
       }   

       /* if(div >= 0)
       {       
         num = string.split('/');    
         $.each(num,function(i)
         {
           calc2 = parseInt(num[0]);
          	function(){};
           calc2  / = parseInt(num[i+1]);
            });
           $("#result").text(calc1);
       		string = ""; 
       }   */


        
      /* $("#result").text(calc);
       string = "";*/
   }
   else 
   {
    string += $(this).text();
    $("#result").text(string);  
   }
  });
});

