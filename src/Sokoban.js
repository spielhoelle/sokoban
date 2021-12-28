import {
  EMPTY,
  BLOCK,
  SUCCESS_BLOCK,
  VOID,
  PLAYER,
  directions,
  size,
  multiplier,
  colors,
  levels,
  maxWidth
} from './constants.js'
import {
  isBlock,
  isWall,
  isTraversible,
  isVoid,
  getX,
  getY,
  countBlocks,
  generateGameBoard,
} from './utils.js'

class Sokoban {
  constructor({ level }) {
    this.canvas = document.querySelector('canvas')
    this.canvas.width = size.width
    this.canvas.height = size.height

    this.context = this.canvas.getContext('2d')
    this.context.fillStyle = colors.empty
    this.context.fillRect(0, 0, size.width, size.height)

    this.board = generateGameBoard({ level })
    this.boardIndex = level
    this.level = levels[level]
    const maxLevel = localStorage.getItem("dw-sokoban-maxlevel") ? Number(localStorage.getItem("dw-sokoban-maxlevel")) : 0
    const currentlevel = localStorage.getItem("dw-sokoban-currentlevel") ? Number(localStorage.getItem("dw-sokoban-currentlevel")) : 0
    if (currentlevel > maxLevel) {
      localStorage.setItem("dw-sokoban-maxlevel", currentlevel)
    }
    this.renderDropdown()
  }
  renderDropdown() {
    const maxLevel = localStorage.getItem("dw-sokoban-maxlevel") ? Number(localStorage.getItem("dw-sokoban-maxlevel")) : 0
    const levelSelector = document.querySelector('#levelselector')
    levelSelector.innerHTML = ''
    levels.slice(0, Number(maxLevel) + 1).map((level, index) => {
      const option = document.createElement('option')
      option.value = index
      option.innerText = index + 1
      levelSelector.appendChild(option)
      levelSelector.selectedIndex = localStorage.getItem("dw-sokoban-currentlevel") ? Number(localStorage.getItem("dw-sokoban-currentlevel")) : 0
    })
  }
  paintCell(context, cell, x, y) {
    if (cell === 'void' || cell === 'player') {
      const circleSize = cell === 'player' ? multiplier / 3 : multiplier / 5

      this.context.beginPath()
      this.context.rect(x * multiplier + 2.5, y * multiplier + 2.5, multiplier, multiplier)
      this.context.fillStyle = colors.empty.fill
      this.context.fill()

      this.context.beginPath()
      this.context.arc(x * multiplier + 2.5 + multiplier / 2, y * multiplier + 2.5 + multiplier / 2, circleSize, 0, 2 * Math.PI)
      this.context.lineWidth = multiplier / 5
      this.context.strokeStyle = colors[cell].stroke
      this.context.fillStyle = colors[cell].fill
      this.context.fill()
      this.context.stroke()
    } else {
      this.context.beginPath()
      this.context.rect(x * multiplier + 5, y * multiplier + 5, multiplier - multiplier / 5, multiplier - multiplier / 5)
      this.context.fillStyle = colors[cell].fill
      this.context.fill()

      this.context.beginPath()
      this.context.rect(x * multiplier + 5, y * multiplier + 5, multiplier - multiplier / 5, multiplier - multiplier / 5)
      this.context.lineWidth = multiplier / 5
      this.context.strokeStyle = colors[cell].stroke
      this.context.stroke()
    }
  }

  render(options = {}) {
    this.context = this.canvas.getContext('2d')
    this.context.fillStyle = "black"
    this.context.fillRect(0, 0, size.width, size.height)
    if (options.restart) {
      localStorage.removeItem("dw-sokoban-currentlevel")
      this.board = generateGameBoard({ level: options.level || 0 })
    }
    if (options.level !== undefined) {
      this.level = levels[options.level]
      this.boardIndex = options.level
      this.board = generateGameBoard({ level: options.level })
    }
    this.board.forEach((row, y) => {
      row.forEach((cell, x) => {
        this.paintCell(this.context, cell, x, y)
      })
    })
    const rowsWithVoid = this.board.filter((row) => row.some((entry) => entry === VOID))
    // The player herself might be standing on an initially void cell:
    if (isVoid(this.board[this.findPlayerCoords().y][this.findPlayerCoords().x])) {
      rowsWithVoid.push(this.board[this.findPlayerCoords().y]);
    }
    const rowsWithSuccess = this.level.flatMap(a => a).filter(a => a === "void" || a === "success_block")
    const levelSuccessBlocks = this.board.flatMap(a => a).filter(a => a === "success_block")
    const isWin = rowsWithVoid.length === 0 && rowsWithSuccess.length === levelSuccessBlocks.length
    if (isWin) {
      this.context.fillStyle = '#111'
      this.context.fillRect(0, 0, size.width, size.height)
      this.context.font = 'bold 60px sans-serif'
      this.context.fillStyle = colors.success_block.fill
      this.context.fillText('勝利!', 65, 300)
      setTimeout(() => {
        this.boardIndex++
        if (Number(localStorage.getItem("dw-sokoban-maxlevel")) <= this.boardIndex) {
          localStorage.setItem("dw-sokoban-maxlevel", this.boardIndex)
        }
        this.level = levels[this.boardIndex]
        this.renderDropdown()
        document.querySelector('#levelselector').selectedIndex = this.boardIndex
        localStorage.setItem("dw-sokoban-currentlevel", this.boardIndex)
        this.render({ level: this.boardIndex })
      }, 500);
    }
  }

  findPlayerCoords() {
    const y = this.board.findIndex((row) => row.includes(PLAYER))
    const x = this.board[y].indexOf(PLAYER)

    return {
      x,
      y,
      above: this.board[y - 1][x],
      below: this.board[y + 1][x],
      sideLeft: this.board[y][x - 1],
      sideRight: this.board[y][x + 1],
    }
  }

  movePlayer(playerCoords, direction) {
    // Replace previous spot with initial board state (void or empty)
    this.board[playerCoords.y][playerCoords.x] =
      isVoid(this.level[playerCoords.y][playerCoords.x]) ? VOID : EMPTY

    // Move player
    this.board[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = PLAYER
  }

  movePlayerAndBoxes(playerCoords, direction) {
    const newPlayerY = getY(playerCoords.y, direction, 1)
    const newPlayerX = getX(playerCoords.x, direction, 1)
    const newBoxY = getY(playerCoords.y, direction, 2)
    const newBoxX = getX(playerCoords.x, direction, 2)

    // Don't move if the movement pushes a box into a wall
    if (isWall(this.board[newBoxY][newBoxX])) {
      return
    }

    // Count how many blocks are in a row
    let blocksInARow = 0
    if (isBlock(this.board[newBoxY][newBoxX])) {
      blocksInARow = countBlocks(1, newBoxY, newBoxX, direction, this.board)
      // See what the next block is
      const nextBlock =
        this.board[getY(newPlayerY, direction, blocksInARow)][
        getX(newPlayerX, direction, blocksInARow)
        ]
      // Push all the blocks if you can
      if (isTraversible(nextBlock)) {
        for (let i = 0; i < blocksInARow; i++) {
          // Add blocks
          this.board[getY(newBoxY, direction, i)][getX(newBoxX, direction, i)] =
            isVoid(this.board[getY(newBoxY, direction, i)][getX(newBoxX, direction, i)])
              ? SUCCESS_BLOCK
              : BLOCK
        }
        this.movePlayer(playerCoords, direction)
      }
    } else {
      // Move box
      // If on top of void, make into a success box
      this.board[newBoxY][newBoxX] = isVoid(this.board[newBoxY][newBoxX]) ? SUCCESS_BLOCK : BLOCK
      this.movePlayer(playerCoords, direction)
    }
  }

  move(playerCoords, direction) {
    const { x, y, above, below, sideLeft, sideRight } = playerCoords

    const adjacentCell = {
      [directions.up]: above,
      [directions.down]: below,
      [directions.left]: sideLeft,
      [directions.right]: sideRight,
    }

    if (isTraversible(adjacentCell[direction])) {
      this.movePlayer(playerCoords, direction)
    }

    if (isBlock(adjacentCell[direction])) {
      this.movePlayerAndBoxes(playerCoords, direction)
    }
  }
}

export default Sokoban
