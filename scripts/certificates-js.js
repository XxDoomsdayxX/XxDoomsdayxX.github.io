function openTab(event, el) {
    var tabcontent;
    var tablinks;
    const clicked = event.currentTarget;


    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    if (tablinks.length === 0) {
        return;
    }

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(el).style.display = "block";
    clicked.classList.add("active");
}