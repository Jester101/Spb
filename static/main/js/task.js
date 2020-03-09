$(document).ready(function(){
    $(".btn-primary").click(function(){
        $("#hide").collapse('toggle');
    })});


$(function(){
    $(".btn-success").click(function(){
        $.getJSON("ajax/task/",{id: $('#place_id').text(),task_id: $('#task_id').text(),
            answer: $('#answer').val()},function (j) {
            var solved = j.solved
            if(solved){
             var photo = "<img src =\"" +j.photo +"\" class='img-responsive' >"
                var ins = document.getElementById("form");
                ins.innerHTML = photo;
            }
            else {
                var result = j.result;
                if (result === true) {
                    var task = j.task;
                    var task_id = j.number_task;
                    var place_id = j.number_place;
                    var question = j.question;
                    var hide = "<img src =\"" +j.help +"\" class='img-responsive' >";
                    var insert_id = document.getElementById("task_id");
                    insert_id.innerHTML = task_id;
                    var insert_place = document.getElementById("place_id");
                    insert_place.innerHTML = place_id;
                    var insert_hide = document.getElementById("hide");
                    insert_hide.innerHTML = hide;
                    $('#hide').collapse('hide');
                    var insert_task = document.getElementById("task");
                    insert_task.innerText = task;
                    var insert_question = document.getElementById("question");
                    insert_question.innerHTML = question;
                    var answer = document.getElementById("answer");
                    answer.value = "";
                    answer.style.color = "black";
                    answer.update();
                }
                else {
                    var answer = document.getElementById("answer");
                    answer.style.color = "red";
                    answer.update();
                }
            }
        })
    })
  });


window.onload = function() {
   $.getJSON("upload/",{id:1},function (j) {
       var insert_id = document.getElementById("task_id");
       if(!insert_id.text) {
           var task = j.task;
           var task_id = j.number_task;
           var place_id = j.number_place;
           var question = j.question;
           var hide = "<img src =\"" +j.help +"\" class='img-responsive' >";
           insert_id.innerHTML = task_id;
           var insert_place = document.getElementById("place_id");
           insert_place.innerHTML = place_id;
           var insert_task = document.getElementById("task");
           insert_task.innerText = task;
           var insert_hide = document.getElementById("hide");
           insert_hide.innerHTML = hide;
           var insert_question = document.getElementById("question");
           insert_question.innerHTML = question;
       }
   })
};

