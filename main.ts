input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
let Ticks = 0
let EmptyObstacles = 0
let Bird: game.LedSprite = null
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    EmptyObstacles = randint(0, 4)
    if (Ticks % 3 == 0) {
        for (let index = 0; index <= 4; index++) {
            if (index != EmptyObstacles) {
                Obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let Obstacle of Obstacles) {
        if (Obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            music.playMelody("C5 B A G F E - - ", 120)
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(1000)
})
