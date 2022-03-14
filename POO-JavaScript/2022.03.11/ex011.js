class Smartwatch {
  constructor(passos = 0) {
      this.passos = passos;
  }

  get getPassos() { return this.passos }

  get aumentaPassos() { return ++this.passos }
  
  resetOnMidnight() { this.passos = 0 }
}
const smart = new Smartwatch();
console.log(smart);
console.log(smart.getPassos);
console.log(smart.aumentaPassos);
console.log(smart.aumentaPassos);
console.log(smart.aumentaPassos);
console.log(smart.getPassos);
smart.resetOnMidnight();
console.log(smart.getPassos);
console.log(smart.getPassos);
console.log(smart.aumentaPassos);
console.log(smart.aumentaPassos);
console.log(smart.aumentaPassos);
smart.resetOnMidnight();
console.log(smart.getPassos);

/* Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0. */