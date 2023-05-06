const battleBackgroundImage = new Image()
battleBackgroundImage.src = './img/battleground.png'

const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  image: battleBackgroundImage
})

let playerpokemon_deck = [new Monster(monsters.dynamaxcharizard.back),new Monster(monsters.megarayquaza.back),new Monster(monsters.charizard.back),new Monster(monsters.megacharizardx.back)]
let enemypokemon_deck = [new Monster(monsters.dynamaxcharizard.front),new Monster(monsters.giratina.front),new Monster(monsters.darkrai.front),new Monster(monsters.hoopa.front),new Monster(monsters.lugia.front),new Monster(monsters.diaga.front)]
let player_turn = {val: 0}
const pokeballImage = new Image()
pokeballImage.src = './img/pokeball-2.png'
const pokeball = new Sprite({
  position: {
    x: 150,
    y: 200
  },
  image: pokeballImage,
  frames: {
    max: 11, //4
    hold: 20 //10
  },
  animate: true,
})
const enemy_pokeball = new Sprite({
  position: {
    x: 900,
    y: 20
  },
  image: pokeballImage,
  frames: {
    max: 11, //4
    hold: 20 //10
  },
  animate: true,
})
let playerpokemon
let playerpokemonid
let renderedSprites
let battleAnimationId
let enemies
let queue
let enemy
let enemypokemonid
// let numofpokemon = 1;

function initBattle() {
  document.querySelector('#userInterface').style.display = 'block'
  document.querySelector('#dialogueBox').style.display = 'none'
  document.querySelector('#enemyHealthBar').style.width = '100%'
  document.querySelector('#playerHealthBar').style.width = '100%'
  document.querySelector('#attacksBox').replaceChildren()

  
  playerpokemonid = 0
  enemypokemonid = 0
  player_turn.val = 0

  playerpokemon = playerpokemon_deck[playerpokemonid]
  // let nextpokemon = new Monster(monsters.megarayquaza[1])
  enemy = enemypokemon_deck[enemypokemonid]

  document.getElementsByClassName("enemy-name")[0].innerHTML = enemy.name
  document.getElementsByClassName("playerpokemon-name")[0].innerHTML = playerpokemon.name
  renderedSprites = []
  
  
  renderedSprites.splice(0,0,pokeball)
  gsap.from(pokeball.position,{
    x:-10,
    y: 576,
    duration: 2,
    onComplete: () => {
      renderedSprites.splice(0,1)
      renderedSprites.splice(0,0,playerpokemon);
      gsap.from(playerpokemon.position,{
        x: -playerpokemon.width,
        y: playerpokemon.height-50,
        duration: 1.2,
        // yoyo: true
        onComplete: () => {
          renderedSprites.splice(0,0,enemy_pokeball)
          gsap.from(enemy_pokeball.position,{
            x:1024,
            y: 200,
            duration: 2,
            onComplete: () => {
              renderedSprites.splice(0,1)
              renderedSprites.splice(1,0,enemy);
              gsap.from(enemy.position,{
                x: 1024,
                y: -50,
                duration: 1.2,
                // yoyo: true
                onComplete: () => {
                  player_turn.val = 1
                }
              })
              // document.querySelector('#playerHealthBar').style.width = '100%'
              // document.getElementsByClassName('playerpokemon-name')[0].innerHTML = playerpokemon.name
            }
          })
        }
      })
      // document.querySelector('#playerHealthBar').style.width = '100%'
      // document.getElementsByClassName('playerpokemon-name')[0].innerHTML = playerpokemon.name
    }
  })

  queue = []

  playerpokemon.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector('#attacksBox').append(button)
  })

  // let btn = document.createElement('button')
  // btn.innerHTML = 'Quit'
  // document.querySelector('#attacksBox').append(btn)

  // our event listeners for our buttons (attack)
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(renderedSprites)
      if(!player_turn.val) return
      player_turn.val = 0
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      if(playerpokemon.health > 0){
        playerpokemon.attack({
          attack: selectedAttack,
          recipient: enemy,
          renderedSprites,
        })
      }
      if (enemy.health <= 0) {
        queue.push(() => {
          enemy.faint()
        })
        if(enemypokemon_deck.length > enemypokemonid+1){
          enemypokemonid++
          queue.push(() =>{
            // player_turn.val = 0
            enemy_pokeball.frames.val = 0
            renderedSprites.splice(0,0,enemy_pokeball)
            gsap.from(enemy_pokeball.position,{
              x:1024,
              y: 200,
              duration: 2,
              onComplete: () => {
                renderedSprites.splice(0,1)
                enemy = enemypokemon_deck[enemypokemonid]
                renderedSprites[1] = enemy
                gsap.from(enemy.position,{
                  x: 1024,
                  y: -50,
                  duration: 1.2,
                  onComplete: () => {
                    player_turn.val = 1
                  }
                  // yoyo: true
                })
                document.querySelector('#enemyHealthBar').style.width = '100%'
                document.getElementsByClassName('enemy-name')[0].innerHTML = enemy.name
                audio.victory.stop()
                audio.battle.play()
              }
            })
            // enemy = enemypokemon_deck[enemypokemonid]
            // renderedSprites[1] = enemy
            // gsap.from(enemy.position,{
            //   x: 1024,
            //   y: -50,
            //   duration: 1.2,
            //   // yoyo: true
            // })
            // document.querySelector('#enemyHealthBar').style.width = '100%'
            // document.getElementsByClassName('enemy-name')[0].innerHTML = enemy.name
            // audio.victory.stop()
            // audio.battle.play()
          })
        }
else{
        queue.push(() => {
          // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId)
              animate()
              document.querySelector('#userInterface').style.display = 'none'

              gsap.to('#overlappingDiv', {
                opacity: 0
              })
              battle.initiated = false
              audio.Map.play()
            }
          })
        })
}
      }

      // enemy or enemy attacks right here
      const randomAttack =
        enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)]

      queue.push(() => {
        // player_turn.val = 0
        if(enemy.health > 0){
          enemy.attack({
            attack: randomAttack,
            recipient: playerpokemon,
            renderedSprites,
            player_turn
          })
        }
        if (playerpokemon.health <= 0) {
          queue.push(() => {
            playerpokemon.faint()
          })
////////user code
          if(playerpokemonid+1 < playerpokemon_deck.length){
            playerpokemonid++;
            
            queue.push(() =>{
              player_turn.val = 0
              pokeball.frames.val = 0
              renderedSprites.splice(0,0,pokeball)
              gsap.from(pokeball.position,{
                x:-10,
                y: 576,
                duration: 2,
                onComplete: () => {
                  renderedSprites.splice(0,1)
                  playerpokemon = playerpokemon_deck[playerpokemonid]
                  renderedSprites[0] = playerpokemon
                  gsap.from(playerpokemon.position,{
                    x: -playerpokemon.width,
                    y: playerpokemon.height-50,
                    duration: 1.2,
                    // yoyo: true
                    onComplete: () => {
                      player_turn.val = 1
                    }
                  })
                  document.querySelector('#playerHealthBar').style.width = '100%'
                  document.getElementsByClassName('playerpokemon-name')[0].innerHTML = playerpokemon.name
                  audio.victory.stop()
                  audio.battle.play()
                }
              })
              
              // playerpokemon = playerpokemon_deck[playerpokemonid]
              // renderedSprites[0] = playerpokemon
              // gsap.from(playerpokemon.position,{
              //   x: -playerpokemon.width,
              //   y: playerpokemon.height-50,
              //   duration: 1.2,
              //   // yoyo: true
              // })
              // document.querySelector('#playerHealthBar').style.width = '100%'
              // document.getElementsByClassName('playerpokemon-name')[0].innerHTML = playerpokemon.name
              // audio.victory.stop()
              // audio.battle.play()
            })
          }
////////////////
else{
          queue.push(() => {
            // fade back to black
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete: () => {
                cancelAnimationFrame(battleAnimationId)
                
                animate()
                document.querySelector('#userInterface').style.display = 'none'

                gsap.to('#overlappingDiv', {
                  opacity: 0
                })
                battle.initiated = false
                audio.Map.play()
              }
            })
          })
}
        }
      })
    })

    button.addEventListener('mouseenter', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      document.querySelector('#attackType').innerHTML = selectedAttack.type
      document.querySelector('#attackType').style.color = selectedAttack.color
    })
  })
}

function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle)
  battleBackground.draw()
  // console.log(battleAnimationId)

  renderedSprites.forEach((sprite) => {
    sprite.draw()
  })
}

animate()
// initBattle()
// animateBattle()

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
  if (queue.length > 0) {
    queue[0]();
    queue.shift()
  } else e.currentTarget.style.display = 'none'
})

// function summon_pokemon(pokeball,pokemon,isEnemy){
//   renderedSprites.splice(0,0,pokeball);
//   gsap.from(pokeball.position,{
//     x: isEnemy ? 1024 : -10,
//     y: isEnemy ? 200 : 576,
//     duration: 2,
//     onComplete: () => {
//       renderedSprites.splice(0,1);
//       isEnemy ? renderedSprites.splice(1,0,pokemon) : renderedSprites.splice(0,0,pokemon);
//       gsap.from(pokemon.position,{
//         x: isEnemy ? 1024 : -pokemon.width,
//         y: isEnemy ? -50 : pokemon.height-50,
//         duration: 1.2,
//         onComplete: () => lock++
//       })
//     }
//   })
// }
