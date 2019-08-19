function Human(newName, newYob){
this.name = newName;
this.yob = newYob;

    this.calcage = function(){
        return 2019 - this.yob
    }
}