
$(document).ready(function(){
  $(".me").hide();
  
  $("#kabulbtn").click(function (e) { 
    let Name;
    Name = $("#isiminput").val();
    console.log(Name);
    $("#namebg").hide();
    $(".me").show();
    var bipVoice = new Audio('./src/audio/discord_notification.mp3')
  
    let mesaj_gonder = (User,mesaj,time) => {
      
      
      
      setTimeout(function(){
        bipVoice.play();
        
        $(".userslist").append('<li><input type="image" src="'+User.pp+'" width="50px" id="'+User.id+'"></li>  ')
        
        $(".userslist").children("li").children("input").click(function (e) { 
        
        if ($(this).attr("id") == "1"){
          
          
          $(".messageprofile").find(".mesaage").children().text(mesaj);
        }
        
        
        });
      },time)
      
      
      
      
    }
    
    
    mesaj_gonder(user[1],"adam ol222",2000)
    mesaj_gonder(user[2],"hihihha",3000)
      
  });
  
});

