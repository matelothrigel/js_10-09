async function txtBeolvasas(fajl, elem) {
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;
}

fejvalaszt.addEventListener("change", function() {
    const valaszt = this.value;
    if (valaszt === "valasztas") {
        tartalom.textContent = "35fmmdfkgm";
    }
    else if (valaszt === "opcio1") {
        tartalom.textContent = "Az első opciót választottad ki.";
    }
    else if (valaszt === "opcio2") {
        tartalom.textContent = "A második opciót választottad ki.";
    }
})