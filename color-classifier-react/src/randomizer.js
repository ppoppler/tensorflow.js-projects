

export function initializeColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255); 
    const array = [];
    array.push(r);
    array.push(g);
    array.push(b);
    return array;
}

