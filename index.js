/*1.array*/ 

function btn1Click() {
    var a = [];
    // var a = new Array();
    a[0] = txt11.value;
    a[1] = txt12.value;
    a[2] = txt13.value;
    a[3] = txt14.value;
    a[4] = txt15.value;
  
    lbl1.innerHTML = "";
    for (let i = 0; i < a.length; i++) {
      lbl1.innerHTML += a[i] + ",";
    }
  }


  /*2.sum*/ 
  function btn2Click() {
    var a = [];
    // var a = new Array();
    a[0] = txt21.value;
    a[1] = txt22.value;
    a[2] = txt23.value;
    a[3] = txt24.value;
    a[4] = txt25.value;
  
    lbl2.innerHTML = "";
    let sum=0;
    for (let i = 0; i < a.length; i++) {
      sum += parselet(a[i]);
      lbl2.innerHTML += a[i] + ",";
    }
    lbl2.innerHTML += "<br> array 5 values=" + parselet(sum);

  }

  /*3.max*/ 
  function btn3Click() {
   
    var a = [];
    // var a = new Array();
    a[0] = txt31.value;
    a[1] = txt32.value;
    a[2] = txt33.value;
    a[3] = txt34.value;
    a[4] = txt35.value;
  
    lbl3.innerHTML = "";
    let max = 0;
   
    for (let i = 0; i < a.length; i++)
    {
        if (a[i]>max)
        {
            max = parselet(a[i]);
        }

    }
    lbl3.innerHTML = "<br> the maximum value in array is:=" + max;

  }

  /*4.min*/ 
  function btn4Click() {
   
    var a = [];
    // var a = new Array();
    a[0] = txt41.value;
    a[1] = txt42.value;
    a[2] = txt43.value;
    a[3] = txt44.value;
    a[4] = txt45.value;
  
    lbl4.innerHTML = "";
    let min = a[0];
   
    for (let i = 0; i < a.length; i++)
    {
        if (a[i]<min)
        {
            min = parselet(a[i]);
        }

    }
    lbl4.innerHTML = "<br> the minimum value in array is:=" + min;

  }

   /*5.Accending*/ 

   function btn5Click() {
   
    var a = [];
    // var a = new Array();
    a[0] = txt51.value;
    a[1] = txt52.value;
    a[2] = txt53.value;
    a[3] = txt54.value;
    a[4] = txt55.value;
  
    lbl5.innerHTML = "";
    let temp = 0;
   
    for (let i = 0; i< a.length; i++) 
      {
            for (let j = i+1; j< a.length; j++)
            {
                if (a[i]>a[j])
                {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;                      
                }
            }			 
      }
        for (let i = 0; i < a.length; i++)
        {
          
            lbl5.innerHTML += a[i] + "&nbsp;";
        }
      
  }

  /*6.Descending*/ 

  function btn6Click() {
   
    var a = [];
    // var a = new Array();
    a[0] = txt61.value;
    a[1] = txt62.value;
    a[2] = txt63.value;
    a[3] = txt64.value;
    a[4] = txt65.value;
  
    lbl6.innerHTML = "";
    let temp = 0;
   
    for (let i = 0; i< a.length; i++) 
      {
            for (let j = i+1; j< a.length; j++)
            {
                if (a[i]<a[j])
                {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;                      
                }
            }			 
      }
        for (let i = 0; i < a.length; i++)
        {
          
            lbl6.innerHTML += a[i] + "&nbsp;";
        }
      
  }

  /*7.sec largest number*/ 

  function btn7Click() {
   
    debugger;
    var a = [];
    // var a = new Array();
    a[0] = txt71.value;
    a[1] = txt72.value;
    a[2] = txt73.value;
    a[3] = txt74.value;
    a[4] = txt75.value;
  
    lbl7.innerHTML = "";

    let max = a[0];
    let secondMax = let.MinValue;

    for (let i = 1; i < a.length; i++)
    {
        if (a[i]>max)
        {
            secondMax = max;
            max = a[i];
        }
        else if (a[i]>secondMax && a[i]!=max )
        {
            secondMax=a[i];              
        }
        
    }
    lbl7.innerHTML = "the second largest number in the arrayis:" + secondMax;
    
  }

  
  /*8. suppress zero array*/ 

  function btn8Click() {

    var a = [];
    // var a = new Array();
    a[0] = txt81.value;
    a[1] = txt82.value;
    a[2] = txt83.value;
    a[3] = txt84.value;
    a[4] = txt85.value;
    lbl8.innerHTML = " ";
    

    for (let i = 0; i < a.length; i++)
      {
          if (a[i]>0)
          {
              lbl8.innerHTML +=  a[i] + ",";
          }
      }


      for (let i = 0; i < a.length; i++)
      {
          if (a[i] == 0)
          {
              lbl8.innerHTML += a[i] + ",";
          }
      }

  }

   /*9. suppress negative array*/ 

   function btn9Click() {

    var a = [];
    // var a = new Array();
    a[0] = txt91.value;
    a[1] = txt92.value;
    a[2] = txt93.value;
    a[3] = txt94.value;
    a[4] = txt95.value;
    lbl8.innerHTML = " ";
    

    for (let i = 0; i < a.length; i++)
      {
          if (a[i]>0)
          {
              lbl9.innerHTML +=  a[i] + ",";
          }
      }


      for (let i = 0; i < a.length; i++)
      {
          if (a[i] <0)
          {
              lbl9.innerHTML += a[i] + ",";
          }
      }

  }

   /*10. suppress positive array*/ 

   function btn10Click() {

    var a = [];
    // var a = new Array();
    a[0] = txt101.value;
    a[1] = txt102.value;
    a[2] = txt103.value;
    a[3] = txt104.value;
    a[4] = txt105.value;
    lbl10.innerHTML = " ";
    

    for (let i = 0; i < a.length; i++)
      {
          if (a[i]<0)
          {
              lbl10.innerHTML +=  a[i] + ",";
          }
      }


      for (let i = 0; i < a.length; i++)
      {
          if (a[i] >0)
          {
              lbl10.innerHTML += a[i] + ",";
          }
      }

  }

   /*11. insert value for given values*/ 

   function btn11Click() {

    var a = [];
    // var a = new Array();
    a[0] = txt111.value;
    a[1] = txt112.value;
    a[2] = txt113.value;
    a[3] = txt114.value;
    a[4] = txt115.value;
    lbl11.innerHTML = " ";

        
    for (let i = a.length-1; i >txt116.value ; i--)
      {
          a[i] = a[i - 1];
      }

      a[txt116.value] = txt117.value;
     

      for (let i = 0; i <a.length; i++)
      {
        lbl11.innerHTML += "<br>" + a[i];
      }

  }













 

