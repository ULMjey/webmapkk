var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "ชนะ",
                interactive: false,
    title: 'ชนะ<br />\
    <img src="styles/legend/_1_0.png" /> 22.8 - 27.3<br />\
    <img src="styles/legend/_1_1.png" /> 27.3 - 29.6<br />\
    <img src="styles/legend/_1_2.png" /> 29.6 - 32.7<br />\
    <img src="styles/legend/_1_3.png" /> 32.7 - 36.7<br />\
    <img src="styles/legend/_1_4.png" /> 36.7 - 51.5<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "แพ้",
                interactive: false,
    title: 'แพ้<br />\
    <img src="styles/legend/_2_0.png" /> 42 - 52.5<br />\
    <img src="styles/legend/_2_1.png" /> 52.5 - 55.5<br />\
    <img src="styles/legend/_2_2.png" /> 55.5 - 59.6<br />\
    <img src="styles/legend/_2_3.png" /> 59.6 - 62.6<br />\
    <img src="styles/legend/_2_4.png" /> 62.6 - 70.4<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'เขต': 'เขต', 'อำเ': 'อำเ', 'ตำบ': 'ตำบ', 'หมู': 'หมู', 'หน่': 'หน่', 'สถา': 'สถา', 'ผู้': 'ผู้', 'ผู_1': 'ผู_1', 'ก้า': 'ก้า', 'เพื': 'เพื', 'รวม': 'รวม', 'พลั': 'พลั', 'ประ': 'ประ', 'ภูม': 'ภูม', 'ไทย': 'ไทย', 'อื่': 'อื่', 'P_win': 'P_win', 'kk_win': 'kk_win', 'lat': 'lat', 'lon': 'lon', 'SUM_or': 'SUM_or', 'KK_per': 'KK_per', });
lyr__2.set('fieldAliases', {'เขต': 'เขต', 'อำเ': 'อำเ', 'ตำบ': 'ตำบ', 'หมู': 'หมู', 'หน่': 'หน่', 'สถา': 'สถา', 'ผู้': 'ผู้', 'ผู_1': 'ผู_1', 'ก้า': 'ก้า', 'เพื': 'เพื', 'รวม': 'รวม', 'พลั': 'พลั', 'ประ': 'ประ', 'ภูม': 'ภูม', 'ไทย': 'ไทย', 'อื่': 'อื่', 'P_win': 'P_win', 'kk_win': 'kk_win', 'lat': 'lat', 'lon': 'lon', 'SUM_or': 'SUM_or', 'Or_per': 'Or_per', });
lyr__1.set('fieldImages', {'เขต': 'TextEdit', 'อำเ': 'TextEdit', 'ตำบ': 'TextEdit', 'หมู': 'TextEdit', 'หน่': 'TextEdit', 'สถา': 'TextEdit', 'ผู้': 'TextEdit', 'ผู_1': 'TextEdit', 'ก้า': 'TextEdit', 'เพื': 'TextEdit', 'รวม': 'TextEdit', 'พลั': 'TextEdit', 'ประ': 'TextEdit', 'ภูม': 'TextEdit', 'ไทย': 'TextEdit', 'อื่': 'TextEdit', 'P_win': 'TextEdit', 'kk_win': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'SUM_or': 'TextEdit', 'KK_per': 'TextEdit', });
lyr__2.set('fieldImages', {'เขต': 'TextEdit', 'อำเ': 'TextEdit', 'ตำบ': 'TextEdit', 'หมู': 'TextEdit', 'หน่': 'TextEdit', 'สถา': 'TextEdit', 'ผู้': 'TextEdit', 'ผู_1': 'TextEdit', 'ก้า': 'TextEdit', 'เพื': 'TextEdit', 'รวม': 'TextEdit', 'พลั': 'TextEdit', 'ประ': 'TextEdit', 'ภูม': 'TextEdit', 'ไทย': 'TextEdit', 'อื่': 'TextEdit', 'P_win': 'TextEdit', 'kk_win': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'SUM_or': 'TextEdit', 'Or_per': 'TextEdit', });
lyr__1.set('fieldLabels', {'เขต': 'no label', 'อำเ': 'no label', 'ตำบ': 'no label', 'หมู': 'no label', 'หน่': 'no label', 'สถา': 'no label', 'ผู้': 'no label', 'ผู_1': 'no label', 'ก้า': 'no label', 'เพื': 'no label', 'รวม': 'no label', 'พลั': 'no label', 'ประ': 'no label', 'ภูม': 'no label', 'ไทย': 'no label', 'อื่': 'no label', 'P_win': 'no label', 'kk_win': 'no label', 'lat': 'no label', 'lon': 'no label', 'SUM_or': 'no label', 'KK_per': 'header label - always visible', });
lyr__2.set('fieldLabels', {'เขต': 'no label', 'อำเ': 'no label', 'ตำบ': 'no label', 'หมู': 'no label', 'หน่': 'no label', 'สถา': 'no label', 'ผู้': 'no label', 'ผู_1': 'no label', 'ก้า': 'no label', 'เพื': 'no label', 'รวม': 'no label', 'พลั': 'no label', 'ประ': 'no label', 'ภูม': 'no label', 'ไทย': 'no label', 'อื่': 'no label', 'P_win': 'no label', 'kk_win': 'no label', 'lat': 'no label', 'lon': 'no label', 'SUM_or': 'no label', 'Or_per': 'header label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});