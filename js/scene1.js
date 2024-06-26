var blazewarriorsstatusgame = false;
var music;

class scene1 extends Phaser.Scene{
	constructor(){
		super('introGame');
	}
	preload(){
		
		this.load.image('bg','assets/bg-start.png');
		this.load.image('play', 'assets/start.png');
		this.load.image('more', 'assets/more.png');
		this.load.image('menu', 'assets/menu.png');
		this.load.image('exit', 'assets/exit.png')
		// this.load.image('logo', 'assets/logo.png');
		this.load.audio('bgmusic', 'assets/game.mp3');
	}
	create(){
	//	this.add.text(50, 100, "Trò chơi Ong vàng bắn bong bóng", { font: "40px Times New Roman", fill: "#ffa0d0"});
		music = this.sound.add('bgmusic');
		music.setLoop(true);
		music.play();
		
		this.add.image(600, 350, 'bg');
		// this.add.image(300, 270, 'logo');
	
		var more = this.add.sprite(600, 350, 'more').setScale(0.3).setInteractive();
		more.visible = false;
		var menu = this.add.sprite(780, 450, 'menu').setInteractive();
		var play = this.add.sprite(520, 450, 'play').setScale(0.3).setInteractive();
		var exit = this.add.sprite(790, 450, 'exit').setScale(0.6).setInteractive();
		exit.visible = false;
		var timedEvent = this.time.addEvent({ delay: 1000, callback: loops, callbackScope: this, loop: true });
		
		function loops()
		{
			//them hieu ung cho nut play va menu
			zoomOut(play, 0.3, 0.5, 0.01, 10, this);
			zoomOut(menu, 0.3, 0.5, 0.01, 10, this);
		}
		play.on('pointerdown', function(){
			this.scene.start('playGame');
		}, this);

		menu.on('pointerdown', function(){
			more.visible = true;
			exit.visible = true;
			play.visible = false;
			menu.visible = false;
		}, this);

		exit.on('pointerdown', function(){
			more.visible = false;
			exit.visible = false;
			play.visible = true;
			menu.visible = true;
		}, this);

		this.input.on('pointerup', function (pointer) {console.log(pointer.x, pointer.y)})

	}
	update(){
		
		
	}
}