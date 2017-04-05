<script>
function habilitar(value)
{
    if(value=="1" && value==true)
    {
        // habilitamos
        document.getElementById("prueba").style.display="block";
    }else if(value!="1" || value==false){
        // deshabilitamos
        document.getElementById("prueba").style.display="none";
    }
}
</script>