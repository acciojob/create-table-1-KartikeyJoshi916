function insert_Row() {
    //Write your code here
  let doc=document.getElementById("sampleTable");
  doc.innerHTML=
        `<tr>
		<td>New Cell1</td> 
		<td>New Cell2</td>
		</tr>`
  +doc.innerHTML;
  
}