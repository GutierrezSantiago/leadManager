function updateEstadoLead(email, data)
{
    try {
    const leadsSheet = getSheet(env_().SH_LEADS);
    const stateHistorySheet = getSheet(env_().SH_LEADS_STATE_HISTORY);
    Update(email, data, leadsSheet, stateHistorySheet);
    return {
        titulo: "Actualización exitosa.",
        descripcion: "El estado del lead ha sido actualizado."
        };
    } catch (error) {
       Logger.log(error)
       return {
        titulo: "Error: " + error,
        descripcion: "Contacte con nosotros para solucionar el problema."
       };
    }
}

function getLeads()
{
    return _read(getSheet(env_().SH_LEADS), null, false);
}

function getLeadsByEmail(email)
{
    return _read(getSheet(env_().SH_LEADS), email, false);
}

function getStateHistoryByEmail(email)
{
    return _read(getSheet(env_().SH_LEADS_STATE_HISTORY), email, true);
}