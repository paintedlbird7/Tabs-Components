class Dropdown {
  constructor(element) {
    
    // [x] Assign this.element to the dropdown element
    this.element = element;
    
    // [x] Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");

    

    // [x] assign the reference to the ".dropdown-content" class found in the dropdown element
    // this.content.querySelector = ".dropdown-content";
    this.content = this.element.querySelector('.dropdown-content');

    
    // [x] Add a click handler to the button reference and call the toggleContent method.
    // this.button.addEventListener('click', () => 
    // {this.toggleContent()
    this.button.addEventListener('click', () => 
    { this.toggleContent() 
    })
  }

  toggleContent() {
    // [x] Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
    // this.domElement.classList.toggle("article-open");
  }
}


// [x] Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));