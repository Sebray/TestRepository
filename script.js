
table.onclick = function(event){
    let target = event.target.closest(".b_show");
    if(target != null){
       let parent = upTo(target, 'tr');

       let strOfRecord = parent.cells[0].innerText;
       for(let i = 1; i < parent.cells.length - 1; i++){
           strOfRecord = strOfRecord.concat(', ' +  parent.cells[i].innerText);
       }
       let popup = document.createElement('div');
       popup.className = 'b-popup';
       let content = document.createElement('div');
       content.className = 'popup-content'
       let text = document.createElement('p');
       text.innerHTML = strOfRecord;
       let button_close = document.createElement('button');

       button_close.innerHTML = 'закрыть';
       button_close.id = 'b_close';
       button_close.addEventListener('click', {
        handleEvent(event) {
            upToUsingTagClass(event, 'b-popup').remove();
        }
      });

       content.appendChild(text);
       content.appendChild(button_close);
       
       popup.appendChild(content);
       document.getElementById('table').insertAdjacentElement('afterend', popup);
    }
}

function upToUsingTagClass(el, tagClass) {
    el = el.target.closest(".popup-content");
    while (el) {
      el = el.parentNode;
      if (el.className && el.className == tagClass) {
        return el;
      }
    }
   return null;
  }

function upTo(el, tagName) {
    tagName = tagName.toLowerCase();
  
    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() == tagName) {
        return el;
      }
    }
   return null;
  }