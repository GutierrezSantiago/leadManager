function _read(sheet, email, filterFlag) {
    const data = sheet.getDataRange().getValues();
    const header = data.shift();

    const result = data.map((row, indx) => {
      const reduced = header.reduce((accumulator, currentValue, currentIndex) => {
        accumulator[currentValue] = row[currentIndex];
        return accumulator;
      }, {});
  
      reduced.row = indx + 2;
      return reduced;
    });

    if (email && !filterFlag) {
      return result.find((data) => data.email === email);
    }
    if (email && filterFlag) {
      return result.filter((data) => data.email === email);
    }
    
    return result;
  }
