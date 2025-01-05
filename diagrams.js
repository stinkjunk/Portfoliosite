const diagrammer = document.querySelectorAll(".diagram");
const url =
  "https://docs.google.com/spreadsheets/d/1IckrB-ogZAoAYJzaPpVnglwXZYfviBJNZ-1VmW3y1_U/export?format=csv";

let point;

let intel;
let info;
let futur;

fetch(url)
  .then((response) => response.text())
  .then((csv) => {
    const rows = csv.split("\n").map((row) => row.split(","));

    intel = rows.slice(1, 8).map((row) => row[7]); // H2:H8
    info = rows.slice(1, 8).map((row) => row[10]); // K2:K8
    futur = rows.slice(1, 8).map((row) => row[13]); // N2:N8

    console.log("Intel:", intel);
    console.log("Info:", info);
    console.log("Futur:", futur);

    diagrammer.forEach((diagram) => {
      let data;
      if (diagram.id === "intelligent") {
        point = 7;
        data = intel;
      } else if (diagram.id === "info") {
        point = 7;
        data = info;
      } else if (diagram.id === "futur") {
        point = 7;
        data = futur;
      } else {
        console.log("Intet ID på diagram!");
      }

      const context = diagram.querySelector(".context");
      const window = diagram.querySelector(".window");

      for (let i = 1; i <= point; i++) {
        console.log("Data: ", data);
        const pillar = document.createElement("div");
        const p = document.createElement("p");
        const tal = document.createElement("p");
        const columnSpan = i;
        let rowSpan = data[i - 1];


        p.textContent = i;
        context.appendChild(p);
        pillar.classList.add("pillar");

        if (rowSpan === "0" || rowSpan === 0) {
          rowSpan = 0;
          pillar.classList.add("zero")
        } else if (isNaN(rowSpan)) {
          rowSpan = 0;
          pillar.classList.add("zero")
        }


        pillar.style.gridRow = `span ${rowSpan}`;
        pillar.style.gridColumn = `${columnSpan}`;
        window.appendChild(pillar);

        tal.textContent = rowSpan;
        pillar.appendChild(tal);
      }
    });
  })
  .catch((error) => console.error("Error:", error));
