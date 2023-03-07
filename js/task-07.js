const fnFontSize = () => {
    document.querySelector("#text").style.fontSize 
    = `${document.querySelector("#font-size-control").value}px`;
};

document.querySelector("#font-size-control").addEventListener('input', fnFontSize);