function cal() 
{

    let word = document.getElementById("text").value;
    let num = 0;
    let letter = "l";
    let letter2 = "L";
    let a = word.length;
    for(let i = 0; i < a; i++) 
    {
        if (word[i] == letter || word[i] == letter2 ) 
        {
            num++;
        }
    }
    document.getElementById("x").innerHTML = num;
    document.getElementById("y").innerHTML = word;
    
}