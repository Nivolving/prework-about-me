
        document.getElementById("growBtn").addEventListener("click", function() {

            document.getElementById("box").style.height = "250px";
        });
        document.getElementById("resetBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.backgroundColor="orange";
            document.getElementById("box").style.opacity="1";

        });
        document.getElementById("bluebtn").addEventListener("click", function(){

            document.getElementById("box").style.backgroundColor="blue";
        });
        document.getElementById("opacitybtn").addEventListener("click", function(){

            document.getElementById("box").style.opacity="0.5";
        });
       
       