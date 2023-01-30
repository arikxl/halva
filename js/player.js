export class Player{
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.img = document.getElementById('player');
        this.speed = 0;
        this.maxSpeed = 10;
    }
    update(input) {
        // HORIZONTAL MOVE
        this.x += this.speed;
        if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else this.speed = 0; 
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        // if (input.includes('ArrowUp')) this.y--; 
        // else if (input.includes('ArrowDown')) this.y++;
    }

    draw(context) {
        context.drawImage(this.img,
            0, 0, this.width, this.height,
            this.x, this.y, this.width, this.height);
    }


}