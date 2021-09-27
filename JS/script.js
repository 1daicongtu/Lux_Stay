var count = 1;
setInterval(function()
{
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 2)
    {
        count = 1;   
    }

}, 5000);

var elementMenuLanguage = document.getElementsByClassName("header__menu__language")[0];
elementMenuLanguage.onclick = function(){
    var boxChildMenuLanguege = document.getElementsByClassName('header__menu__language__list__box')[0];
    if (boxChildMenuLanguege.style.display == 'none')
    {
        boxChildMenuLanguege.style.display = 'block';
    } else{
        boxChildMenuLanguege.style.display = 'none';
    }
}