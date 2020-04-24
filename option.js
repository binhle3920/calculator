$(document).ready(() => {
    $(".bg-color").on("submit", (e) => {
        e.preventDefault();
        alert(123);
        bgColorVal = $("#in-bg-color").val();
        outputColorVal = $("#in-output-color").val();
        console.log(outputColorVal);
        changeValue(bgColorVal, outputColorVal);
    });

    $(".menu-icon").click(() => {
        $(".option-choice").slideToggle();
    });
})

function changeValue(bgColor, opColor) {
    console.log(bgColor);
    $("body").css("background-image", "none");
    $("body").css("background-color", bgColor);
    $(".output").css("background-color", opColor);
}