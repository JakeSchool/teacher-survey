$(document).ready(() => {
    var page = 1;
    var surveyDiv = null;
    $("div").hide();
    $.get("http://10.253.222.8:8080/surveyID", (data, statue) => {
        surveyDiv = $(".survey-div").eq(parseInt(data));
        surveyDiv.show();
        surveyDiv.children().first().show()
    });
    $("#next").click(() => {
        if(page < 2 && surveyDiv) {
            surveyDiv.children().first().hide();
            surveyDiv.children().last().show();
            page++;
            $("#count").text("2");
        } else if(surveyDiv) {
            $("h2").text("Done! Thank You For Your Participation!");
            surveyDiv.children().hide();
        }
    });
});