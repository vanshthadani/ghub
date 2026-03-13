function addRecommendation(){
    const input = document.getElementById("userRec");

    if(input.value.trim() === ""){
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    document.getElementById("recommendationList").appendChild(li);

    input.value = "";

    alert("Thank you for leaving a recommendation!");
}
