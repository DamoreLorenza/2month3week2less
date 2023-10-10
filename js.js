const inputField= document.getElementById("input")
const saveButton= document.getElementById("save")
const resetButton= document.getElementById("reset")
const paragrafo=document.getElementsByTagName("p")[0]




const storageKey= "name-memory"

const save= function(){

    const content = inputField.value
    localStorage.setItem(storageKey, content)
    alert('saved')
    const insert= localStorage.getItem(storageKey)
    paragrafo.innerHTML= insert


}
saveButton.addEventListener("click", save)

const reset= function(){

const memorizzato= localStorage.getItem(storageKey)

if(memorizzato){
localStorage.removeItem(storageKey)
}
else{window.confirm("non sono presenti dati da eliminare")}

}
resetButton.addEventListener("click", reset)