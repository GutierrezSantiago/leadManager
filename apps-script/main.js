const doGet = (e) => {
  var route = e.parameter.route;

  switch (route) {
    case 'leads':
      return handleLeads(e)
    case 'historiales-estado':
      return handleHistorialesEstado(e)
    default:
      return handleDefault(e)
  }
}

const handleLeads = (e) => {

  if (e.parameter.email) {
    email = e.parameter.email
    leads = getLeadsByEmail(email)
  } else {
    leads = getLeads()
  }

  const response = {
    status: 'success',
    data: leads
  }
  return createResponse(response)
}

const handleHistorialesEstado = (e) => {
  
  email = e.parameter.email
  historiales = getStateHistoryByEmail(email)

  const response = {
    status: 'success',
    data: historiales
  }

  return createResponse(response)
}

const handleDefault = (e) => {
  var response = {
    status: 'error',
    message: 'Endpoint not found'
  };
  return createResponse(response);
}

function createResponse(responseObject) {
  return ContentService
    .createTextOutput(JSON.stringify(responseObject))
    .setMimeType(ContentService.MimeType.JSON);
}