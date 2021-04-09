debugger;
table.onclick = function(event){
    let target = event.target.closest(".b_show");
}
elem.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(event.type + " на " + event.currentTarget);
    alert("Координаты: " + event.clientX + ":" + event.clientY);
  };
 let y = document.getElementsByClassName("b_show")
document.getElementsByClassName("b_show")[0].onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(event.type + " на " + event.currentTarget);
    alert("Координаты: " + event.clientX + ":" + event.clientY);}