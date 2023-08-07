    function tampilData() {
      
          // Menggunakan Multiconditional Statement

          var indeksNilai = "";
    if (nilai >= 85 && nilai <= 100) {
      indeksNilai = "A (4.00)";
    } else if (nilai >= 79) {
      indeksNilai = "A- (3.67)";
    } else if (nilai >= 74) {
      indeksNilai = "B+ (3.33)";
    } else if (nilai >= 69) {
      indeksNilai = "B (3.00)";
    } else if (nilai >= 64) {
      indeksNilai = "B- (2.67)";
    } else if (nilai >= 59) {
      indeksNilai = "C+ (2.33)";
    } else if (nilai >= 54) {
      indeksNilai = "C (2.00)";
    } else if (nilai >= 41) {
      indeksNilai = "D (1.00)";
    } else {
      indeksNilai = "E (0.00)";
    }  

           // Menggunakan Switch Style
           
    switch (day) {
        case "Sabtu":
        document.write("Liburrr");
        break;
        case "Minggu":
        document.write("Preiii");
        break;
        case "Senin":
        document.write("Nyantai");
        break;
        case "Selasa":
        document.write("Praktek!!!");
        break;
        case "Rabu":
        document.write("Pulang Sore");
        break;
        case "Kamis":
        document.write("Ngaji");
        break;
        case "Jumat":
        document.write("Jumatan");
        default:
        document.write("P Inpo...!");
    }
  }
        