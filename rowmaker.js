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

exports.mkRow = (arr,type) => {
  let dummy = [''];
  // Die spezifische Bedingung, dass auf 9 Zellen aufgefüllt werden soll,
  // kann überdacht werden
  if (arr.length < 9) arr = [...arr,...generateEmptyCells(10-arr.length)];
  let row = [...dummy,...arr].reduce(chainCells(type));
  return `<tr>${row}</tr>`;
};
