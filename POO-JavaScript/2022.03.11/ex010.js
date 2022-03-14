class Perfil {
  
  constructor(nome, avatar = '', tema = '') {
    this.nome = nome;
    this.avatar = avatar.toLowerCase();
    this.tema = tema;
  }
  
  set setAvatar(a){
    this.avatar = a.toLowerCase();
  }

  get getAvatar(){
    if (this.avatar.startsWith("http") == false || (this.avatar.startsWith != "https") == false){
      return `[ERRO] a foto ${this.avatar} deve vir de um  endereço "URL" iniciada por  "http" ou "https").`
    } else { return this.avatar } 
  }

  set setTema(t){
    this.tema = t.toLowerCase();
  }

  get getTema(){
    if (this.tema == "light" || this.tema == "dark"){
      return this.tema
    } else { 
      return `[ERRO] ${this.tema} não é um tema, favor escolher entre "light" ou "dark"` 
    }
  }

  Nome(){
    return this.nome
  }

}

const perfil = new Perfil("Décio", 'Foto.pgn', "5699");
console.log(perfil)
console.log(perfil.Nome());
console.log(perfil.getAvatar);
perfil.setAvatar = "https://images.pexels.com/photos/1280638/pexels-photo-1280638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
console.log(perfil.getAvatar);
console.log(perfil.getTema)
perfil.setTema = 'DARK'
console.log(perfil.getTema)
console.log(perfil)

/* 
Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).
*/