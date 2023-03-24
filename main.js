let arr=["ram","cholan","max","classy","jessi"];
arr.forEach(function(e){
	let cnt=document.querySelector(".condainer");
	let clicked=document.createElement("button");
	
	clicked.innerHTML=e
	cnt.appendChild(clicked);
	clicked.style.padding="12px";
	clicked.style.margin="12px";
});