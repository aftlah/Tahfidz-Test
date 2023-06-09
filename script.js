
fetch('https://equran.id/api/surat').then(res=>res.json()).then(data=>{
  const list=data.reduce((a,b,i)=>a+`<li value=${i+1}><a>${i+1}. ${b.nama_latin}</a></li>`, '');
  document.querySelector('#surat1 ul').innerHTML=list;
  document.querySelector('#surat2 ul').innerHTML=list;
 })