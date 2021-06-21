const taskcontainer=document.querySelector(".task_container");
const newcard=({
    id,
    imageurl,
    Tasktitle,
    Tasktype,
    Taskdescription,

}) =>               `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card text-center">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success">
            <i class="fas fa-pencil-alt"></i>
        </button>
        <button type="button" class="btn btn-outline-danger">
            <i class="far fa-trash-alt"></i>

        </button>
    </div>
    <img src=${imageurl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${Tasktitle}</h5>
      <p class="card-text">${Taskdescription}</p>
      <span class="badge bg-primary">${Tasktype}</span>
    </div>
    <div class="card-footer text-muted d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary">Open Task</button>
    </div>
  </div>
</div>`;
const savechanges=()=>{
    const taskData={
        id:`${Date.now()}`,//unique number for id
        imageurl: document.getElementById("imageurl").value,
        Tasktitle:document.getElementById("tasktitle").value,
        Tasktype:document.getElementById("tasktype").value,
        Taskdescription:document.getElementById("taskdescription").value,
    };
    const createnewcard=newcard(taskData);
    taskcontainer.insertAdjacentHTML("beforeend",createnewcard);

};