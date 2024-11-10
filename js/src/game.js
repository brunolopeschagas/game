import MainScene from "./scenes/MainScene.js";

const config = {
    width: 800,
    height: 640,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'survival-game',
    scene:[MainScene],
    physics:{
        default: 'matter',
        matter:{
            debug: true,
            gravity: {y:0},
        }
    },
    
}

new Phaser.Game(config);