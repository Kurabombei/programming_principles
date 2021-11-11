// Liskov Substitution Principle

/**
 *  L in SOLID means:
 *  ENG: "Functions that use pointers or references to base classes
 *  must be able to use objects of derived classes without knowing it.
 *  UA: Об'єкти в програмі можуть бути заміненими їх нащадками без зміни коду програми.
 *  UA: Своїми словами:
 *  **/
//
// class Person {
//     access() {
//         console.log('У тебе є доступ.');
//     }
// }
//
// class Member extends Person {
//
// }
//
// class Guest extends Person {
//     access() {
//         throw new Error('У тебе немає доступу! Іди звідси!');
//     }
// }
//
// class Frontend extends Member { // was 'extends Person'
//     canCreatePage() {}
// }
//
// class Backend extends Member { // was 'extends Person'
//     canCreateServer() {}
// }
//
// // bad case, intentionally change behaviour of method inside classes. Everyone is extended with Person
// // good case, add more abstraction in base class
// class PersonFromDifferentCompany extends Guest { // was 'extends Person'
//     // access() {
//     //     throw new Error('У тебе немає доступу! Іди звідси!');
//     // }
// }
//
// function openSecretDoor(person) {
//     person.access();
// }
//
// openSecretDoor(new Frontend()); // should give access
// openSecretDoor(new Backend()); // should give access
// openSecretDoor(new PersonFromDifferentCompany()); // should not give access

// example #2

class Component {
    isComponent = true;
    // render() {
    //     return `<div>Component</div>`
    // }
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HeaderComponent extends ComponentWithTemplate { // was 'extends Component'
    onInit() {}
}
class FooterComponent extends ComponentWithTemplate { // was 'extends Component'
    afterInit() {}
}

// render() shouldn't be here
class HOC extends Component {
    // render(){
    //     throw new Error('Render is impossible here');
    // }
    wrapComponent(component) {
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent()); // GOOD
renderComponent(new FooterComponent()); // GOOD
renderComponent(new HOC()); // ERROR, should not have render()
