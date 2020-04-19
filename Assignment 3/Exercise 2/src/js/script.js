class MyConsole{
	obj=[];

	log(value){
		var x=JSON.stringify(value);
		x=x.replace(/"/g, "");
		this.obj.push(x);
		console.log('"'+x+'"');
	}

	history(range){
		var result="";
		if(this.obj.length===0){
			console.log('""');
		} else{
			if((typeof range) == "undefined"){

				for(var i=0;i<this.obj.length-1;i++){
					result=result+this.obj[i]+"\\n";
				}
				result=result+this.obj[this.obj.length-1];
				console.log('"'+result+'"');	
			} else{

				for(var i=0;i<range-1;i++){
					result=result+this.obj[i]+"\\n";
				}
				result=result+this.obj[range-1];
				console.log('"'+result+'"');	
			}
		}

	}

	clearHistory(){
		this.obj=[];
		console.log("true");
	}

}

myconsole = new MyConsole();

myconsole.log(123);
myconsole.log(true);
myconsole.log({name:'Ram'});
myconsole.history();
myconsole.history(1);
myconsole.history(2);
myconsole.clearHistory();
myconsole.history();

