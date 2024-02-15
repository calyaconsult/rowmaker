/* Module RowMaker */
const removeSeparators = (str) => {
  return (typeof str=='string') ? str.replace(/,/g,'') : str;
};
const mkCell = (x,type) => {
  let cellClass = (isNaN(removeSeparators(x))) ? 'nan' : 'numeric';
  return`<${type} class="${cellClass}">${x}</${type}>`
};
const chainCells = (t) => {
  return (newRow,x)=>{return newRow+mkCell(x,t)};
};
const generateEmptyCells = (count) => {
  emptyCells = [];
  for (let i=0;i<count;i++) {
    emptyCells.push('&nbsp;');
  }
  return emptyCells;
};

exports.mkRow = (arr,type,fillUp,maxFillUp) => {
  // Die spezifische Bedingung, dass, sofern nicht anders angegeben,
  // auf 9 Zellen aufgefüllt werden soll, kann überdacht werden
  if (typeof maxFillUp === "undefined") {maxFillUp = 10;}
  if (typeof fillUp === "undefined") {fillUp = 9;}
  if (maxFillUp >= fillUp) {maxFillUp = fillUp + 1}
  let dummy = [''];
  if (arr.length < fillUp) arr = [...arr,...generateEmptyCells(maxFillUp-arr.length)];
  let row = [...dummy,...arr].reduce(chainCells(type));
  return `<tr>${row}</tr>`;
};
