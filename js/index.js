
FetchData();

function FetchData(){
    fetch("./data.json")
    .then(response => response.json())
        .then(data => {
            iterateAndCategorize(data);
        })
}



function iterateAndCategorize(data){
    
    const card = document.createElement('div');
    card.classList.add('Card');

    data.forEach(element => {

        const card = document.createElement('div');
        card.classList.add('Card');

        const cardHeader = document.createElement('header');
        cardHeader.classList.add('CardHeader');
   
        const h2 = document.createElement('h2');
        h2.classList.add('title');
        h2.innerHTML  = element.title;
        const dayDiv = document.createElement('span');
        dayDiv.classList.add('Day');
        const Date = document.createElement('span');
        Date.classList.add('Date');
        dayDiv.innerHTML  = element.day;
        Date.innerHTML  = element.date; 
        const timeDiv = document.createElement('span');
        timeDiv.classList.add('time');
        const descDiv = document.createElement('p');
        descDiv.classList.add('descDiv');
        timeDiv.innerHTML  = element.time;
        descDiv.innerHTML  = element.description;
        

        if(element.priority == "Critical"){
            console.log("Moist");
            card.className += " Critical";
        }
        else if(element.priority == "Very Important"){
            console.log("V important");
            card.className += " VeryImportant";
        }
        else if(element.priority == "Normal"){
            console.log("Norm");
            card.className += " Normal";
        }

        const container = document.querySelector("#Errands");

        cardHeader.appendChild(dayDiv);
        cardHeader.appendChild(timeDiv);
        cardHeader.appendChild(h2);
        cardHeader.appendChild(Date);

        const cardBody = document.createElement('div');
        cardBody.classList.add('CardBody');
        cardBody.appendChild(descDiv);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        container.appendChild(card);

    });

    
}


function Radios(checkbox){
    var checkboxes = document.getElementsByName('priority')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    }) 
}

function formValidation(){

    var title = document.querySelector('#titleInput');

    var normal = document.querySelector('#normal');
    var important = document.querySelector('#important');
    var critical = document.querySelector('#critical');

    var date = document.querySelector('#dateInput');
    var time = document.querySelector('#timeInput');
    var desc = document.querySelector('#desc');

    
    if(normal.checked){
        let newId = Errands[Errands.length - 1].id + 1;

        var newErrand = {
            id: newId,
            title: title.value,
            priority: "Normal",
            day: "Sunday",
            date: date.value,
            time: time.value,
            description: desc.value,
            "completed": false 
        }; 

       return newErrand;
    }
    else if(important.checked){

    }
    else if(critical.checked){

    }


}