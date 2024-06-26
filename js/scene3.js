class scene3 extends Phaser.Scene{
	constructor(){
		super('gameOver');
	}
	preload(){
		// this.load.image('bee','assets/ong-ham-hoc.png');
		this.load.image('bg-win','assets/bgend.png');
		this.load.image('1star','assets/1star.png');
		this.load.image('2star', 'assets/2star.png');
		this.load.image('3star', 'assets/3star.png');
	
    }
	create(){	
        this.add.image(600, 350, 'bg-win');
        // this.add.image(600, 350, 'stars');
		// var width = game.config.width
		// var height = game.config.height
		console.log(this.score);
		var star3 = this.add.image(600, 500, '3star').setScale(0.6).setInteractive();
		star3.visible = false
		var star2 = this.add.image(600, 500, '2star').setScale(0.6).setInteractive();
		 star2.visible = false
		var star = this.add.image(600, 500, '1star').setScale(0.6).setInteractive();
		star.visible = false

		// // var count1 = 0; 
		// // for(var i = 0; i < jar.length; ++i) 
		// // 	if(jar[i] == 1) count1 ++; 
		
		if (this.score > 30){
			star3.visible = true;
		}
		else if (this.score < 30 || this.score > 10){
			star2.visible = true;
		}	
		else if (this.score <= 10){
			star.visible = true;
		}	
		// this.add.image(900, 200, 'bee');

		var timedEvent = this.time.addEvent({ delay: 1000, callback: loops, callbackScope: this, loop: true });
		
		function loops()
		{
			zoomOut(star3, 0.8, 1.1, 0.01, 10, this);
			zoomOut(star2, 0.8, 1.1, 0.01, 10, this);
			zoomOut(star, 0.8, 1.1, 0.01, 10, this);
		}
		// var t = "Bây giờ các bạn hãy cùng chị tập gõ phím nhé, chúng ta cần mau mau hoàn thành mỗi phím trước 10 giây đó!"
		// this.add.text(100, 32, t, { font: '16px Arial',  color: '#ff0000' });

		// var bt_continue = this.add.sprite(600, 540, 'continue').setScale(0.8).setInteractive();

		// this.input.keyboard.on('keydown-ENTER', function (event) {
		// 	this.scene.start('getAcquaintedA'); 
		// }, this);

		//this.input.on('pointerup', function (pointer) {console.log(pointer.x, pointer.y)})
	}
	update(){	
		
	}

}