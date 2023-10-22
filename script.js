var edit_ = document.getElementById("edit");
var add_val = document.getElementById("pp_add");

var ttl = document.getElementById("ttl");
var note = document.getElementById("notes");

//popup variables
var pop_overlay = document.querySelector(".popup_overlay");
var pop_content = document.querySelector(".popup_content");
var pop_content_parent = document.querySelector(".pop_content_parent");
var pop_content_new = document.querySelector(".popup_new");
var pop_content_new_parent = document.querySelector(".np");
var nav_btn = document.querySelector(".navbar");

//popup starts here
pop_overlay.addEventListener("click", (e) => {
    if (e.target === pop_overlay) {
        popup_close();
    }
})

//closing popups
popup_close = () => {


    pop_overlay.style.display = "none";
    pop_content.style.display = "none";
    pop_content_parent.style.display = "none";
    pop_content_new.style.display = "none";
    pop_content_new_parent.style.display = "none";
    nav_btn.style.display = "none";

}

//note full screen popup
popup_show = (task) => {

    pop_overlay.style.display = "block";
    pop_content.style.display = "block";
    pop_content_parent.style.display = "block";
    pop_content.style.zIndex = "5";
    pop_content_parent.style.zIndex = "5";

    let t = document.getElementById("title");
    let n = document.getElementById("notes_");

    let h1 = task.querySelector("#tsk_title");
    let p = task.querySelector("#tsk_content");

    t.innerText = h1.innerText;
    n.innerText = p.innerText;

}

// add note popup
new_tsk_popup = () => {

    pop_overlay.style.display = "block";
    pop_content_new.style.display = "block";
    pop_content_new_parent.style.display = "block";
    pop_content_new.style.zIndex = "5";
    pop_content_new_parent.style.zIndex = "5";

}

// Navbar
show_navbar = () => {

        nav_btn.style.display = "block";
        nav_btn.style.zIndex = "10";
        pop_overlay.style.display = "block";
        pop_overlay.style.zIndex = "0";
    }
    //popup ends here

//Removing Notes
remove_tsk = (event) => {
    event.stopPropagation(); // Prevent event propagation to parent elements

    let tsk = event.target.closest(".task");
    tsk.remove();
}


add_val.addEventListener("click", (e) => {
    if (e.target === add_val) {
        add_card();
    }
})

edit_.addEventListener("click", (e) => {
    if (e.target === edit_) {
        alert("later update");
    }
})


//Create new note and add the given values into the note
add_card = () => {

    if (ttl.value == "" || note.value == "" || ttl.value == null || note.value == null || ttl.value == 0 || note.value == 0) {

        alert("Please Enter something");
        new_tsk_popup();

    } else {
        let card_content = document.querySelector(".content");

        let new_card = document.createElement("div");
        new_card.classList.add("task");
        new_card.setAttribute("onclick", "popup_show(this)");

        let h1 = document.createElement("h1");
        h1.setAttribute("id", "tsk_title");
        new_card.appendChild(h1);

        let con = document.createElement("div");
        con.classList.add("con");
        new_card.appendChild(con);

        let p = document.createElement("p");
        p.setAttribute("id", "tsk_content");
        con.appendChild(p);

        let btn = document.createElement("button");
        btn.setAttribute("id", "remove");
        btn.setAttribute("onclick", "remove_tsk(event)");
        btn.innerText = "Remove";
        new_card.appendChild(btn);


        h1.innerText = ttl.value;
        p.innerText = note.value;

        card_content.appendChild(new_card);
        // Reset input fields
        ttl.value = "";
        note.value = "";
    }

    //     card_content.innerHTML = `<div class="task" onclick="popup_show()">
    //     <h1 id="tsk_title">${ttl}</h1>
    //     <div class="con">
    //         <p id="tsk_content">${note}</p>
    //     </div>
    //     <button id="remove" type="button" onclick="remove_tsk(event)">Remove</button>
    // </div>`
}

//adding values into note full screen popup
// add_note_popup = () => {
//     let t = document.getElementById("title");
//     let n = document.getElementById("notes_");

//     let h1 = document.getElementById("tsk_title");
//     let p = document.getElementById("tsk_content");

//     t.innerText = `${h1.value}`;
//     n.innerText = `${p.value}`;

// }

//if i click at the .task the .popup_content don't show the values of .task