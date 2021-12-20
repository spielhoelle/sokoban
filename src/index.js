import { directions, keys, levels } from './constants.js'
import Sokoban from './Sokoban.js'
const levelSelector = document.querySelector('#levelselector')

levels.map((level, index) => {
  const option = document.createElement('option')
  option.value = index
  option.innerText = index + 1
  levelSelector.appendChild(option)
})
// init
const cachedLevel = localStorage.getItem("dw-sokoban-level")
const theLevel = cachedLevel ? Number(cachedLevel) : 0
levelSelector.selectedIndex = theLevel
let sokoban = new Sokoban({ level: theLevel })
sokoban.render({ restart: true, level: theLevel })

// re-render
document.addEventListener('keydown', (event) => {
  const playerCoords = sokoban.findPlayerCoords()

  switch (event.key) {
    case keys.up:
    case keys.w:
      sokoban.move(playerCoords, directions.up)
      break
    case keys.down:
    case keys.s:
      sokoban.move(playerCoords, directions.down)
      break
    case keys.left:
    case keys.a:
      sokoban.move(playerCoords, directions.left)
      break
    case keys.right:
    case keys.d:
      sokoban.move(playerCoords, directions.right)
      break
    default:
  }

  sokoban.render()
})

document.querySelector('button').addEventListener('click', (event) => {
  levelSelector.value = theLevel
  sokoban.render({ restart: true })
})
levelSelector.addEventListener('change', (event) => {
  localStorage.setItem("dw-sokoban-level", Number(event.target.value))
  sokoban = new Sokoban({ level: Number(event.target.value) })
  sokoban.render({ level: Number(event.target.value) })
  event.target.blur()
})
