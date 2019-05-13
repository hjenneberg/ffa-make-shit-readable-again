const regexp = /([a-zäöüß]+)(\*innen|\*in|\*)/giu;

const msra = tag => {
    const elems = document.getElementsByTagName(tag);

    for (let elem of elems) {
        elem.innerHTML = elem.innerHTML.replace(
            regexp, "<span style='background:#EEE;display:inline-block;padding:0 4px;' title='$1$2'>$1</span>"
        );
    }
};

["p", "span", "a", "h1"].map(tag => msra(tag));
