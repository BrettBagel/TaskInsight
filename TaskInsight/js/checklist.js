//Takes the user input and creates a new item in the list.
function addItem() 
{
    const itemname = document.getElementById("input").value;
    if(itemname === "")
        return;
    document.getElementById("input").value = "";
    let list = document.getElementById("userList");
    let item = document.createElement("li");
    item.innerHTML = `
        <div class="checklistitemdiv">
            <a class="checklistremove" href="#" onclick="removeDiv(this)">X</a>
            <input type='checkbox' name='checkbox' class="checkbox" onclick="strikeThrough(this)">
            <label class="checklistitem">${itemname}</label>
        </div>
    `;
    list.appendChild(item);
}

//Allows the user to remove a task from the list.
function removeDiv(el)
{
    el.parentNode.parentNode.remove();
}

//Strikes through the user's completed item.
function strikeThrough(el)
{
    let itemText = el.parentNode.getElementsByClassName("checklistitem")[0];
    if(el.checked)
    {
        itemText.classList.add("strikethrough");
        itemText.classList.remove("no-strikethrough");
    }
    else
    {
        itemText.classList.remove("strikethrough");
        itemText.classList.add("no-strikethrough");
    }
}

//Allows the user to press enter to submit the item.
function addItemEnter()
{
    if(event.key === 'Enter')
        addItem();
}

function uncheckAll()
{
    let checkboxes = document.getElementsByClassName("checkbox");
    for(const element of checkboxes)
    {
        element.checked = false;
        strikeThrough(element);
    }
}
