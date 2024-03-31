import notesData from "./data/data.js";

class AddNote extends HTMLElement{
    constructor(){
        super();

        this.render();
    }

    render(){
        this.innerHTML = `<i class="fa-solid fa-plus"><span>  Add Note</span></i>`;
    }
}

customElements.define("add-note", AddNote);

class DeleteNote extends HTMLElement{
    constructor(){
        super();

        this.render();
    }

    render(){
        this.innerHTML = `<i class="fa-solid fa-x"></i>`
    }
}

customElements.define("delete-button", DeleteNote);

class FooterUi extends HTMLElement {
    constructor() {
        super();

        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="main-footer">
        Notes App Created by Yosef
        </div>`;
    }
}

customElements.define("footer-ui", FooterUi);

const notesContainer = document.getElementById('note-content');
// const notesCardTemplate = document.querySelector('.note-card-template');


notesData.map((note) => {
    const card = document.createElement('div');
    card.classList.add('card') 
    card.innerHTML = `
    <input value='${note.title}' id="noteTitle" type="text" name="note-title" class="note-title" placeholder="Note Title"/>
    <textarea name="note-body" id="noteBody" class="note-body"  cols="30" rows="10">${note.body}</textarea>
    <delete-button></delete-button>
    `
    notesContainer.appendChild(card);
});



notesContainer.addEventListener("click", (e) => {
    if (e.target.closest("delete-button")) {
        const noteCard = e.target.closest(".card");
        noteCard.remove();
    }
});

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', (e) => {
    e.preventDefault()
    const newItem = document.createElement('div');
    newItem.classList.add('card')
    newItem.innerHTML = `
    <input id="noteTitle" type="text" name="note-title" class="note-title" placeholder="Note Title..." maxlength="20"/>
    <textarea name="note-body" id="noteBody" class="note-body"  cols="30" rows="10" placeholder="description..."></textarea>
    <delete-button></delete-button>
    `;

    notesContainer.appendChild(newItem);
})

const searchFeature = document.getElementById('search');
searchFeature.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const allNotesTitle = document.querySelectorAll('.card input');
    for(const note of allNotesTitle){
        note.value.toLowerCase().includes(value)?
        note.parentElement.style.display = 'flex' 
        :note.parentElement.style.display = 'none';
        
    }  
});  

