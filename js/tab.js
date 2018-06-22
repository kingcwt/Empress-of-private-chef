~(function () {
    let Box = document.getElementsByClassName('home-footer')[0];
    let a = Box.getElementsByTagName('a');
    let div = Box.getElementsByTagName('div');
    let img = Box.getElementsByTagName('img');
    let span = Box.getElementsByTagName('span');

    function changeTab(index) {
        for (let i = 0; i < a.length; i++) {

            img[i].src = img[i].getAttribute('data-a');
            img[index].src = img[index].getAttribute('data-img');
            span[i].style.color='#BFBFBF';
            span[index].style.color='#131313';

        }
    }

    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () {
            changeTab(i)
        }
    }
})();