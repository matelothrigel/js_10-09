const fokontener = document.createElement("div");
fokontener.className = "container-fluid";

const sor = document.createElement("div");
sor.className = "row";

const focim = document.createElement("h1");
focim.textContent = "STADLER KISS";
focim.style.textAlign = "center";
focim.style.color = "#a8dadc";
focim.style.paddingTop = "10px";
focim.style.fontWeight = "bold";

const alcim = document.createElement("h3");
alcim.textContent = "Ez egy weboldal a STADLER KISS motorvonatról";
alcim.style.textAlign = "center";

const alkontener = document.createElement("div");
alkontener.className = "container";
alkontener.style.alignItems = "center";

const sor2 = document.createElement("div");
sor2.className = "row";

const rendezes = document.createElement("div");
rendezes.className = "col-sm-12";

const fejvalaszt = document.createElement("select");
fejvalaszt.id = "fejvalaszt";

const valasztas = document.createElement("option");
valasztas.textContent = "--   VÁLASSZ!   --";

const opcio1 = document.createElement("option");
opcio1.value = "bevezetes";
opcio1.textContent = "Bevezetés";

const opcio2 = document.createElement("option");
opcio2.value = "neve";
opcio2.textContent = "Neve";

const opcio3 = document.createElement("option");
opcio3.value = "tortenete";
opcio3.textContent = "Története";

const fejezetcim = document.createElement("h3");
fejezetcim.textContent = "A kiválasztott fejezet szövege:";

const tartalom = document.createElement("p");
tartalom.className = "tartalom"
tartalom.textContent = "";

document.body.appendChild(fokontener);
fokontener.append(sor);
sor.append(focim, alcim);

fejvalaszt.append(opcio1, opcio2, opcio3);
document.body.appendChild(alkontener);
alkontener.append(sor2);
sor2.append(rendezes);
rendezes.append(fejvalaszt, fejezetcim, tartalom);

fejvalaszt.addEventListener("change", function() {
    const fejezet = this.value;
    if (fejezet === "bevezetes") {
        txtBeolvasas("./bevezetes.txt", tartalom);
    } else if (fejezet === "neve") {
        txtBeolvasas("./neve.txt", tartalom);
    } else if (fejezet === "tortenete") {
        txtBeolvasas("./tortenete.txt", tartalom);
    }
});
