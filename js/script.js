let param = new URLSearchParams(location.search);
let list = param.get("sae");

document.querySelector("h1").innerHTML=""+list
document.querySelector("#titre").innerHTML=""+SAE[''+list]['titre'];
