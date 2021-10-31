//Aplicación en la cual un usuario ingresa horas trabajadas, el valor de cada hora y muestra
            //el total a pagar y los minutos que trabajo.
            //int Horast;
            //int ValorH;
            //int Minutost;
            //Double Sueldo;

            //Console.WriteLine("Digite el numero de horas trabajadas: ");
            //Horast = int.Parse(Console.ReadLine());

            //Console.WriteLine("Digite el valor pagado por cada hora: ");
            //ValorH = int.Parse(Console.ReadLine());

            //Minutost = Horast * 60;
            //Sueldo = Horast * ValorH;

            //Console.WriteLine("El total a pagar por sus horas trabajadas es: " + Sueldo);
            //Console.WriteLine("Los minutos que trabajo fueron: " + Minutost);

    var horasT = prompt("Digite el numero de horas trabajadas: ");
    var valorH = prompt("Digite el valor pagado por cada hora: ");

    var minutosT = horasT*60;
    var sueldo = horasT*valorH;

    alert("El total a pagar por sus horas trabajadas es: " + sueldo);
    alert("Los minutos trabajados fueron: " + minutosT);


    