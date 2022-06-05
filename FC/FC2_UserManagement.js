function login(){
    var a = document.getElementById("inputuser").value;
    var b = document.getElementById("inputpass").value;
    // Admin
    if (a == 'admin' && b == '123456')
    {
        document.getElementById('id01').style.display='none';
        fn_ScreenChange('Screen_2','Screen_3');
    }
    // User 1
    else if (a == 'user1' && b == '111111')
    {                  
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Screen_2").disabled = true;
        fn_ScreenChange('Screen_3','Screen_2');
        
    }
    // User 2
    else if (a == 'user2' && b == '222222')
    {                 
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Screen_3").disabled = true;
        fn_ScreenChange('Screen_2','Screen_3');
        
    } 
    else
    {
        window.location.href = '';
    }
}