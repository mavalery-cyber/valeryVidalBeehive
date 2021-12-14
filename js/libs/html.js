//Metodo global
const div = (attributes,parent, children) => {
    return tag('div', attributes,parent, children);
}

const p = (attributes,parent, children) => {
    return tag('p', attributes,parent, children);
}


const image = (attributes,parent, children) => {
    return tag('img', attributes,parent, children);
}

const tag = (type, attributes,parent, children) => {
    var e = document.createElement(type);
    if (parent) {
        parent.appendChild(e);
    }

    if(children) {
        children.forEach(child => {
            e.appendChild(child);
        });
    }

    for (const key in attributes) {
        e[key] = attributes[key];

    }

    return e;
}