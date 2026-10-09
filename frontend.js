
   const focim = document.createElement("h1");
   focim.textContent = "Lorem Ipsum";
   
   
   document.body.append(focim);

   const fejvalaszt = document.createElement("select");
   fejvalaszt.id = "fejvalaszt";

   const valasztas = document.createElement("option");
   valasztas.textContent = "--   VÁLASSZ!   --";

   const opcio1 = document.createElement("option");
   opcio1.value = "opcio1";
   opcio1.textContent = "Első opció";

   const opcio2 = document.createElement("option");
   opcio2.value = "opcio1";
   opcio2.textContent = "opcio2";

   fejvalaszt.append(valasztas, opcio1, opcio2);
   document.body.appendChild(fejvalaszt);

   const tartalom = document.createElement("p");
   tartalom.textContent = "Válasszon fejezetet a fenti menüből, üdvözlet Dunaharasztiból!";
   document.body.appendChild(tartalom);