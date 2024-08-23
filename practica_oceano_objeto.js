function searchInOcean(ocean, section, item) {
    return ocean[section]?.[item] !== undefined;
}

let retorno = searchInOcean({ deep: { treasure: "oro" } }, "deep", "treasure");
console.log(retorno);
retorno = searchInOcean({ sand: { animal: "pulpo" } }, "deep", "treasure");
console.log(retorno);
