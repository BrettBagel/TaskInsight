//Takes the user input and creates a new item in the list.
function addItem2() 
{
    const itemname = document.getElementById("input2").value;
    if(itemname === "")
        return;
    document.getElementById("input2").value = "";
    let list = document.getElementById("userList2");
    let item = document.createElement("li2");
    item.innerHTML = `
        <div class="checklistitemdiv">
            <a class="checklistremove" href="#" onclick="removeDiv(this)">X</a>
            <input type='checkbox' name='checkbox' class="checkbox" onclick="strikeThrough(this)">
            <label class="checklistitem">${itemname}</label>
        </div>
    `;
    list.appendChild(item);
}

//Allows the user to press enter to submit the item.
function addItemEnter2()
{
    if(event.key === 'Enter')
        addItem2();
}
