# Eventos de Tiempo en JavaScript

Los programadores usan los eventos de tiempo en JavaScript para planificar la ejecución de código, ya sea para retrasarla (setTimeout) o para repetirla a un intervalo específico (setInterval). Estos métodos no son parte de la especificación central de JavaScript, sino que son proporcionados por la mayoría de los entornos de hosting, incluidos todos los navegadores y Node.js, y se describen en la sección de temporizadores del estándar HTML. 

## Principal Uso del Intervalo de Tiempo (setInterval) 

El método setInterval() es fundamentalmente complementario a setTimeout(). Mientras que setTimeout() ejecuta una función una sola vez después de un retardo específico, el principal uso de setInterval() es ejecutar una cierta funcionalidad de forma reiterada y continua cada X tiempo. El uso principal de setInterval() es crear componentes dinámicos y gestionar: 

1. Funcionalidades que requieren actualización constante: Como la implementación de un reloj digital. 
2. Animaciones y transiciones cíclicas. 
3. Sondeo (Polling) de un servidor remoto de manera periódica (aunque en casos donde la ejecución pueda tardar, se recomienda setTimeout anidado). 

## Propiedades y Métodos Principales de setInterval() 

El método setInterval() forma parte de las interfaces Window y Worker y llama a una función o ejecuta un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada. 

### 1. El Método setInterval() 

La sintaxis del método es: 

let timerId = setInterval(func|code, [delay], [arg0], [arg1], ...) 

Parámetros: 

- func o code: El primer argumento es la función (lo más común y recomendado) o un string con código (no recomendado por motivos de seguridad, similar a eval()) a ejecutar repetidamente. 

- delay (Retraso): El tiempo en milisegundos (ms) que el temporizador debe retrasar entre cada ejecución de la función o código especificado. La primera ejecución ocurre después de que haya transcurrido este tiempo. Por defecto, si no se especifica, es 0. 

◦ Nota: Este argumento se convierte en un entero de 32 bits con signo, lo que limita el delay máximo a 2,147,483,647 milisegundos. 

- arg0, arg1, ... (Argumentos Opcionales): Argumentos adicionales que se pasan directamente a la función especificada por func en cada ejecución. 

### 2. Valor de Retorno (ID del Intervalo) 

El método setInterval() devuelve un ID de intervalo (intervalID o timerId) que es un valor numérico distinto de cero. 

- Uso del ID: Este identificador único es crucial porque permite cancelar o detener la ejecución del intervalo posteriormente. 

### 3. Método de Cancelación: clearInterval() 

Para detener la ejecución recurrente de setInterval(), se debe llamar a la función nativa clearInterval(). 

- Sintaxis: clearInterval(intervalID). 

- Función: Cancela la acción reiterativa que fue iniciada por setInterval(). 

- Importancia: setInterval() continuará ejecutándose hasta que sea borrada. Es fundamental usar clearInterval() para detener un temporizador cuando ya no se necesita, ya que la función y su entorno léxico externo permanecen en la memoria hasta que se cancela, lo que podría consumir más memoria de lo necesario y contribuir potencialmente a problemas de rendimiento, aunque no se considere una "fuga de memoria" per se (ya que el recolector de basura opera, creando un patrón de sierra de uso de memoria). 

Nota Importante sobre la Ejecución: 

JavaScript solo tiene un hilo de ejecución. Por lo tanto, setInterval() no garantiza que la ejecución se realice exactamente en el tiempo especificado. Si el hilo está ocupado (por ejemplo, ejecutando un bucle pesado), el temporizador debe esperar a que el hilo se libere antes de poder ejecutar la función planificada. Además, si la lógica dentro de la función tarda más tiempo en ejecutarse que el propio intervalo, las llamadas pueden realizarse sin pausa. 

## Ejemplo de Página Web que Usa setInterval(): El Reloj Digital 

Un ejemplo clásico y práctico del uso de setInterval() es la creación de un Reloj Digital en Javascript. El objetivo de este proyecto es actualizar la hora mostrada en la página web en tiempo real.