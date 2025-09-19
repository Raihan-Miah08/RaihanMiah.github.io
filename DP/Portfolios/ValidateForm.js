function ValidateForm() 
{

    let username = document.forms["Form1"]["username"].value.trim();
    if (username === "") 
    {
        alert("Username must be filled out, Please try again");
        return false;
    }

    let email = document.forms["Form1"]["email"].value;
    let foundat = 0;
    let founddot = 0;

    for (let i = 0; i < email.length; i++) 
    {
        if (email[i] === '@') {
            foundat = i;
        }            
        if (email[i] === '.') {
            founddot = i;
        }
    }   

    if (foundat < 1 || founddot < foundat + 2 || founddot + 2 >= email.length) {
        alert("Not a valid e-mail address, Please try again");
        return false;
    }

    return true;
}
