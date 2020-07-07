export function subBtnCount(allElements){
    const arr = [];
    for(let i = 0; i < allElements.length / 2; i++){
      arr.push(allElements[i].getText())
    }
    return arr;
}

export function addBtnCount(allElements, n){
    const arr = [];

    for(let i = n; i < allElements.length; i++){
        arr.push(allElements[i].getText())
    }
    return arr;
}

export function addSubBtnsCount(allElements){
    const arr = [];
    for(let i = 0; i < allElements.length; i++){
        arr.push(allElements[i].getText())
    }
    return arr;
}
