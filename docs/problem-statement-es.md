#Planteamiento del Problema

La tecnología ha permitido grandes avances en la productividad no solo para unos cuantos si no para gran parte de la población. Herramientas como el correo electrónico, video llamadas, intercambio de archivos automático, etc permiten lograr una gran productividad, pero la tecnología también nos puede llegar afectar en formas negativas al tenerse una saturación de información: mensajes, artículos, vídeos, podcasts, juegos, etc, estímulos de toda clase que compiten por nuestra atención constantemente. Esta situación se agrava con la llegada de los smartphones que permiten tener acceso al Internet de una forma continua.
El lograr mantener el enfoque en las tareas que uno necesita realizar para lograr sus objetivos del día se torna una pelea diaria


#Propuesta de solución

La técnica Pomodoro es un método para la administración del tiempo, haciendo uso de un reloj se divide el tiempo dedicado al trabajo en intervalos de 25 minutos, llamados pomodoros, los cuales son separados por descansos generalmente de 5 minutos. El método se basa en la idea de que las pausas frecuentes ayudan a mejorar la agilidad mental y a que la capacidad de concentración es en promedio alrededor de 20-30 minutos en adultos.
La aplicación móvil Pomodori es la implementación de la técnica Pomodoro para iOS con el objetivo de facilitar el manejo de la bitácora de tareas por realizar (Inventory), tareas del día (Today) y el temporizador que lleva cuenta de los pomodoros realizados por el usuario para cada tarea. La aplicación será lo menos intrusiva posible facilitando al usuario el enfocar su atención a la tarea a realizar y no en la aplicación misma.


#Requerimientos tecnológicos

Dado que una parte importante de la técnica es el realizar trabajo en tiempos de 25 min es vital que la aplicación tenga un temporizador que indique cuando han transcurrido los 25 minutos de trabajo. Dado que el contexto en que corre la aplicación es en dispositivos móviles se tiene que si el celular es puesto en modo de espera o el usuario cambiara de su navegador móvil entonces este no recibiría ningún mensaje puesto que al mandarse en segundo plano al navegador cualquier tarea es puesta en espera, por lo que es necesario tener acceso al API de mensajes del SO del móvil para poder poner en espera un mensaje de que el tiempo de trabajo a transcurrido por esto es que se ha elegido hacer uso de Cordova que es un framework que permite que aplicaciones web HTML/Javascript tengan acceso a funcional de los SO móviles en este caso el poder mandar recordatorios aunque la aplicaciones ya este cerrada o en segundo plano. Como frontend se usara AngularJS como framework MVC y en el backend se usara Django.