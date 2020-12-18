namespace SpriteKind {
    export const present = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const money = SpriteKind.create()
    export const dollar = SpriteKind.create()
}
function character () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e . . . . . . e . . . 
        . . . . . d e . . . . e d . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . . e f e f e e . . . . 
        . . . . . . e e 2 e e e . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . f . 2 2 2 2 . f . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . e . . e . . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    pause(2000)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    scene.cameraFollowSprite(mySprite)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.heart, function (sprite, otherSprite) {
    heart.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.present, function (sprite, otherSprite) {
    presents.destroy()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . . . . . . e . . . . . 
        . . . d e . . . . e d . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e e e e e . a . a . . 
        . . . . e f e f e e . . a . . . 
        . . . . e e 2 e e e . 3 5 3 . . 
        . . . . . e e e e . . 5 5 5 . . 
        . . . . . 2 2 2 2 . f 3 5 3 . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . f . 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . e e . e e . . . . . . . 
        `)
    box = 1
})
function coin () {
    dollar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 1 5 5 5 5 . . . . 
        . . . . 5 5 1 1 1 1 5 5 . . . . 
        . . . . 5 5 1 5 5 5 5 5 . . . . 
        . . . . 5 5 1 1 1 1 5 5 . . . . 
        . . . . 5 5 5 5 5 1 5 5 . . . . 
        . . . . 5 5 1 1 1 1 5 5 . . . . 
        . . . . 5 5 5 1 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.dollar)
    tiles.placeOnRandomTile(dollar, sprites.castle.tileDarkGrass3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.dollar, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.destroy()
    myenemy.destroy()
    character()
    gift()
    makeenemy()
})
function makeenemy () {
    myenemy = sprites.create(img`
        ....................fffffff.......
        ...................f222222f.......
        ..................f22222222f......
        .................f222222222f......
        ........ffff....f2222222222f......
        .......f1111f..f222222222222ff....
        ......f11111f.f222222222222222f...
        ......f111111f22222222fff222222f..
        ......f1111111f2222222f..f222222f.
        .......f1f11111ff22222f...ff22222f
        ........f7f111111ff2222f....f2222f
        .......f777f1111111ff22f.....f22f.
        .......f7777f11111111f2f.....f2f..
        ......f77ff77ff1111111fff.....f...
        ......f7777f777ff1111111fff..f1f..
        ......f77777f777ffff1111111f.f11f.
        ......f77777777f7777ff11111ff111f.
        ....ff77777fff77777ffffff111f111f.
        ...f777777755fff7fff55777f11f11f..
        ...f777777755225f522557ff7ff.f1f..
        ..f777777775555575555ff77777f.f...
        ..f77f77777755576755f7777777f.....
        ...f77ffff777776667f7ff7ff77f.....
        ...f777f77777777f777777f777f......
        ....f777ff7777777f77777f777f......
        .....ff777f777777f7777f777f.......
        .......ff77f77777f77ff77ff........
        .........ff7ff77f77f777f..........
        ...........f77f77ff77fff..........
        ............f77ff777ff............
        .............f7777fff.............
        ..............ffff77f.............
        ...............f777f..............
        ................fff...............
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myenemy, sprites.castle.tileDarkGrass3)
    myenemy.follow(mySprite, speeds)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (box == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e . . . . . . e . . . . 
            . . . . d e . . . . e d . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e f e f e e . . . . . 
            . . . . . e e 2 e e e . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . e . . e . . . . . . 
            . . . . . e e . e e . . . . . . 
            `)
        info.changeScoreBy(10)
        speeds += 3
        number += 1
        myenemy.follow(mySprite, speeds)
        gift()
        box = 0
        if (number % 5 == 0) {
            life()
        }
    }
})
function life () {
    heart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . . . f f . . . 
        . . . f 2 2 f f . . f f f f . . 
        . . f f 2 5 5 f . f f 2 2 2 f . 
        . . f 2 5 5 2 f f f 2 2 5 2 f . 
        . . f 5 5 2 2 2 f 2 5 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 5 2 f . 
        . . . f 2 2 5 f 2 2 f 2 2 2 f . 
        . . . . f 2 2 2 2 2 2 2 5 5 f . 
        . . . . . f 2 2 2 6 2 5 2 f . . 
        . . . . . f f 2 2 2 5 2 f . . . 
        . . . . . . f f 2 5 5 f f . . . 
        . . . . . . . f f 2 f f . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.heart)
    tiles.placeOnRandomTile(heart, sprites.castle.tileDarkGrass3)
}
function gift () {
    presents = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a . a a . . . . . 
        . . . . . . a a a a a . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . 3 3 3 3 5 3 3 3 . . . . 
        . . . . 3 3 3 3 5 3 3 3 . . . . 
        . . . . 3 3 3 3 5 3 3 3 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 3 3 3 3 5 3 3 3 . . . . 
        . . . . 3 3 3 3 5 3 3 3 . . . . 
        . . . . 3 3 3 3 5 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.present)
    tiles.placeOnRandomTile(presents, sprites.castle.tileDarkGrass3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (box == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e . . . . . . e . . . . 
            . . . . d e . . . . e d . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e f e f e e . . . . . 
            . . . . . e e 2 e e e . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . e . . e . . . . . . 
            . . . . . e e . e e . . . . . . 
            `)
        pause(2000)
        box = 0
        gift()
    } else {
        info.changeLifeBy(-1)
        mySprite.destroy()
        myenemy.destroy()
        character()
        makeenemy()
    }
})
let number = 0
let myenemy: Sprite = null
let dollar: Sprite = null
let box = 0
let presents: Sprite = null
let heart: Sprite = null
let mySprite: Sprite = null
let speeds = 0
game.showLongText("Use the arrows to collect presents and take them to the christmas tree.", DialogLayout.Top)
game.showLongText("But remember don't let the enemy catch you.", DialogLayout.Bottom)
tiles.setTilemap(tiles.createTilemap(hex`1000100002020402050402040502040202040102050606060606060606020703030303020406060606060606060203030202030202020402040206060604020303020304020606060606060606060203030203020406060602020406060204060606060502060606060602060602060606060604050606060506020606020606020606020206060602060402020406060206060204060602050602060605020204060604020606060606050606060606060606020506060606060206060606060606060202060806060604020502020205060604040602060206060606060606060606020206020606060606060606060606060202060202020502020205020205020205`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
    2 . . . . . . . . 2 . . . . . 2 
    2 . . . . . . . . 2 . . 2 2 . 2 
    2 2 2 2 2 2 . . . 2 2 . . 2 . 2 
    2 . . . . . . . . . 2 . . 2 . 2 
    2 . . . 2 2 2 . . 2 2 . . . . 2 
    2 . . . . . 2 . . 2 . . . . . 2 
    2 . . . 2 . 2 . . 2 . . 2 . . 2 
    2 . . . 2 . 2 2 2 2 . . 2 . . 2 
    2 . . 2 2 . 2 . . 2 2 2 2 . . 2 
    2 . . . . . 2 . . . . . . . . 2 
    2 . . . . . 2 . . . . . . . . 2 
    2 . . . . . 2 2 2 2 2 2 2 . . 2 
    2 . 2 . 2 . . . . . . . . . . 2 
    2 . 2 . . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundCenter,sprites.castle.shrub,sprites.builtin.coral5,sprites.castle.tileDarkGrass3,myTiles.tile1,sprites.castle.tileDarkGrass1], TileScale.Sixteen))
info.setLife(3)
music.playMelody("C5 A B G A F G E ", 300)
speeds = 10
character()
gift()
makeenemy()
game.onUpdateInterval(20000, function () {
    coin()
})
