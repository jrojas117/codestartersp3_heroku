//Función de sobrevivencia
function myChart(estado, sector){

    var url = "/"+estado+"/Sobrevivientes/"+sector;
    d3.json(url, function(response) {

    var Sobrevivientes = response.map(function(element) {
    return element.Sobrevivientes;
    });
        var perc_prob = Sobrevivientes.map(e => (e * 100).toFixed(2) + '%');
        
        var Edad = response.map(function(element) {
        return element.Edad;
        });
        
        var ctx= document.getElementById('myChart').getContext('2d');

        Chart.defaults.global.defaultFontFamily = 'Montserrat';
        Chart.defaults.global.defaultFontSize = 10;
        Chart.defaults.global.defaultFontColor = '#000';
        
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "rgba(255, 51, 51, 0.6)");
        gradientStroke.addColorStop(0.02, "rgba(255, 255, 0, 0.6)");
        gradientStroke.addColorStop(1, "rgba(102, 204, 0, 0.6)");

        var lifeChart= new Chart(ctx, {
            type: 'bar' , // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data: {
                labels: Edad,
                datasets: [{
                    label: 'Surviving companies',
                    data: Sobrevivientes,             
                    backgroundColor: gradientStroke,
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#000'
                }]

            }, 
            options: {
                title:{
                display:true,
                text:'Numero de empresas sobrevivientes por edad',
                fontSize:25
            },
            legend:{
                display:false,
                position:'right',
                labels:{
                fontColor:'#000'
                }
            },
            layout:{
                padding:{
                left:25,
                right:0,
                bottom:0,
                top:0
                }
            },
            tooltips:{
                enabled:true
            }
            }
        
        });

        });


}
//Función de probabilidad de supervivencia
function myChart2(estado, sector){
  
    var url = "/"+estado+"/Probabilidad_Supervivencia/"+sector;
    d3.json(url, function(response) {

          var Probabilidad_Supervivencia = response.map(function(element) {
          return element.Probabilidad_Supervivencia;
          });
          var perc_prob = Probabilidad_Supervivencia.map(e => (e * 100).toFixed(2) + '%');

          var Edad = response.map(function(element) {
          return element.Edad;
          });

          var ctx= document.getElementById('myChart2').getContext('2d');

          Chart.defaults.global.defaultFontFamily = 'Montserrat';
          Chart.defaults.global.defaultFontSize = 10;
          Chart.defaults.global.defaultFontColor = '#000';

          var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
          gradientStroke.addColorStop(0, "rgba(255, 51, 51, 0.6)");
          gradientStroke.addColorStop(0.000000001, "rgba(255, 255, 0, 0.6)");
          gradientStroke.addColorStop(1, "rgba(102, 204, 0, 0.6)");

          var lifeChart= new Chart(ctx, {
              type: 'polarArea' , // bar, horizontalBar, pie, line, doughnut, radar, polarArea
              data: {
                  labels: Edad,
                  datasets: [{
                      label: 'Surviving companies',
                      data: Probabilidad_Supervivencia,
                      backgroundColor: ["rgba(102, 204, 0, 0.6)", "rgba(102, 204, 0, 0.6)", "rgba(102, 204, 0, 0.6)", "rgba(102, 204, 0, 0.6)", "rgba(102, 204, 0, 0.6)", "rgba(102, 204, 0, 0.6)","rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" ,"rgba(255, 255, 0, 0.6)" , "rgba(255, 255, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(255, 51, 51, 0.6)", "rgba(255, 51, 51, 0.6)", "rgba(255, 51, 51, 0.6)", "rgba(255, 51, 51, 0.6)", "rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)","rgba(255, 51, 51, 0.6)", "rgba(255, 51, 51, 0.6)"],
                      borderWidth: 1,
                      borderColor: '#777',
                      hoverBorderWidth: 3,
                      hoverBorderColor: '#000'
                  }]

              },
              options: {
                  title:{
                display:true,
                text:'Probabilidad de sobreviviencia de empresas dependiendo edad',
                fontSize:25
              },
              legend:{
                display:false,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:0,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }

          });

        });
    
}
//Función de esperanza de vida
function myChart3(estado, sector){
    
    var url = "/"+estado+"/Esperanza_de_vida/"+sector;
    d3.json(url, function(response) {

        var Esperanza_de_vida = response.map(function(element) {
        return element.Esperanza_de_vida;
        });
        var perc_prob = Esperanza_de_vida.map(e => (e * 100).toFixed(2) + '%');

        var Edad = response.map(function(element) {
        return element.Edad;
        });

        var ctx= document.getElementById('myChart3').getContext('2d');

        Chart.defaults.global.defaultFontFamily = 'Montserrat';
        Chart.defaults.global.defaultFontSize = 10;
        Chart.defaults.global.defaultFontColor = '#000';

        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "rgba(102, 204, 0, 0.6)");
        gradientStroke.addColorStop(0.5, "rgba(255, 255, 0, 0.6)");
        gradientStroke.addColorStop(1, "rgba(255, 51, 51, 0.6)");

        var lifeChart= new Chart(ctx, {
            type: 'line' , // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data: {
                labels: Edad,
                datasets: [{
                    label: 'Years',
                    data: Esperanza_de_vida,
                    backgroundColor: gradientStroke ,
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#000'
                }]

            },
            options: {
                title:{
            display:true,
            text:'Expectativa de vida adicional dependiendo la edad',
            fontSize:25
            },
            legend:{
            display:false,
            position:'right',
            labels:{
                fontColor:'#000'
            }
            },
            layout:{
            padding:{
                left:0,
                right:0,
                bottom:0,
                top:0
            }
            },
            tooltips:{
            enabled:true
            }
        }

        });

    });
                        
}