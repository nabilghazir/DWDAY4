let dataProject = [];

function addProject(event) {
  event.preventDefault();

  let projectname = document.getElementById("projectname").value;
  let startdate = document.getElementById("startdate").value;
  let enddate = document.getElementById("enddate").value;
  let desc = document.getElementById("description").value;
  let nodejs = document.getElementById("nodejs").checked;
  let js = document.getElementById("js").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let android = document.getElementById("android").checked;
  let image = document.getElementById("uploadimage").files;

  if (projectname === "") {
    alert("Project Name Harus Diisi !!!");
    return;
  } else if (startdate === "") {
    alert("Pilih Start Date !!!");
    return;
  } else if (enddate === "") {
    alert("Pilih End Date !!!");
    return;
  } else if (desc === "") {
    alert("Description Harus Diisi !!!");
    return;
  } else if (image.length === 0) {
    alert("Image harus Diisi !!!");
  }

  let imageUrl = URL.createObjectURL(image[0]);
  console.log(imageUrl);

  if (reactjs) {
    reactjs = `<i class="fa-brands fa-react"></i>`;
  } else {
    reactjs = ``;
  }

  if (js) {
    js = `<i class="fa-brands fa-js"></i>`;
  } else {
    js = ``;
  }

  if (android) {
    android = `<i class="fa-brands fa-android"></i>`;
  } else {
    android = ``;
  }

  if (nodejs) {
    nodejs = `<i class="fa-brands fa-node-js"></i>`;
  } else {
    nodejs = ``;
  }

  let data = {
    projectname,
    startdate,
    enddate,
    desc,
    nodejs,
    js,
    reactjs,
    android,
    image: imageUrl,
  };

  dataProject.push(data);
  renderProject();
  console.log("Data Terambil : ", data);
}

function renderProject() {
  document.getElementById("myproject").innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById("myproject").innerHTML += `<div class="projectcard">
        <img src="${dataProject[index].image}" />
        <a href="myproject-detail.html">
          <h1>${dataProject[index].projectname}</h1>
        </a>
        <h3>Durasi : 3 Bulan</h3>
        <p>
          ${dataProject[index].desc}
        </p>
        <div class="flexicon">
           ${dataProject[index].reactjs}
            ${dataProject[index].js}
            ${dataProject[index].android}
            ${dataProject[index].nodejs}
        </div>
        <div class="buttonpc">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    `;
  }
}
