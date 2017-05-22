export class Init{
  write(){
    localStorage.setItem("todos", "sodot");
  }

  load(){
    console.log(localStorage.getItem("todos"));
  }
}
