package com.adeso;

import java.io.IOException;

import com.adeso.domain.Theme;

class Vampire {
  private String location;
  public int birthDate = 1902;
  private int deathDate;
  private String[] weaknesses;
  private boolean alive = true;
  private Boolean hungry = false;

  public Vampire(String location, int birthDate, int deathDate, String[] weaknesses) {
    this.location = location;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
    this.weaknesses = weaknesses;
  }

  public int getAge() {
    return this.calcAge();
  }

  public int calcAge() {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a guy named Vlad
public class dracula {

  boolean mybool = true;
  Vampire vampire = new Vampire(
      "Transylvania",
      1428,
      1476,
      new String[] { "Sunlight", "Garlic" });

  private doSomething(){
        vampire.calcAge();
        vampire.birthDate;
      }

}