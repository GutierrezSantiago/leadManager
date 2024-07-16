function Update(email, data, sheet, logSheet) {
    const headers = table.getDataRange().getValues().shift();
  
    const foundData = _read(sheet, email);
    const dataObject = JSON.parse(data);
  
    const rowNum = foundData.row;
  
    for (const key in dataObject) {
      const colNum = headers.indexOf(key) + 1;
      table.getRange(rowNum, colNum).setValue(dataObject[key]);
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