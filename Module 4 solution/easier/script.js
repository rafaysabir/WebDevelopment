
(function()
{
      var name=["Yaakov","Umar","Json","John","Laura","John", "Jane", "Jack", "Jill", "Jim", "Jerry", "Alex"];
      for(var i=0; i<name.length; i++)
      {
            var FirstLetter=name[i].charAt(0).toLowerCase();
            if(FirstLetter==='j'){
                 byespeaker.speak(name[i]);
            }
            else{
                  helloSpeaker.speak(name[i]);
            }
      }
})
();

