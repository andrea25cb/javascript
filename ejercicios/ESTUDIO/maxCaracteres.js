function deleteRow(row) {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById('POITable').deleteRow(i);
}


function insRow() {
  console.log('hi');
  var x = document.getElementById('POITable');
  var new_row = x.rows[1].cloneNode(true);
  var len = x.rows.length;
  new_row.cells[0].innerHTML = len;

  var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
  inp1.id += len;
  inp1.value = '';
  var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
  inp2.id += len;
  inp2.value = '';
  x.appendChild(new_row);
}
<div id="POItablediv">
  <input type="button" id="addPOIbutton" value="Add POIs" /><br/><br/>
  <table id="POITable" border="1">
    <tr>
      <td>POI</td>
      <td>Latitude</td>
      <td>Longitude</td>
      <td>Delete?</td>
      <td>Add Rows?</td>
    </tr>
    <tr>
      <td>1</td>
      <td><input size=25 type="text" id="latbox" /></td>
      <td><input size=25 type="text" id="lngbox" readonly=true/></td>
      <td><input type="button" id="delPOIbutton" value="Delete" onclick="deleteRow(this)" /></td>
      <td><input type="button" id="addmorePOIbutton" value="Add More POIs" onclick="insRow()" /></td>
    </tr>
  </table>