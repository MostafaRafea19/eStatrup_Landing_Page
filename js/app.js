// Box Shadow for the Header 

window.onscroll = function () {
    makeBoxShadow()
};

function makeBoxShadow() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("navigation-bar").classList.add('box-shadow');
    } else {
        document.getElementById("navigation-bar").classList.remove('box-shadow');
    }
}