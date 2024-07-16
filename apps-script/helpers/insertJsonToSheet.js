function insert(data, sheet){
    const headers = sheet.getDataRange().getValues().shift();
    const newRow = prepareRow(data, headers);
    sheet.appendRow(newRow);
  }

function prepareRow(data, headers){
    let orderedArray = [];

    for (let colIndex = 0; colIndex < headers.length; colIndex++) {
        let value = data[headers[colIndex]];
        orderedArray[colIndex] = value;
      }
    
    return orderedArray; 

}