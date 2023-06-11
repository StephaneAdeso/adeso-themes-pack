/*
* Once upon a time...
*/
print("Hola, mundo!")

typealias Name = String
var name: Name = "SwiftBeta"

typealias AudioSample = UInt16
var maxAmplitudeFound = AudioSample.min


class Vampire {
  var location: String
  var birthDate: Int
  var is_adult: Bool
  var deathDate: Int
  var weaknesses: [String]
  let numberOfItems = 10
var isButtonTapped = true
  
  init(location: String, birthDate: Int, deathDate: Int, weaknesses: [String]) {
    self.location = location
    self.birthDate = birthDate
    self.deathDate = deathDate
    self.weaknesses = weaknesses
  }
  
  var age: Int {
    self.calcAge()
  }
  
  func calcAge() -> Int {
    self.deathDate - self.birthDate
  }
}

// ...there was a guy named Vlad

let dracula: Vampire = Vampire(location: "Transylvania", birthDate: 1428, deathDate: 1476, weaknesses: ["Sunlight", "Garlic"])
