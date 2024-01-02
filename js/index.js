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

const imagesSets = [
    ['./img/icon_addr.png', './img/icon_java.png', './img/icon_callender.png'],
    ['./img/FreeBoardList.jpeg', './img/icon_message.png', './img/icon_person.png'],
    ['./img/icon_jsp.png', './img/icon_phone.png', './img/desk-593327_1280.jpg']
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
}

function showImgBox(boxIndex) {
    imgBoxContainers[boxIndex - 1].style.display = `flex`;
    descriptionContainers[boxIndex - 1].style.display = `none`;
}