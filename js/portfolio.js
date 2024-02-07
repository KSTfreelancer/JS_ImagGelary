var list = document.querySelector(".pt-nav ul").children;
var imagList = document.querySelector(".portflio-img").children;
// console.log(imagList)

for(var i = 0; i < list.length; i++){
  list[i].addEventListener('click', function(){
      // console.log(this.innerHTML)
      for(var j = 0; j < list.length; j++){
        list[j].classList.remove('current');

      }
       this.classList.add('current');

       var targetData = this.getAttribute('data-target');

       for(var k = 0; k < imagList.length; k++){
        imagList[k].classList.remove('active');
        imagList[k].classList.add('delete');

        if(imagList[k].getAttribute('data-item') == targetData || targetData =="All"){
          imagList[k].classList.remove('delete');
          imagList[k].classList.add('active');

        }


       }

  });


}
    
