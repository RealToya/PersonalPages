let B_switch = false;
document.getElementById("buttonswitch").addEventListener("click", ChangeState);

function ChangeState()
{
    let body = document.body;
    let button = document.getElementById("buttonswitch")
    let lampImage = document.querySelector(".Lamp img");

    if(!B_switch)
    {
        button.innerHTML = "Turned On"
        lampImage.src = "media/bulb-on.png";
        body.style.backgroundColor = "#fff8dc";
        B_switch = true;
    }
    else
    {
        button.innerHTML = "Turned Off"
        lampImage.src = "media/bulb-off.png"; 
        body.style.backgroundColor = "#2c2c2c";
        B_switch = false;
    }

}

