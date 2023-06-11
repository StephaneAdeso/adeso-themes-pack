package main

import "fmt"

/*
  Once upon a time...
*/
type Vampire struct {
  Location   string
  BirthDate  int
  DeathDate  int
  Weaknesses []string
}

func (v *Vampire) Age() int {
  return v.calcAge()
}

func (v *Vampire) calcAge() int {
  return v.DeathDate - v.BirthDate
}

// ...there was a guy named Vlad

func main() {
  dracula := &Vampire{
    Location:   "Transylvania",
    BirthDate:  1428,
    DeathDate:  1476,
    Weaknesses: []string{"Sunlight", "Garlic"},
  }

  fmt.Println(dracula.Age())
}



type Person struct {
    name string
    age  int
}

func (p Person) String() string {
    return fmt.Sprintf("%v (%v years)", p.name, p.age)
}

func main() {
    var a int = 10
    var b bool = true
    var c float32 = 3.14

    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(c)
    

    person1 := Person{"Alice", 25}
    person2 := Person{"Bob", 30}

    person1.name

    fmt.Println(person1, person2)
}