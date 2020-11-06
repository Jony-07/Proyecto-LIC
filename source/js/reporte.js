//Creando el objeto
var book = new Object();
//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
var showinfo = document.getElementById("mostrar");
if(showinfo.addEventListener){
showinfo.addEventListener("click", function(){
createObject(document.frmbook);
}, false);
}
else if(showinfo.attachEvent){
showinfo.attachEvent("onclick", function(){
createObject(document.frmbook);
});
}
}
// Creando el nuevo objeto
function createObject(form){
book.Nombre = form.txtnombre.value;
book.Apellido = form.txtapellido.value;
book.Email = form.txtemail.value;
book.Estado = form.txtestado.value;
book.Comentario = form.txtcomentario.value;

showProperties(book, "InfoBook");
}
function showProperties(objeto, objName){
var infBook = "";
var tblBook = "";
for(var i in objeto){
infBook = infBook + objName + "." + i + " = " + objeto[i] + "\n";
}
if(!confirm(infBook + "\n\n¿Es esta información correcta?")){
frmbook.txtnombre.value = "";
frmbook.txtapellido.value = "";
frmbook.txtemail.value = "";
frmbook.txtestado.value = "";
frmbook.txtcomentario.value = "";

}
tblBook += "<!DOCTYPE html>\n";
tblBook += "<html lang=\"es\">\n";
tblBook += "<head>\n\t";
tblBook += "<title>Creacion de Soluciones</title>\n";
tblBook += "<meta charset=\"utf-8\" />";
tblBook += "<link rel=\"stylesheet\" href=\"css/infolibro.css\"/>\n";
tblBook += "</head>\n";
tblBook += "<body>\n";
tblBook += "<table class=\"bookinfo\">";
tblBook += "<thead>\n\t<tr>\n\t\t";
tblBook += "<th>Nombres</th>\n\t\t";
tblBook += "<th>Apellidos</th>\n\t\t";
tblBook += "<th>Email</th>\n\t\t";
tblBook += "<th>Estado de urgencia</th>\n\t\t";
tblBook += "<th>Detalle del fallo que presenta:  </th>\n\t\t";
tblBook += "</tr>\n\t</thead>\n";
tblBook += "<tbody>\n\t";
tblBook += "<tr>\n\t\t";
tblBook += "<td>" + book.Nombre + "</td>\n\t\t";
tblBook += "<td>" + book.Apellido + "</td>\n\t\t";
tblBook += "<td>" + book.Email + "</td>\n\t\t";
tblBook += "<td>" + book.Estado + "</td>\n\t\t";
tblBook += "<td>" + book.Comentario + "</td>\n\t\t";
tblBook += "</tr></tbody>\n";
tblBook += "</table>\n";
tblBook += "</head>\n";
tblBook += "</html>\n";
document.write(tblBook);
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}