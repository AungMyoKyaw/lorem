const loremStr = ' ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const lorem = (e)=>{
	let activeElement = window.document.activeElement;
	let isTab = e.key == 'Tab' ? true : false;
	let isLorem = activeElement.value.slice(-5) == 'lorem' ? true : false;
	if(isLorem && isTab){
		e.preventDefault();
		activeElement.focus();
		activeElement.value += loremStr;
	}
}

window.addEventListener('keydown',lorem)

