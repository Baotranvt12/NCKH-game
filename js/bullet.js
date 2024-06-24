class Bullet extends Phaser.Physics.Arcade.Image {
    minVelo = 3050000
    constructor(scene, desX, desY) {
        super(scene, 600, 620, 'bullet');
		scene.add.existing(this);

        scene.physics.add.existing(this);
         this.body.setCircle();
        // this.body.setOffset(30, 60);
        // this.setScale(0.4);

        var veloX = desX - 600, veloY = desY - 650;
        const l = veloX*veloX + veloY*veloY;
        // console.log(veloX + ', ' + veloY + ', ' + l);

        if (this.minVelo > l) {
            veloX *= Math.sqrt(this.minVelo/l);
            veloY *= Math.sqrt(this.minVelo/l);
        }

        // console.log(' => ' + veloX + ', ' + veloY);

        this.body.setVelocity(veloX, veloY);
        // console.log(this)
    }

    // fire (x, y)
    // {
    //     this.setPosition(x, y);

    //     this.setActive(true);
    //     this.setVisible(true);
    // }

    // update(time, delta)
    // {
    //     this.x += this.speed * delta;

    //     if (this.x > 1200)
    //     {
    //         this.setActive(false);
    //         this.setVisible(false);
    //     }
    // }

};