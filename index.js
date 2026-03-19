async function fetchdata(){
    try{
        const name=document.getElementById("name").value.toLowerCase()
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if(!response.ok){
            throw new Error(`Could not fetch response`)
        }
        const data=await response.json()
        const spr=data.sprites.front_default
        const image=document.getElementById(`image`)
        image.src=spr
        image.style.display=`block`
    }
    catch(error){
        console.error(error)
         alert("Pokémon not found! Please check the name."); 
    }
}