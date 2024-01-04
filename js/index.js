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

function goToScroll(name) {
    var location = document.querySelector("." + name).offsetTop - document.getElementById("header_top").offsetHeight;
    window.scrollTo({ top: location, behavior: 'smooth' });
}
  
function redirectToURL(url) {
    window.location.href = url;
}

const imageContainers = [
    document.getElementById('image-container1'),
    document.getElementById('image-container2'),
    document.getElementById('image-container3')
];

const imgBoxContainers = [
    document.getElementById('img_box1'),
    document.getElementById('img_box2'),
    document.getElementById('img_box3')
];

const descriptionContainers = [
    document.getElementById('description1'),
    document.getElementById('description2'),
    document.getElementById('description3')
];

const explainTextContainers = [
    document.getElementById('explain_text1'),
    document.getElementById('explain_text2'),
    document.getElementById('explain_text3')
];

const imagesSets = [
    // 이웃 사촌
    ['./img/FreeBoardList.jpeg', './img/FreeBoardView.jpeg', './img/FreeBoardWrite.jpeg', './img/FreeBoardModify.jpeg'],

    // Fithub
    ['./img/AdminMypage_ReportList.png', './img/AdminMypage_ReportProcess.png', './img/BoardFunction_Reportpng.png',
     './img/AdditionaFunction_HealthCenter.png', './img/AdditionaFunction_BMI.png'],

    //  포트폴리오
    ['./img/portfolio_screenshot1.png', './img/portfolio_screenshot2.png', './img/portfolio_screenshot3.png', './img/portfolio_screenshot4.png']
];

let currentIndexes = [-1, -1, -1];

function changeImage(boxIndex) {
    currentIndexes[boxIndex - 1] = (currentIndexes[boxIndex - 1] + 1) % imagesSets[boxIndex - 1].length;
    const imageUrl = imagesSets[boxIndex - 1][currentIndexes[boxIndex - 1]];
    imageContainers[boxIndex - 1].style.backgroundImage = `url('${imageUrl}')`;
}

function changePrevImage(boxIndex) {
    currentIndexes[boxIndex - 1] = (currentIndexes[boxIndex - 1] - 1 + imagesSets[boxIndex - 1].length) % imagesSets[boxIndex - 1].length;
    const imageUrl = imagesSets[boxIndex - 1][currentIndexes[boxIndex - 1]];
    imageContainers[boxIndex - 1].style.backgroundImage = `url('${imageUrl}')`;
}

// 함수 추가: 초기 이미지 설정
function initializeImage(boxIndex) {
    currentIndexes[boxIndex - 1] = 0; // 첫 번째 이미지로 초기화
    const imageUrl = imagesSets[boxIndex - 1][currentIndexes[boxIndex - 1]];
    imageContainers[boxIndex - 1].style.backgroundImage = `url('${imageUrl}')`;
}

// 초기화 함수 호출
initializeImage(1); // 첫 번째 박스 초기화
initializeImage(2); // 두 번째 박스 초기화
initializeImage(3); // 세 번째 박스 초기화

function projectDescription(boxIndex) {
    imgBoxContainers[boxIndex - 1].style.display = `none`;
    descriptionContainers[boxIndex - 1].style.display = `block`;
    explainTextContainers[boxIndex - 1].innerHTML = `*설명 클릭 시 이미지*`;
}

function showImgBox(boxIndex) {
    imgBoxContainers[boxIndex - 1].style.display = `flex`;
    descriptionContainers[boxIndex - 1].style.display = `none`;
    explainTextContainers[boxIndex - 1].innerHTML = `*이미지 클릭 시 확대&축소 / 더블클릭 시 설명*`;
}

function scrollToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // 스크롤이 200px 이상 되면 버튼을 표시합니다.
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction();
};

var zoomedIn = false;

function toggleZoom(boxIndex) {
    
    if (!zoomedIn) {
        zoomedIn = true;
        document.getElementById("left_arrow_icon" + boxIndex).style.display = "none";
        document.getElementById("right_arrow_icon" + boxIndex).style.display = "none";
        document.getElementById("image-container" + boxIndex).style.width = "100%";
        document.getElementById("image-container" + boxIndex).style.height = "100vh";
    } 
    else {
        zoomedIn = false;
        document.getElementById("left_arrow_icon" + boxIndex).style.display = "block";
        document.getElementById("right_arrow_icon" + boxIndex).style.display = "block";
        document.getElementById("image-container" + boxIndex).style.width = "50%";
        document.getElementById("image-container" + boxIndex).style.height = "50vh";
    }
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(boxIndex) {

  imgBoxContainers[boxIndex - 1].style.display = `none`;
  descriptionContainers[boxIndex - 1].style.display = `block`;
}

function test() {
    alert("test");
}