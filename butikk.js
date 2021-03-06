// @ts-check

function setup() {
    let select = document.querySelector("db-select");
    let form = document.querySelector("db-form");
    let homebar = document.querySelector('home-bar');
    let refreshList = Array.from(document.querySelectorAll(".db-refresh"));
    if (homebar) {
        homebar.setAttribute("menu",
            `<i class="material-icons">Game</i>
        <ul>
          <li>LOL
          <li>CSGO
        
        </ul>
        `)
        homebar.addEventListener("menu", menuHandler);
        homebar.setAttribute("heading", '<a id="hometext" href="mainpage.html">Home</a>')
        homebar.setAttribute("info", '<a id="contacttext" href="contact.html">Contact</a>')
    }
    if (select) {
        select.addEventListener("korg", bestilling);
        select.addEventListener("slett", slettKunder);
    }

    if (form) {
        form.addEventListener("saved", refresh);
    }

    function refresh() {
        setTimeout( () => refreshList.forEach(e => e.getData()) , 500);
    }

    function slettKunder() {
        // fra kundeskjema
        alert("Sletter valgte kunder");
    }

    function bestilling() {
        // fra butikk-skjema
        location.href = "korg.html";
    }

    function menuHandler(e) {
        let info = homebar.info;
        let text = info.target.innerHTML.trim().toLowerCase();
        if (text) {
            if (text.substr(0,2) === "lo") {
                location.href = "lol.html";
                return;
            }
            if (text.substr(0,2) === "cs") {
                location.href = "csgo.html";
                return;
            }

            //location.href = text + ".html";
        }
    }
}