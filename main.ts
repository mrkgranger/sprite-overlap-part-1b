sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite2.destroy()
})
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`person`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`apple`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.Ghost, true)
mySprite.setPosition(120, 60)
mySprite2.setPosition(20, 60)
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
