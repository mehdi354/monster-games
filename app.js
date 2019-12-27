new Vue({
    el : "#app",
    data : {
        playerHealth : 100,
        monsterHealth :100,
        game_End      : false,
        steps         : []
    },
    methods : {
        decrease_power : function(){
            var random1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            var random2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            this.playerHealth = this.playerHealth-random1;
            this.monsterHealth= this.playerHealth-random2;
            console.log(this.playerHealth,this.monsterHealth);
            this.steps.unshift({
             true: "Player hits by" +random1,
             true2: "Monster hits by " +random2   
            });
            if( this.playerHealth <= 0 ||  this.monsterHealth <= 0 ){
                console.log("ADsasd");
                this.game_End = false;
                if( this.playerHealth <= 0){
                   alert("Okay! You won");
                }
                else if(this.monsterHealth <= 0){
                    alert("yo @ Monster won");
                }
                this.playerHealth = 100;
                this. monsterHealth = 100;
            }
        },
        special_power : function(){
            var special1 = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
            var special2 = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
            this.playerHealth = this.playerHealth-special1;
            this.monsterHealth= this.playerHealth-special2;
             this.steps.unshift({
             true: "Player hits by" +special1,
             true2: "Monster hits by " +special2   
            });
            if( this.playerHealth <= 0 ||  this.monsterHealth <= 0 ){
                console.log("ADsasd");
                this.game_End = false;
                if( this.playerHealth <= 0){
                   alert("Okay! You won");
                }
                else if(this.monsterHealth <= 0){
                    alert("yo @ Monster won");
                }
                this.playerHealth = 100;
                this. monsterHealth = 100;
            }
        },
        heal : function(){
            var heal1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            var heal2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            this.playerHealth = this.playerHealth +heal1;
            this.monsterHealth= this.playerHealth + heal2;
        },
        give_up: function(){
            this.playerHealth =100;
            this.monsterHealth = 100;
            this.game_End = false;
        },

    }
});