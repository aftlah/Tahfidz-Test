fetch("https://equran.id/api/surat")
  .then((res) => res.json())
  .then((data) => {
    const list = data.reduce(
      (a, b, i) =>
        a +
        `<option class="font-base max-h-8 font-medium" value=${i + 1}><a>${
          i + 1
        }. ${b.nama_latin}</a></option>`,
      ""
    );
    document.querySelector("#select1").innerHTML = list;
    document.querySelector("#select2").innerHTML = list;
  });

async function mulai() {
  //Dapetin nilai dari inputan, sementara defaultnya Al fatihah 1-7
  let surat1 = document.getElementById("select1").value;
  let ayat1 = document.getElementById("ayat1").value || 1;
  let surat2 = document.getElementById("select2").value || 1;
  let ayat2 = document.getElementById("ayat2").value || 7;

  //Ngecek ayat pertama yang dimasukin ada di suratnya apa enggak
  let ayatSurat1 = (
    await (await fetch("https://equran.id/api/surat/" + surat1)).json()
  ).jumlah_ayat;
  if (ayat1 <= 0 || ayat1 > ayatSurat1) {
    return swal({
      title: "Ayat Tidak Ditemukan!",
    });
  }

  //Ngecek ayat kedua yang dimasukin ada di suratnya apa enggak
  let ayatSurat2 = (
    await (await fetch("https://equran.id/api/surat/" + surat2)).json()
  ).jumlah_ayat;
  if (ayat2 <= 0 || ayat2 > ayatSurat2) {
    return swal({
      title: "Ayat Tidak Ditemukan!",
    });
  }

  if (surat1 > surat2)
    return swal({
      title: "Surat Yang Lebih Awal Harus Ada Di Pertama",
    });

  //Pindah halaman
  location.href =
    location.href.replace("/index.html", "") +
    `/mulai.html?surat1=${surat1}&ayat1=${ayat1}&surat2=${surat2}&ayat2=${ayat2}`;
}
