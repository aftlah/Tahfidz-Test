
fetch('https://equran.id/api/surat').then(res=>res.json()).then(data=>{
  const list=data.reduce((a,b,i)=>a+`<li value=${i+1}><a>${i+1}. ${b.nama_latin}</a></li>`, '');
  document.querySelector('#surat1 ul').innerHTML=list;
  document.querySelector('#surat2 ul').innerHTML=list;
 })

async function mulai(){
  //Dapetin nilai dari inputan, sementara defaultnya Al fatihah 1-7
  const surat1=document.getElementById('surat1').value||1;
  const ayat1=document.getElementById('ayat1').value||1;
  const surat2=document.getElementById('surat2').value||1;
  const ayat2=document.getElementById('ayat2').value||7;
  
  //Ngecek ayat pertama yang dimasukin ada di suratnya apa enggak
  let res=await fetch('https://equran.id/api/surat/'+surat1);
  const ayatSurat1=(await res.json()) .jumlah_ayat;
  console.log(ayatSurat1);
  if(ayat1<=0 || ayat1>ayatSurat1){
    return alert('Ayat tidak ditemukan');
  }
 
 //Ngecek ayat kedua yang dimasukin ada di suratnya apa enggak
  res=await fetch('https://equran.id/api/surat/'+surat2);
  const ayatSurat2=(await res.json()) .jumlah_ayat;
  if(ayat2<=0 || ayat2>ayatSurat2){
    return alert('Ayat tidak ditemukan');
  }
  
  //Pindah halaman
  location.href=`/mulai.html?surat1=${surat1}&ayat1=${ayat1}&surat2=${surat2}&ayat2=${ayat2}`;
}