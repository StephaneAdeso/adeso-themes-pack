<?php
/*
 * Once upon a time...
 */
class Vampire {
  public string $location;
  public int $birthDate;
  public int $deathDate;
  public array $weaknesses;

  public function __construct(array $props) {
    $this->location = $props['location'];
    $this->birthDate = $props['birthDate'];
    $this->deathDate = $props['deathDate'];
    $this->weaknesses = $props['weaknesses'];
  }

  public function age(): int {
    return $this->calcAge();
  }

  private function calcAge(): int {
    return $this->deathDate - $this->birthDate;
  }
}

// ...there was a guy named Vlad
$Dracula = new Vampire([
  'location' => 'Transylvania',
  'birthDate' => 1428,
  'deathDate' => 1476,
  'weaknesses' => ['Sunlight', 'Garlic']
]);


    // Definir una constante
    define("PI", 3.14159265359);

    // Definir una clase
    class Persona {
        public $nombre;
        public $edad;
        public $sexo;

        function __construct($nombre, $edad, $sexo) {
            $this->nombre = $nombre;
            $this->edad = $edad;
            $this->sexo = $sexo;
        }

        function presentarse() {
            echo "Hola, mi nombre es " . $this->nombre . ", tengo " . $this->edad . " años y soy " . $this->sexo . ".";
        }
    }

    // Crear una instancia de la clase Persona
    $persona1 = new Persona("Juan", 25, "hombre");

    // Imprimir el resultado de la función presentarse()
    echo $persona1->presentarse();

    // Definir un booleano
    $esMayorDeEdad = true;

    if ($esMayorDeEdad) {
        echo "Es mayor de edad.";
    } else {
        echo "No es mayor de edad.";
    }
?>
