interface Eater {
  eat: () => void
}
type Test = Eater
interface Speaker {
  speak: () => void
}

interface Cleanable {
  clean: () => void
}

class Dog implements Speaker {
  eat: () => {}
  run: () => {}
  speak: () => {}
}

class Cat implements Eater, Speaker {
  eat = function () {
    console.log("Cat eat")
  }
  run = function () {
    console.log("Cat runs")
  }
  speak = function () {
    console.log("Cat meows")
  }
}

class AnimalShelter {
  feed<T extends Eater>(eater: T) {
    eater.eat()
  }

  // function takeForAWalk(params:type) {

  // }

  listenTo(params: Speaker) {}
}

var d = new Dog()
var ash = new AnimalShelter()

ash.feed(d)
ash.feed(new Cat())
/* There are animals like:
 *  Dog, Cat, Bird, Fish
 * An animal exists that takes care of all of them
 * Dogs, Cats, Birds, Fish need to eat
 * Dogs and  Cats need to be taken for walks
 * Fish need to have tanks cleaned
 * Birds need to have cages cleaned
 * Dogs and cats have to be let loose to bark
 * Make a strongly typed system to accomodate the animal shelter and it's cute inhabitants
 */
