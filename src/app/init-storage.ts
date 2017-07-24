export class Init{
  write(x){
    localStorage.setItem("data", x);
  }

  load(){
    return localStorage.getItem("data");
  }

  writeTotal(x){
    localStorage.setItem("total", x);
  }

  loadTotal(){
    console.log(localStorage.getItem("total"));
    return localStorage.getItem("total");
  }
}
