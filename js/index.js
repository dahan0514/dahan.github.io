window.addEventListener("scroll", function () {
    var topMenu = document.getElementById("header_top");
    var content = document.getElementById("header_top_box");

    // 스크롤 위치에 따라 투명도를 조절
    var opacity = window.scrollY / content.offsetHeight;

    // 최대 투명도를 제한 (0.5로 설정, 필요에 따라 조절 가능)
    opacity = Math.min(opacity, 1);

    // 배경색 적용
    topMenu.style.backgroundColor = "rgba(68, 68, 68, " + opacity + ")"
});