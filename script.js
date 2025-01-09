function insert_Row() {
    //Write your code here
  let doc=document.getElementById("sampleTable");
  doc.innerHTML=
        <tr>
		<td>New cell1</td> 
		<td>New cell2</td>
		</tr> 
  +doc.innerHTML;
  
}