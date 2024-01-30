// Fetch data:
async function asyncFunc() {
  try {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const req = await fetch(url);
    const res = await req.json();
    res.slice(0, 50).map((value) => infoFunc(value));
  } catch (err) {
    console.log(err.message);
  }
}

// Close details pannel:
function closeMenu(value) {
  value.parentElement.parentElement.parentElement.style.display = "none";
}

// show details in new pannel:
const router = (details) => {
  const { albumId, id, thumbnailUrl, title, url } = details;

  const showDetails = document.querySelector(".showDetails");
  const div = document.createElement("div");
  showDetails.appendChild(div);
  div.classList.add("detailsDiv");

  div.innerHTML = `<div class="hide">
        <div>      
            <div ><button style="cursor: pointer;" onclick="closeMenu(this)"><i class="fa-solid fa-xmark"></i></button></div>
            <img src="${thumbnailUrl}">
            <h2>ID No. ${id}</h2>
            <h3>TITLE: ${title}</h3>
            <h3>URL: ${url}</h3>
        </div>
    </div>`;
};

// catching every elements with id:
async function details(idNo) {
  const fetchFile = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${idNo}`
  );
  const toJson = await fetchFile.json();
  router(toJson);
}

// Show fetch elements:
function infoFunc(value) {
  const { id, title, Profession } = value; //Destructaring
  const divElem = document.querySelector(".outerElem");
  const div = document.createElement("div");
  divElem.appendChild(div);
  div.innerHTML = `<div>
                <img src="${value.thumbnailUrl}" alt"profile">
                <h3>ID No. ${id}</h3>
                <p>Title: ${title}</p>
                <button class="fullInfoBtn" onclick="details(${id})">Full info</button>
            </div>`;
}

asyncFunc();
