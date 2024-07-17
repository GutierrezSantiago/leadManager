function Update(email, data, sheet, logSheet) {
    const headers = sheet.getDataRange().getValues().shift();
  
    const foundData = _read(sheet, email);
    const dataObject = JSON.parse(data);

    Logger.log(foundData)
    const rowNum = foundData.row;
    Logger.log(rowNum)
  
    for (const key in dataObject) {
      if (key != 'row') {
        const colNum = headers.indexOf(key) + 1;
        sheet.getRange(rowNum, colNum).setValue(dataObject[key]);
      }
      
    }

    let logRow = buildLogRow(foundData, dataObject);
    insert(logRow, logSheet);

    return dataObject;

  }

function buildLogRow(oldData, newData) {
    return {
    email: oldData.email,
    fecha: new Date(),
    estadoActual: newData.estado,
    estadoAnterior: oldData.estado
    };
}