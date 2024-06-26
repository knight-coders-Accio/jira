
let taskBtn = document.getElementById('addTask');
let toDoContainer = document.getElementById('todo');



taskBtn.addEventListener("click", ()=>{
    let card = document.createElement('div');
    // card.className = 'card';
    card.setAttribute("class", "card");
    card.setAttribute("contenteditable", true)
    // card.contentEditable = true;
    card.innerHTML = "Default Card"
    toDoContainer.appendChild(card);


    card.addEventListener("click", (events)=>{
       let selectedCard = events.target;
       console.log(selectedCard)
       console.log(selectedCard.innerText)
       if(selectedCard.innerHTML === "Default Card"){
                selectedCard.innerHTML = "";
       }
    })

    card.addEventListener("blur", (events)=>{
        let blurredCard = events.target;
        if(blurredCard.innerHTML === ""){
            // blurredCard.innerHTML = "Default Card"
            blurredCard.remove();
        }
    })

    // drop down:

    let dropDown = document.createElement('select');
    // let arr = ["TODO", "PROGRESS", "DONE"];
    // for(let t of arr){
    //     let optionTag = document.createElement('option');
    //     optionTag.value = t.toLowerCase();
    //     optionTag.innerHTML = t;
    //     dropDown.appendChild(optionTag);
    // }
    // card.append(dropDown);
    dropDown.innerHTML = `
        <option value="todo">TODO</option>
        <option value="progress">PROGRESS</option>
        <option value="done">DONE</option>
    `

    card.append(dropDown);


    dropDown.addEventListener("change", (event)=>{
        //  console.log(event.target.value)
        let selectedValue = event.target.value; // progress
        let columnToBeMoved = document.getElementById(selectedValue); // progress column
        columnToBeMoved.append(card);
       

    })



})


{/* <div class=></div> */}

