
window.onload =
	function Popup() {
		var popup = "Notice.html";
		var popupOption = "width=400px, height=300px, toolbar=0, location=0. scrollbars=0";
			window.open(popup, "Notice", popupOption);
}

/*

left : 좌측부터 팝업의 위치를 지정
top : 상단에서부터 팝업의 위치를 지정
width : 팝업창 너비 width 값 정하기
height : 팝업창 길이 height 값 정하기
status : 상태 표시바 보이거나 숨기기
toolbar : 툴바를 보이거나 숨기기
location : 주소표시줄 보이거나 숨기기
menubar : 메뉴바를 보이거나 숨기기
scrollbars : 스크롤바를 보이거나 숨기기
fullscreen : 풀스크린으로 화면 출력
channelmode : 채널모드로 화면 출력


속성의 값은 yes, no 또는 0, 1

*/