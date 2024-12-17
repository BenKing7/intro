controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.disintegrate, 500)
})
let mySprite: Sprite = null
scene.setBackgroundColor(7)
game.splash("Hello")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . . . 6 6 5 6 5 6 6 . . . . 
    . . . . . 6 6 6 6 6 6 6 6 . . . 
    . . . . . 6 5 6 6 6 5 6 6 . . . 
    . . . . . 6 6 5 5 5 6 6 6 . . . 
    . . . . . 6 6 6 6 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    `, SpriteKind.Player)
