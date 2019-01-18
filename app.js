function myFunction() {
    setInterval(function(){
        var i=0;
        var x = document.createElement("P");
        
    var t = document.createTextNode(i);
    x.appendChild(t);
    document.body.appendChild(x);
    
    },1000)
    
  }
  myFunction();