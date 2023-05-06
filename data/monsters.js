const monsters = {
  megarayquaza: {front:{
    position: {
      x: 0,
      y: 0
    },
    image: {
      src: './img/pokemon/megarayquaza.png'
    },
    frames: {
      max: 11,
      hold: 20
    },
    animate: true,
    isEnemy: true,
    name: 'Mega Rayquaza',
    attacks: [attacks.Tackle, attacks.Fireball],
    scale: 1.5
  },
  
  back:{
    position: {
      x: 0,
      y: 0
    },
    image: {
      src: './img/pokemon/megarayquaza-back.png'
    },
    frames: {
      max: 11,
      hold: 20
    },
    animate: true,
    isEnemy: false,
    name: 'Mega Rayquaza',
    attacks: [attacks.Tackle, attacks.Fireball],
    scale: 2.2
  }
  },
  lugia:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/lugia.png'
      },
      frames: {
        max: 10,
        hold: 15
      },
      animate: true,
      isEnemy: true,
      name: 'Lugia',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 1.5
    }
  },
  diaga:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/diaga.png'
      },
      frames: {
        max: 10,
        hold: 10
      },
      animate: true,
      isEnemy: true,
      name: 'Diaga',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 2
    }
  },
  charizard:{
    back:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/charizard-back.png'
      },
      frames: {
        max: 7,
        hold: 20
      },
      animate: true,
      isEnemy: false,
      name: 'Charizard',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 2.5
    }
  },
  hooh:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/hooh.png'
      },
      frames: {
        max: 9,
        hold: 20
      },
      animate: true,
      isEnemy: true,
      name: 'Ho-oh',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 2
    }
  },
  megacharizardx:{
    back:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/megacharizardx-back.png'
      },
      frames: {
        max: 9,
        hold: 20
      },
      animate: true,
      isEnemy: false,
      name: 'Mega Charizard X',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 2.5
    }
  },
  hoopa:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/hoopa.png'
      },
      frames: {
        max: 11,
        hold: 20
      },
      animate: true,
      isEnemy: true,
      name: 'Hoopa',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 2
    }
  },
  darkrai:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/darkrai.png'
      },
      frames: {
        max: 10,
        hold: 20
      },
      animate: true,
      isEnemy: true,
      name: 'Darkrai',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 2
    }
  },
  dynamaxcharizard:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/dynamaxcharizard.png'
      },
      frames: {
        max: 11,
        hold: 20
      },
      animate: true,
      isEnemy: true,
      name: 'Dynamax Charizard',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 1.8
    }
  },
  giratina:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/giratina.png'
      },
      frames: {
        max: 10,
        hold: 15
      },
      animate: true,
      isEnemy: true,
      name: 'Giratina',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 2
    }
  },
  dynamaxcharizard:{
    front:{
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/dynamaxcharizard.png'
      },
      frames: {
        max: 11,
        hold: 15
      },
      animate: true,
      isEnemy: true,
      name: 'Dynamax Charizard',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 1.5
    },
    back: {
      position: {
        x: 0,
        y: 0
      },
      image: {
        src: './img/pokemon/dynamaxcharizard-back.png'
      },
      frames: {
        max: 11,
        hold: 15
      },
      animate: true,
      isEnemy: false,
      name: 'Dynamax Charizard',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 1.7
    }
  }
}
