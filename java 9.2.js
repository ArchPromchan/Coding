function cal() 
{

    let word = document.getElementById("text").value;
    let num = 0;
    let letter = "a";
    let letter2 = "e";
    let letter3 = "i";
    let letter4 = "o";
    let letter5 = "u";
    let letter6 = "y";
    let a = word.length;
    for(let i = 0; i < a; i++) 
    {
        if (word[i] == letter || word[i] == letter2 || word[i] == letter3 || word[i] == letter4 || word[i] == letter5 || word[i] == letter6 ) 
        {
            num++;
        }
    }
    document.getElementById("x").innerHTML = num;
    document.getElementById("y").innerHTML = word;
    
}