function validateform()
{
    
    var first_name=myform.first_name.value;
    var last_name=myform.last_name.value;
    var email=myform.email.value;
    var password=myform.password.value;
    var confirm_password=myform.confirm_password.value;
    var mobile_number=myform.mobile_number.value;
    var ADDRESS=myform.ADDRESS.value;
    var COUNTRY=myform.COUNTRY.value;
    var letters = /^[a-zA-Z]+$/;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = true;

 if (first_name=="")
    {  
     document.getElementById("first_name_error").innerHTML="fill this void";
    flag = false;
}
    
    else
    {
      if(!first_name.match(letters))
      {
        document.getElementById("first_name_error").innerHTML =" ** Only alphabets are allowed!!";
        flag = false;  
      }
    }

    
 if (last_name=="")
 {  
  document.getElementById("last_name_error").innerHTML="fill this void";
  flag = false;
     
 }
 else
 {
   if(!last_name.match(letters))
   {
     document.getElementById("last_name_error").innerHTML =" ** Only alphabets are allowed!!";
     flag = false;
   }
 }

    if(mobile_number=="")  
    {
     document.getElementById("mn_error").innerHTML="fill this void";
     flag = false;  
    }
    else
    {
        if(isNaN(mobile_number))
        {
            document.getElementById("mn_error").innerHTML="only digits";
            return false;    
        }
        else
        {
            if(mobile_number!=10)
            {
                document.getElementById("mn_error").innerHTML="Enter 10 Digits";
                 return false; 
            }
        }
    }
    if (ADDRESS=="")
    {  
     document.getElementById("address_error").innerHTML="fill this void";
     flag = false;
    }
    else
    {
      if(!ADDRESS.match(letters))
      {
        document.getElementById("address_error").innerHTML =" ** Only alphabets are allowed!!";
        flag = false;
      }
    }
    if (COUNTRY=="")
    {  
     document.getElementById("country_error").innerHTML="fill this void";
     flag = false;
    }
    else
    {
      if(!COUNTRY.match(letters))
      {
        document.getElementById("country_error").innerHTML =" ** Only alphabets are allowed!!";
         flag = false;
      }
    }
if (email=="")
{
    document.getElementById("email_error").innerHTML="fill this void";
    flag = false;
}
else
{
    if(!email.match(mail))
    {
        document.getElementById("email_error").innerHTML="invalid email address";
        flag = false;
    }
}

if(password == "")
{
  document.getElementById("password_error").innerHTML =" ** Please fill the password field!!";
  flag = false;
}
else
{
      if(confirm_password == "")
        {
          document.getElementById("cpassword_error").innerHTML =" ** Please fill the confirm password field!!";
          flag = false;
        }
      else
      {
        if(password!=confirm_password)
        {
          document.getElementById("cpassword_error").innerHTML =" ** Passwords does not match. Please re-enter password!!";
          flag = false;        }
      }
    } 
    return flag;
}   

function finame()
{
  var first_name=myform.first_name.value;
  var letters = /^[a-zA-Z]+$/;

  if (first_name=="")
  {  
    document.getElementById("first_name_error").innerHTML="fill this void";
    flag = false;;
  }
  else
  {
    if(!first_name.match(letters))
    {
      document.getElementById("first_name_error").innerHTML =" ** Only alphabets are allowed!!";
      flag = false;
    }
  }
  if (flag==true)
  {
    document.getElementById("first_name_error").innerHTML ="";
  }
}