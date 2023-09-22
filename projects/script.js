const milestonesAPI = JSON.parse(data).data;
console.log(milestonesAPI);


function milestonesFunc(){
    const milestonesHTML = document.querySelector(`.milestones`);
    milestonesHTML.innerHTML = milestonesAPI.map((milestone)=>{
        return `<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div>
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel showModules">
         ${milestone.modules.map((module)=>{
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`
         }).join(``)}
        </div>
      </div>`
    }).join(``);
}

milestonesFunc();
