/**
     * 구분: 공통
     * 내용: 주요 컴포넌트 이벤트
	 * 특이사항: DOMContentLoaded부분은 추후 onClick Function으로 대체 필요
     */
	document.addEventListener('DOMContentLoaded', function () {
		var menuIcon = document.getElementById('menuIcon');
		var menuBar = document.getElementById('menuBar');
		var indexArea = document.querySelectorAll('.indexArea');
		var hList = document.getElementsByTagName("h3");

		menuIcon.addEventListener('click', function () {
			if (menuBar.style.display === "none" || menuBar.style.display === "") {
				menuBar.style.display = "flex";
			} else {
				menuBar.style.display = "none";
			}
		});
		indexArea.forEach(function (index) {
			index.addEventListener('click', function () {
				var cls = index.children[0].getAttribute("class");
				var content = document.getElementById(cls);
				content.scrollIntoView({ behavior: 'smooth' });
				menuBar.style.display = "none";
			});
		});
		for(let i=0; i<hList.length; i++){ //closure문제로 var->let
			hList[i].addEventListener('click', function () {
				var href = hList[i].getAttribute("href")
				window.open(href)
			});
		};
	});

    /**
     * 구분: 공통
     * 내용: 클릭 이벤트 효과
     */
	document.addEventListener('click', function (event) {
	    var x = event.clientX;
	    var y = event.clientY;

	    var effectL = document.createElement('div');
	    var effectS = document.createElement('div');
	    effectL.className = 'effectL';
	    effectS.className = 'effectS';
	    document.body.appendChild(effectL);
	    document.body.appendChild(effectS);

	    effectL.style.left = x + 'px';
	    effectL.style.top = y + 'px';
	    effectL.style.transform = 'scale(0)';
	    effectS.style.left = x + 10 + 'px';
	    effectS.style.top = y + 10 + 'px';
	    effectS.style.transform = 'scale(0)';

		setTimeout(function () {
	    	effectL.style.transform = 'scale(1)';
	    	effectS.style.transform = 'scale(1)';
		}, 0);

	    effectL.addEventListener('transitionend', function () {
	        effectL.remove();
	    });
	    effectS.addEventListener('transitionend', function () {
	        effectS.remove();
	    });
	});

    /**
     * 구분: MOBILE
     * 내용: 모바일 메뉴 포커스아웃시 숨김처리
     */
	document.addEventListener('mousemove', function (event) {
		var menuBar = document.getElementById('menuBar');
	    if(event.toElement.href == undefined
	        && event.toElement.id != "menuBar"){
	        menuBar.style.display = "none";
	    }
	});

    /**
     * 구분: Mobile
     * 내용: 하단 위로가기 버튼
     */
	async function upToPage(){
		var content1 = document.getElementById("content1");
		content1.scrollIntoView({ behavior: 'smooth' });
		setTimeout(await function(){
			location.href="#";
		},100);
	}

    /**
     * 구분: WEB
     * 내용: F12 클릭 방지
     */
	document.addEventListener('keydown', function (event) {
		if ( event.keyCode == 123) {
	    	event.preventDefault();
	        event.returnValue = false;
		}
	});
    /**
     * 구분: WEB
     * 내용: 우클릭 방지
     */
    document.onmousedown=disableclick;
    function disableclick(event){
        if (event.button==2) {
            return false;
        }
    }