export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
    }

    preload(){
        console.log("preload");
        this.load.atlas('female','assets/images/female.png', 'assets/images/female_atlas.json');
       
        this.load.image('tiles', './assets/maps/grass.png');
        this.load.image('border', './assets/maps/water.png');
        this.load.tilemapTiledJSON('map', './assets/maps/my_fisrt_rpg.json');
    }

    create(){
        console.log("create");

        const map = this.make.tilemap({key: 'map'});
        const tilesetGrass = map.addTilesetImage('grass', 'tiles');
        const tilesetWater = map.addTilesetImage('water', 'border');

        const ground = map.createLayer('grass', tilesetGrass, 0, 0);
        const water = map.createLayer('water', tilesetWater, 0, 0);

        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world, 0, 0, 'female', 'townsfolk_f_idle_1');
        this.add.existing(this.player);
        this.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });
    }

    update(){
        console.log("update");
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown){
            playerVelocity.x = -1;
        } else if(this.inputKeys.right.isDown){
            playerVelocity.x = 1;
        }
        if(this.inputKeys.up.isDown){
            playerVelocity.y = -1;
        } else if(this.inputKeys.down.isDown){
            playerVelocity.y = 1;
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.player.setVelocity(playerVelocity.x, playerVelocity.y);
    }
}