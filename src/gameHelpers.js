export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
        )
export const checkCollision = (player, stage, { x: moveX, y: moveY })=> {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[0].length; x += 1){

            // 1. check that we're on an actual tetromino cell
            if(player.tetromino[y][x] != 0) {
                if (
                // 2. check that our move is inside game height(y) 
                !stage[y + player.pos.y + moveY] || 
                // 3. check tetromino is not moving outside game area's width(x)
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                // 4. check that the cell we're moving to isn't set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ){
                    return false;
                }
            }
        }
    }
}