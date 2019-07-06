var data_estado;
var geojson_coor;
var data;
var geojson_select;
var data_sector_chart;

function getData(dataset) {
  data_sector = [];
  switch (dataset) {
    case "dataset1":
    break;  
    case "dataset2":
        data = "static/js/comercio.json";
        geojson_select = "static/js/estados-de-mexico-comercio.geojson";
        data_sector = "Comercio";
        data_sector_chart = "Comercio"
    break;
    case "dataset3":
        data = "static/js/Manufactura.json";
        geojson_select = "static/js/estados-de-mexico-manufactura_red.geojson";
        data_sector = "Manufactura";
        data_sector_chart = "Manufacturas"
    break;
    case "dataset4":
        data = "static/js/Servicios_fin.json";
        geojson_select = "static/js/estados-de-mexico-servicios_fin.geojson";
        data_sector = "Servicios";
        data_sector_chart = "Servicios"
    break;
    case "dataset5":
      data = "static/js/otros.json";
      geojson_select = "static/js/estados-de-mexico-otros.geojson";
      data_sector = "Otros";
      data_sector_chart = "Resto"
    break;
  }
}

function initializingMap() // call this method before you initialize your map.
{
var container = L.DomUtil.get('map');
if(container != null){
container._leaflet_id = null;
}
document.getElementById('map').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
};

function getData_estados(dataset) {
  switch (dataset) {
   case "dataset_est_2":
    data_estado = "Aguascalientes";
    geojson_coor = [22.009333610459056, -102.3659992798087];
    break;  
    case "dataset_est_3":
    data_estado = "BajaCalifornia";
    geojson_coor = [30.548240873480694, -115.0844499346981];
    break; 
    case "dataset_est_4":
    data_estado = "BajaCaliforniaSur";
    geojson_coor = [25.928839704466824, -112.0531763525297];
    break; 
    case "dataset_est_5":
    data_estado = "Campeche";
    geojson_coor = [18.868679061086088, -90.43682565676336];
    break; 
    case "dataset_est_6":
    data_estado = "Chiapas";
    geojson_coor = [16.49924145295255, -92.46523639155258];
    break;
    case "dataset_est_7":
    data_estado = "Chihuahua";
    geojson_coor = [28.80296155013882, -106.44446753154791];
    break;
    case "dataset_est_8":
    data_estado = "CDMX";
    geojson_coor = [19.272601906402087, -99.12848299139922];
    break;
    case "dataset_est_9":
    data_estado = "Coahuila";
    geojson_coor = [27.30176812625037, -102.03874590266835];
    break;
    case "dataset_est_10":
    data_estado = "Colima";
    geojson_coor = [19.141675184495977, -103.92580759281428];
    break;
    case "dataset_est_11":
    data_estado = "Durango";
    geojson_coor = [24.933491138650076, -104.92073367201408];
    break;
    case "dataset_est_12":
    data_estado = "EstadoDeMexico";
    geojson_coor = [19.360231080473316, -99.63376551406064];
    break;
    case "dataset_est_13":
    data_estado = "Guanajuato";
    geojson_coor = [20.896358200943528, -101.02169506360875];
    break;
    case "dataset_est_14":
    data_estado = "Guerrero";
    geojson_coor = [17.666770717050568, -99.90155686468317];
    break;
    case "dataset_est_15":
    data_estado = "Hidalgo";
    geojson_coor = [20.46987060235711, -98.87456603615759];
    break;
    case "dataset_est_16":
    data_estado = "Jalisco";
    geojson_coor = [20.600074392264794, -103.61919929677504];
    break;
    case "dataset_est_17":
    data_estado = "Michoacan";
    geojson_coor = [19.20926406312469, -101.88049866266942];
    break;
    case "dataset_est_18":
    data_estado = "Morelos";
    geojson_coor = [18.758538810911613, -99.06334973714362];
    break;
    case "dataset_est_19":
    data_estado = "Nayarit";
    geojson_coor = [21.846385803549925, -104.91229277857454];
    break;
    case "dataset_est_20":
    data_estado = "NuevoLeon";
    geojson_coor = [25.578085484015578, -99.96025001417644];
    break;
    case "dataset_est_21":
    data_estado = "Oaxaca";
    geojson_coor = [16.958895390891755, -96.43184141727201];
    break;
    case "dataset_est_22":
    data_estado = "Puebla";
    geojson_coor = [19.014932050008635, -97.88183896111339];
    break;
    case "dataset_est_23":
    data_estado = "Queretaro";
    geojson_coor = [20.83864336100943, -99.85120607457536];
    break;
    case "dataset_est_24":
    data_estado = "QuintanaRoo";
    geojson_coor = [19.55594469609667, -88.25477854127803];
    break;
    case "dataset_est_25":
    data_estado = "SanLuisPotosi";
    geojson_coor = [22.615625254046428, -100.4403438230312];
    break;
    case "dataset_est_26":
    data_estado = "Sinaloa";
    geojson_coor = [25.01748597842857, -107.48367433614396];
    break;
    case "dataset_est_27":
    data_estado = "Sonora";
    geojson_coor = [29.706803207455213, -110.80578514007708];
    break;
    case "dataset_est_28":
    data_estado = "Tabasco";
    geojson_coor = [17.948801910998775, -92.57868268916071];
    break;
    case "dataset_est_29":
    data_estado = "Tamaulipas";
    geojson_coor = [24.286158953672093, -98.6176641357791];
    break;
    case "dataset_est_30":
    data_estado = "Tlaxcala";
    geojson_coor = [19.418362282252026, -98.15402078343021];
    break;
    case "dataset_est_31":
    data_estado = "Veracruz";
    geojson_coor = [19.373186237621795, -96.39869452166086];
    break;
    case "dataset_est_32":
    data_estado = "Yucatan";
    geojson_coor = [20.778313972263124, -88.93982396854457];
    break;
    case "dataset_est_33":
    data_estado = "Zacatecas";
    geojson_coor = [23.306611848842696, -102.70061173367993];
    break;
  }
}

$('#actionButton').on('click', function(event){
    
  myChart(data_estado,data_sector_chart)
  myChart2(data_estado,data_sector_chart)
  myChart3(data_estado,data_sector_chart)
  initializingMap();
  updatemap(data,geojson_select,geojson_coor,data_sector);

});