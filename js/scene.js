// class PlayScene extends Phaser.Scene {
// 	constructor() {
// 		super({key:'play', active:true});
// 	}
// 	//ballon
// 	preload() {
// 		this.load.image('sky',				'assets/img/sky.png');
// 		this.load.image('ball-1',		'assets/img/ball-1.png');
// 		this.load.image('ball-2',		'assets/img/ball-2.png');
// 		this.load.image('ball-3',	'assets/img/ball-3.png');
// 		this.load.image('ball-4',	'assets/img/ball-4.png');
// 		this.load.image('ball-5',	'assets/img/ball-5.png');
// 		this.load.audio('pop',		'assets/audio/pop.mp3');
// 	}

// 	create() {
// 		this.sky = this.add.image(0, 0, 'sky');
// 		this.sky.setOrigin(0,0);
// 		this.sky.setScale(3,3);

// 		this.balloons = [];
// 		this.score = 0;

// 		this.scoreText = this.add.text(50,50, '', {fontFamily:'Arial Black', fontSize:74, color:'#c51b7d'});
// 		this.scoreText.setStroke('#de77ae', 5);
// 		this.scoreText.setShadow(2, 2, '#333333', 2, true, false);

// 		this.popSound = this.sound.add('pop');

// 		this.startGame();
// 	}

// 	startGame() {
// 		var sx = (this.sys.game.config.width)/3;
// 		for(var i=0;i<3;i++) {
// 			this.addBalloon(sx*i + sx*0.5);
// 		}
// 		this.score = 0;
// 	}

// 	addBalloon(x) {
// 		if(!x) x = Math.floor(Math.random()*(this.sys.game.config.width-128)) + 64;
// 		var balloon = new Balloon(this, x, this.sys.game.config.height+128, this.randomColor());
// 		balloon.speed = 0.25 + Math.random() + (this.score/10);
// 		this.balloons.push(balloon);
// 		this.score++;
// 	}

// 	killBalloon(balloon) {
// 		this.popSound.play();
// 		this.balloons = this.balloons.filter(b => b!==balloon);
// 		var tween1 = this.tweens.add({
// 			targets: balloon,
// 			scaleX: 1.5,
// 			scaleY: 1.5,
// 			duration: 50
// 		});
// 		var tween2 = this.tweens.add({
// 			targets: balloon,
// 			scaleX: 0,
// 			scaleY: 0,
// 			duration: 50,
// 			delay: 150,
// 			onComplete: () => balloon.destroy()
// 		});
// 	}

// 	gameOver() {
// 		this.cameras.main.shake(500);
// 		this.balloons.forEach(b => this.killBalloon(b));
// 		this.score = 0;
// 		this.startGame();
// 	}

// 	randomColor() {
// 		var colors = ['balloon-red','balloon-blue','balloon-yellow','balloon-green','balloon-purple'];
// 		var random = Math.floor(Math.random()*colors.length);
// 		return colors[random];
// 	}

// 	update(time,delta) {
// 		// console.log('update time=%o, delta=%o', time,delta);
// 		this.balloons.forEach(b => b.update(time,delta));
// 		this.scoreText.setText('Score: '+this.score);
// 	}
// }