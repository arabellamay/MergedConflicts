

var guess = 1;

var a = Math.floor(Math.random() * 10 + 1);


document.getElementById("guessSubmit").onclick = function(){

var b = document.getElementById("guessForm").value;

if(b == a)
{
  if(guess > 1) {
    secret2 = "Yes! You guessed it! The number was " + a + ". It only took you " + guess + " tries.";
    document.getElementById("secret").innerHTML = secret2;

  }
  else {
    secret2 = "Yes! You guessed it! The number was " + a + ". It only took you " + guess + " try.";
    document.getElementById("secret").innerHTML = secret2;
  }
}

else if(b > a && b <= 10 && b >= 1)
{
    guess++;
    alert("No. Lower...");
}

else if(a > b && b <= 10 && b >= 1)
{
    guess++;
    alert("No. Higher... ")
}

else
{
  guess++;
  alert("Please enter a valid number between 1 and 10...")
}
}
