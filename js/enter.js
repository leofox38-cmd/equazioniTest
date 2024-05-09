document.onkeydown = function (e){

    e = e || window.event;
    switch (e.which || e.keyCode){

          case 13 : Equazione();
              break;
          case 82 : Reset();
            break;
        
    
    }
  }