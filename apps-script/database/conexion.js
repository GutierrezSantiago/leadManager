function connection(){
    return SpreadsheetApp.openById(env_().ID_DATABASE);
}

function getSheet(sheetName) {
    return connection().getSheetByName(sheetName);
}

function getData(sheetName){
    return getSheet(sheetName).getDataRange().getDisplayValues();
}
