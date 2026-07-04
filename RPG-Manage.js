const personagens = [
  {
    nome: "licoti",
    classe: "Assassino",
    arma: null,
    armadura: null,
    nivel: 1,
    HP: 230,
    MP: 110,
    ATK: 41,
    DEF: 9,
    XP: 10,
    ouro: 340,
    inventario: ["Punhal"],
  },
  {
    nome: "Shadow",
    classe: "Guerreiro",
    arma: null,
    armadura: null,
    nivel: 3,
    HP: 230,
    MP: 110,
    ATK: 26,
    DEF: 24,
    XP: 15,
    ouro: 230,
    inventario: ["Espada"],
  },
];
const inimigos = [
  { nome: "Lobo", HP: 100, ATK: 15, DEF: 5, XP: 20, ouro: 25 },
  { nome: "Esqueleto", HP: 180, ATK: 25, DEF: 10, XP: 45, ouro: 70 },
  { nome: "Zumbi", HP: 250, ATK: 40, DEF: 15, XP: 90, ouro: 120 },
  { nome: "Dragão", HP: 400, ATK: 55, DEF: 30, XP: 200, ouro: 300 },
];
const Boss = [
  {
    nivelminimo: 5,
    nome: "Umbra",
    HP: 800,
    ATK: 65,
    DEF: 35,
    XP: 1000,
    ouro: 500,
  },
  {
    nivelminimo: 9,
    nome: "hunter",
    HP: 1200,
    ATK: 50,
    DEF: 45,
    XP: 800,
    ouro: 400,
  },
  {
    nivelminimo: 13,
    nome: "Old-Duke",
    HP: 1500,
    ATK: 70,
    DEF: 55,
    XP: 1800,
    ouro: 800,
  },
  {
    nivelminimo: 17,
    nome: "Golem",
    HP: 1800,
    ATK: 40,
    DEF: 90,
    XP: 1500,
    ouro: 600,
  },
  {
    nivelminimo: 24,
    nome: "Yharon",
    HP: 2000,
    ATK: 80,
    DEF: 50,
    XP: 2000,
    ouro: 100,
  },
];

function ExibirMenu() {
  return parseInt(
    prompt(
      "===== RPG MANAGER ===== \n\n\n" +
        "1 - Criar Personagem\n" +
        "2 - Ver Personagens\n" +
        "3 - Treinar Personagem\n" +
        "4 - Batalhar\n" +
        "5 - Boss Battle\n" +
        "6 - Loja\n" +
        "7 - Inventário\n" +
        "8 - Equipar\n" +
        "9 - Excluir Personagem\n" +
        "0 - Sair",
    ),
  );
}

function CriarPersonagem() {
  const criar = {};
  criar.nome = prompt("Me diga o nome do Personagem");
  const i = parseInt(
    prompt(
      "Escolha uma classe\n\n" +
        "1 - Guerreiro\n" +
        "2 - Assassino\n" +
        "3 - Mago\n" +
        "4 - Arqueiro",
    ),
  );
  switch (i) {
    case 1:
      criar.classe = "Guerreiro";
      criar.ATK = 20;
      criar.DEF = 20;
      break;
    case 2:
      criar.classe = "Assassino";
      criar.ATK = 35;
      criar.DEF = 5;
      break;
    case 3:
      criar.classe = "Mago";
      criar.ATK = 40;
      criar.DEF = 0;
      break;
    case 4:
      criar.classe = "Arqueiro";
      criar.ATK = 25;
      criar.DEF = 15;
      break;
    default:
      alert("Opção invalida!!");
      break;
  }

  criar.arma = null;
  criar.armadura = null;
  criar.nivel = 1;
  criar.HP = 100;
  criar.MP = 50;
  criar.XP = 0;
  criar.ouro = 100;
  criar.inventario = [];

  let confirmar = confirm(
    "deseja criar esse perssonagem?\n\n" +
      "Nome: " +
      criar.nome +
      "\nClasse: " +
      criar.classe,
  );

  if (confirmar === true) {
    personagens.push(criar);
  } else {
    alert("Ação nao concluida");
  }
}

function VerPersonagens() {
  for (let i = 0; i < personagens.length; i++) {
    alert(
      "Personagem: " +
        (i + 1) +
        "\nNome: " +
        personagens[i].nome +
        "\nClasse: " +
        personagens[i].classe +
        "\nNivel: " +
        personagens[i].nivel +
        "\nATK: " +
        personagens[i].ATK +
        "\nDEF: " +
        personagens[i].DEF +
        "\nHP: " +
        personagens[i].HP +
        "\nMP: " +
        personagens[i].MP +
        "\nXP: " +
        personagens[i].XP +
        "\nOuro: " +
        personagens[i].ouro +
        "\nInventario: " +
        personagens[i].inventario,
    );
  }
}

function Treinar() {
  let i = parseInt(prompt("escolha o personagem a ser treinado")) - 1;

  personagens[i].XP += 15;
  Upar();
}
function Upar() {
  for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].XP >= 150) {
      personagens[i].XP -= 150;
      personagens[i].nivel += 1;
      personagens[i].ATK += 3;
      personagens[i].DEF += 2;
      personagens[i].HP += 35;
      personagens[i].MP += 20;
      Upar()
    }
  }
}
function Loja() {
  const ii = parseInt(prompt("Escolha o personagem que comprara o item")) - 1;
  const i =
    parseInt(
      prompt(
        "Sua quantia de ouro: " + personagens[ii].ouro + "\n\n" +
        "Mercador\n\n" +
          "1 - Espada: (200)\n" +
          "2 - Punhal: (200)\n" +
          "3 - Arco: (200)\n" +
          "4 - Cajado: (200)\n" +
          "5 - PotHP: (50)\n" +
          "6 - PotMP: (50)\n" +
          "7 - Armadura: (300)",
      ),
    ) ;

  switch (i) {
    case 1:
      if (personagens[ii].ouro >= 200) {
        personagens[ii].ouro -= 200;
        personagens[ii].inventario.push("Espada");
        alert("Item comprado com sucesso");
      } else {
        alert("Você nao tem ouro o suficiente");
      }
      break;
    case 2:
      if (personagens[ii].ouro >= 200) {
        personagens[ii].ouro -= 200;
        personagens[ii].inventario.push("Punhal");
        alert("Item comprado com sucesso");
      } else {
        alert("Você nao tem ouro o suficiente");
      }
      break;
    case 3:
      if (personagens[ii].ouro >= 200) {
        personagens[ii].ouro -= 200;
        personagens[ii].inventario.push("Arco");
        alert("Item comprado com sucesso");
      } else {
        alert("Você nao tem ouro o suficiente");
      }
      break;
    case 4:
      if (personagens[ii].ouro >= 200) {
        personagens[ii].ouro -= 200;
        personagens[ii].inventario.push("Cajado");
        alert("Item comprado com sucesso");
      } else {
        alert("Você nao tem ouro o suficiente");
      }
      break;
    case 5:
      if (personagens[ii].ouro >= 50) {
        personagens[ii].ouro -= 50;
        personagens[ii].inventario.push("PotHP");
        alert("Item comprado com sucesso");
      } else {
        alert("Você nao tem ouro o suficiente");
      }
      break;
    case 6:
      if (personagens[ii].ouro >= 50) {
        personagens[ii].ouro -= 50;
        personagens[ii].inventario.push("PotMP");
        alert("Item comprado com sucesso");
      } else {
        alert("Você nao tem ouro o suficiente");
      }
      break;
    case 7:
      if (personagens[ii].ouro >= 300) {
        personagens[ii].ouro -= 300;
        personagens[ii].inventario.push("Armadura");
        alert("Item comprado com sucesso");
      } else {
        alert("Você nao tem ouro o suficiente");
      }
      break;
    default:
      alert("");
      break;
  }
}
function Inventario() {
  for (let i = 0; i < personagens.length; i++) {
    alert("Nome: " + personagens[i].nome + " \n" + (personagens[i].inventario.length + " - " + personagens[i].inventario));
  }
}
function ExcluirPersonagem() {
  let i =
    parseInt(prompt("Escolha o numero do personagem que gostaria de excluir")) -
    1;
  const confirmar = confirm(
    "Gostaria de deletar esse personagem??\n" + personagens[i].nome,
  );
  if (confirmar) {
    personagens.splice(i, 1);
  }
}

function Batalhar() {
  const ii = parseInt(prompt("Escolha o seu personagem")) - 1;
  const iii = parseInt(
    prompt(
      "Qual inimigo gostaria de enfrentar?\n\n" +
        "1 - lobo\n" +
        "2 - Esqueleto\n" +
        "3 - Zumbi\n" +
        "4 - Dragão",
    ),
  ) - 1 
  const HPPersonagem = personagens[ii].HP
  const HPInimigo = inimigos[iii].HP

  for (let i = 0; i < 15; i++) {
    const DanoPersonagem =Math.max(1,personagens[ii].ATK - inimigos[iii].DEF)
    const DanoInimigo = Math.max(1,inimigos[iii].ATK - personagens[ii].DEF)
    inimigos[iii].HP -= DanoPersonagem;
    personagens[ii].HP -= DanoInimigo;

    alert(
      "======" +
        personagens[ii].nome +
        "VS" +
        inimigos[iii].nome +
        "=====" +
        "\nRound" +
        (i + 1) +
        "\n" +
        personagens[ii].nome +
        "                                           " +
        inimigos[iii].nome +
        "\n" +
        "HP" +
        personagens[ii].HP +
        "                                             " +
        "HP" +
        inimigos[iii].HP,
    );

    if (inimigos[iii].HP <= 0) {
      personagens[ii].HP = HPPersonagem;
      inimigos[iii].HP = HPInimigo;
      personagens[ii].XP += inimigos[iii].XP;
      personagens[ii].ouro += inimigos[iii].ouro;
      alert("Parabéns você ganhou" + "\n+" + inimigos[iii].XP + "XP");
      Upar();
      break;
    } else if (personagens[ii].HP <= 0) {
      personagens[ii].HP = HPPersonagem;
      inimigos[iii].HP = HPInimigo;
      alert(
        "Infelizmente você não esta forte o suficiente treine ou compre itens melhores para upar seus status",
      );
      break;
    }
  }
}

function BossBattle() {
  const ii = parseInt(prompt("Escolha o seu personagem")) - 1;
  const iii =
    parseInt(
      prompt(
        "Qual Chefão gostaria de enfrentar?\n\n" +
          "1 - Umbra / Requer Nv5\n" +
          "2 - Hunter / Requer Nv9\n" +
          "3 - Old-Duke / Requer Nv13\n" +
          "4 - Golem / Requer Nv17\n" +
          "5 - Yharon / Requer Nv24",
      ),
    ) - 1
  const HPPersonagem = personagens[ii].HP;
  const HPBoss = Boss[iii].HP;

  if (personagens[ii].nivel >= Boss[iii].nivelminimo) {
    for (let i = 0; i < 30; i++) {
      const DanoPersonagem =Math.max(1, personagens[ii].ATK - Boss[iii].DEF)
      const DanoBoss = Math.max(1,Boss[iii].ATK - personagens[ii].DEF)
      Boss[iii].HP -= DanoPersonagem;
      personagens[ii].HP -= DanoBoss;

      alert(
        "======" +
          personagens[ii].nome +
          "VS" +
          Boss[iii].nome +
          "=====" +
          "\nRound" +
          (i + 1) +
          "\n" +
          personagens[ii].nome +
          "                                           " +
          Boss[iii].nome +
          "\n" +
          "HP" +
          personagens[ii].HP +
          "                                             " +
          "HP" +
          Boss[iii].HP,
      ) 

      if (Boss[iii].HP <= 0) {
        personagens[ii].HP = HPPersonagem;
        Boss[iii].HP = HPBoss;
        personagens[ii].XP += Boss[iii].XP;
        personagens[ii].ouro += Boss[iii].ouro;
        alert("Parabéns você ganhou" + "\n+" + Boss[iii].XP + "XP");
        Upar();
        break;
      } else if (personagens[ii].HP <= 0) {
        personagens[ii].HP = HPPersonagem;
        Boss[iii].HP = HPBoss;
        alert(
          "Infelizmente você não esta forte o suficiente treine ou compre itens melhores para upar seus status",
        );
        break;
      }
    }
  } else {
    alert("Seu nivel ainda e baixo para esse boss");
  }
}

function ItemEquipado() {
  let indiceItem;
  const i = parseInt(prompt("Qual personagem equipara um item?")) - 1;
  const ii = parseInt(
    prompt(
      "Qual item ele ira equipar?\n\n" +
        "1 - Espada\n" +
        "2 - Punhal\n" +
        "3 - Arco\n" +
        "4 - Cajado\n" +
        "5 - PotHP\n" +
        "6 - PotMP\n" +
        "7 - Armadura",
    ),
  );

  switch (ii) {
    case 1:
      indiceItem = personagens[i].inventario.indexOf("Espada");

      if (indiceItem === -1) {
        alert("Você não possui esse item!");
        return;
      } else if (personagens[i].arma !== null) {
        alert("Voce ja esta com 1 item equipado");
      } else {
        personagens[i].arma = "Espada";
        personagens[i].ATK += 20;
      }
      break;
    case 2:
      indiceItem = personagens[i].inventario.indexOf("Punhal");

      if (indiceItem === -1) {
        alert("Você não possui esse item!");
        return;
      } else if (personagens[i].arma !== null) {
        alert("Voce ja esta com 1 item equipado");
      } else {
        personagens[i].arma = "punhal";
        personagens[i].ATK += 20;
      }

      break;
    case 3:
      indiceItem = personagens[i].inventario.indexOf("Arco");

      if (indiceItem === -1) {
        alert("Você não possui esse item!");
        return;
      } else if (personagens[i].arma !== null) {
        alert("Voce ja esta com 1 item equipado");
      } else {
        personagens[i].arma = "Arco";
        personagens[i].ATK += 20;
      }

      break;
    case 4:
      indiceItem = personagens[i].inventario.indexOf("Cajado");

      if (indiceItem === -1) {
        alert("Você não possui esse item!");
        return;
      } else if (personagens[i].arma !== null) {
        alert("Voce ja esta com 1 item equipado");
      } else {
        personagens[i].arma = "Cajado";
        personagens[i].ATK += 20;
      }

      break;
    case 5:
      indiceItem = personagens[i].inventario.indexOf("PotHP");

      if (indiceItem === -1) {
        alert("Você não possui esse item!");
      } else {
        personagens[i].inventario.splice(indiceItem, 1);
        personagens[i].HP += 30;
      }
      return;
      break;
    case 6:
      indiceItem = personagens[i].inventario.indexOf("PotMp");

      if (indiceItem === -1) {
        alert("Você não possui esse item!");
      } else {
        personagens[i].inventario.splice(indiceItem, 1);
        personagens[i].MP += 15;
      }
      return;
      break;
    case 7:
      indiceItem = personagens[i].inventario.indexOf("Armadura");

      if (indiceItem === -1) {
        alert("Você não possui esse item!");
      } else if (personagens[i].armadura !== null) {
        alert("Voce ja esta com 1 item equipado");
      } else {
        personagens[i].armadura = "Armadura";
        personagens[i].DEF += 20;
      }
      return;
      break;

    default:
      alert("Opção invalida!!");
      break;
  }
}

let option = 0
do {
  option = ExibirMenu();
  switch (option) {
    case 1:
      CriarPersonagem();
      break;
    case 2:
      VerPersonagens();
      break;
    case 3:
      Treinar();
      break;
    case 4:
      Batalhar();
      break;
    case 5:
      BossBattle();
      break;
    case 6:
      Loja();
      break;
    case 7:
      Inventario();
      break;
    case 8:
      ItemEquipado();
      break;
    case 9:
      ExcluirPersonagem();
      break;
    case 0:
      alert("Fechando jogo!");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (option !== 0);
