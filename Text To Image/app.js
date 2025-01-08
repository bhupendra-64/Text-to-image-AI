const key="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";
let btn=document.querySelector("#btn");
let inputText=document.querySelector("#text");
let image=document.querySelector("#img");
let load=document.querySelector("#load");










async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${key}`
				
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputText.value}),
		}
	);
	const result = await response.blob();
	load.style.display="none";
	return result;
}
async function genrate(){
	load.style.display="block";
	image.style.display="block";
    query().then((response) => {
        const url=URL.createObjectURL(response);
        image.src=url;
        
    });

}
btn.addEventListener('click',()=>{
    genrate();
})
