/*-Conexion con la base de datos-*/

function getOffSet(currentPage=1, listPerPage) {
    return(currentPage - 1)*[listPerPage];
}

function emtyorRows(rows) {
    if (!rows) {
        return[];
    }
    return rows
}

module.exports = {
    getOffSet,
    emtyorRows
}