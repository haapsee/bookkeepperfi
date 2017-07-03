export class Init{
  write(x){
    localStorage.setItem("data", x);
  }

  load(){
    console.log(localStorage.getItem("data"));
    return localStorage.getItem("data");
  }
}
