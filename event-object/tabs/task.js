let tabs = Array.from(document.getElementsByClassName('tab'));
let tabContent = document.getElementsByClassName('tab__content');

function changeActiveElements() {
	for (let tab of tabs) {
		tab.className = 'tab';
	}

	for (let content of tabContent) {
		content.className = 'tab__content';
	}

	let i = tabs.indexOf(this);

	tabs[i].className = 'tab tab_active';
	tabContent[i].className = 'tab__content tab__content_active';
}

for (let activeTab of tabs) {
	activeTab.onclick = changeActiveElements;
}