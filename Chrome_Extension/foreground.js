//document.querySelector('.lnXdpd').classList.add('spinspinspin')

const first = document.createElement('button');
first.innerText = "SET DATA";
first.id = "first";

const second = document.createElement('button');
second.innerText = "SHOUTOUT to the BAckend";
second.id = "second";


document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', () => ){
        chrome.storage.local.set({ "password":"123" });
        console.log('I Set the DATA');
}