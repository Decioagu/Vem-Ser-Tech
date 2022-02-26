var valor = 99;

while (valor != 0){
    if (valor % 2 != 0){
        document.write(valor);
        if (valor != 1){
            document.write( " - ");
        }
        
    }
    valor = valor - 1;
}