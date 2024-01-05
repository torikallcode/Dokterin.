function generateCard() {
    const namaPemilik = document.getElementById('namaPemilik').value;
    const namaHewan = document.getElementById('namaHewan').value;
    const jenisHewan = document.getElementById('jenisHewan').value;
    const keluhan = document.getElementById('keluhan').value;
    const namaDokter = document.getElementById('namaDokter').value;
    // const card1 = document.getElementById("card")
  
    const cardContent = `
    <div id="card" class="w-full max-w-[570px] mx-auto rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px] mb-5">
    <h3 class="text-gray-900 pb-2 text-xl font-bold sm:text-2xl uppercase">KARTU PEMESANAN DOKTER HEWAN</h3>
    <span class="bg-primary-0 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
    <h2 class="font-utama text-center text-xl font-bold text-hitam-0 mb-5">Informasi Pemesan</h2>
    <div class="flex justify-center items-center flex-col">
      <p class="font-utama text-base text-hitam-0"><strong>Nama Pemilik:</strong> <span class="font-medium"> ${namaPemilik}</span></p>
      <p class="font-utama text-base text-hitam-0"><strong>Nama Hewan:</strong> <span class="font-medium">${namaHewan}</span></p>
      <p class="font-utama text-base text-hitam-0"><strong>Jenis Hewan:</strong> <span  class="font-medium">${jenisHewan}</span></p>
      <p class="font-utama text-base text-hitam-0"><strong>Keluhan:</strong> <span  class="font-medium">${keluhan}</span></p>
      <p class="font-utama text-base text-hitam-0"><strong>Nama Dokter:</strong> <span  class="font-medium">${namaDokter}</span></p>
    </div>
  </div>
      `;

      // <div>
      //   <h2>Informasi Pemesanan</h2>
      //   <p><strong>Nama Pemilik:</strong> ${namaPemilik}</p>
      //   <p><strong>Nama Hewan:</strong> ${namaHewan}</p>
      //   <p><strong>Jenis Hewan:</strong> ${jenisHewan}</p>
      //   <p><strong>Keluhan:</strong> ${keluhan}</p>
      //   <p><strong>Nama Dokter:</strong> ${namaDokter}</p>
      // </div>
  
    document.getElementById('cardContainer').innerHTML = cardContent;
  
    // Generate PDF
    const pdfButton = document.createElement('button');
    pdfButton.innerText = 'Unduh PDF';
    pdfButton.classList.add(
      'px-4',
      'py-2',
      'text-white',
      'bg-primary-0',
      'rounded-lg',
      'cursor-pointer',
      'font-semibold',
      'absolute',
      'right-0',
      'buttom-0'
    )
    pdfButton.addEventListener('click', () => {
      const card = document.getElementById('card');
      html2pdf()
        .from(card)
        .save();
    });
  
    document.getElementById('cardContainer').appendChild(pdfButton);
  }

  const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("hamburger-active")
    navMenu.classList.toggle("hidden")

})

//Navbar fixed
window.onscroll = () => {
    const header = document.querySelector("header")
    const fixNav = header.offsetTop;

    if ( window.pageYOffset > fixNav){
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
}