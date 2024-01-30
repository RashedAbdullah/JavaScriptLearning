const obj = {
    Name: "Rashed",
    func: function(){
        return {
            x: ()=>{
                console.log(this);
            }
        }
    }
}

obj.func().x();