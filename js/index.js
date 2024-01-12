//Bai tap 1
document.getElementById("btnBaiTap1").onclick = function () {
    var diemChuan = Number(document.getElementById("txtDiemChuan").value);
    var diem1 = Number(document.getElementById("txtDiem1").value);
    var diem2 = Number(document.getElementById("txtDiem2").value);
    var diem3 = Number(document.getElementById("txtDiem3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemTong = diem1 + diem2 + diem3;
    switch (khuVuc) {
        case "X": {
            diemTong = tinhDiemTong(diemTong, 0);
            break;
        }
        case "A": {
            diemTong = tinhDiemTong(diemTong, 2);
            break;
        }
        case "B": {
            diemTong = tinhDiemTong(diemTong, 1);
            break;
        }
        case "C": {
            diemTong = tinhDiemTong(diemTong, 0.5);
            break;
        }

        default: {
            alert("chưa chọn khu vực");
            return;
        }
    }
    switch (doiTuong) {
        case "0": {
            diemTong = tinhDiemTong(diemTong, 0);
            break;
        }
        case "1": {
            diemTong = tinhDiemTong(diemTong, 2.5);
            break;
        }
        case "2": {
            diemTong = tinhDiemTong(diemTong, 1.5);
            break;
        }
        case "3": {
            diemTong = tinhDiemTong(diemTong, 1);
            break;
        }

        default: {
            alert("chưa chọn đối tượng");
            return;
        }
    }
    var ketQua = diemTong > diemChuan ? "Đậu" : "Rớt";
    document.getElementById("result1").innerHTML = "👉 Điểm sinh viên: " + diemTong + " => Sinh viên " + ketQua;
}

function tinhDiemTong(diemTong, diemUuTien) {
    return diemTong + diemUuTien;
}

// bai tap 2
document.getElementById("btnBaiTap2").onclick = function () {
    var ten = document.getElementById("txtTen").value;
    var soDien = Number(document.getElementById("txtKw").value);
    var tienDien = 0;
    if (soDien > 350) {
        tienDien += tinhTienDien(soDien - 350, 1300);
        soDien = 350;
    }
    if (soDien > 200) {
        tienDien += tinhTienDien(soDien - 200, 1100);
        soDien = 200;
    }
    if (soDien > 100) {
        tienDien += tinhTienDien(soDien - 100, 850);
        soDien = 100;
    }
    if (soDien > 50) {
        tienDien += tinhTienDien(soDien - 50, 650);
        soDien = 50;
    }
    if (soDien > 0) {
        tienDien += tinhTienDien(soDien, 500);
    }

    document.getElementById("result2").innerHTML = "👉 Ông/Bà: " + ten + " > " + tienDien.toLocaleString() + " vnd";
}

function tinhTienDien(soDien, tienDien) {
    return soDien * tienDien;
}

//bai tap 3
document.getElementById("btnBaiTap3").onclick = function () {
    var hoTen = document.getElementById("txtHoTen").value;
    var thuNhapNam = Number(document.getElementById("txtThuNhap").value);
    var ngPhuThuoc = Number(document.getElementById("txtNgPhuThuoc").value);
    var thueMienTru = 4 + (ngPhuThuoc * 1.6);

    var thuNhapSauTru = thuNhapNam - thueMienTru;
    var thuePhaiChiu = 0;
    var check = 0;
    if (thuNhapSauTru < 60) {
        check = 1;
    }
    else {
        if (thuNhapSauTru > 960) {
            thuePhaiChiu += tinhThue(thuNhapSauTru - 960, 35);
            thuNhapSauTru = 960;
        }
        if (thuNhapSauTru > 624) {
            thuePhaiChiu += tinhThue(thuNhapSauTru - 624, 30);
            thuNhapSauTru = 624;
        }
        if (thuNhapSauTru > 384) {
            thuePhaiChiu += tinhThue(thuNhapSauTru - 384, 25);
            thuNhapSauTru = 384;
        }
        if (thuNhapSauTru > 210) {
            thuePhaiChiu += tinhThue(thuNhapSauTru - 210, 20);
            thuNhapSauTru = 210;
        }
        if (thuNhapSauTru > 120) {
            thuePhaiChiu += tinhThue(thuNhapSauTru - 120, 15);
            thuNhapSauTru = 120;
        }
        if (thuNhapSauTru > 60) {
            thuePhaiChiu += tinhThue(thuNhapSauTru - 60, 10);
            thuNhapSauTru = 60;
        }
        thuePhaiChiu += tinhThue(60, 5);
    }
    if (check == 1) {
        document.getElementById("result3").innerHTML = "👉 Ông/Bà " + hoTen + " miễn thuế";
    } else {
        document.getElementById("result3").innerHTML = "👉 Ông/Bà " + hoTen + " : " + thuePhaiChiu.toFixed(2) + " triệu đồng";
    }
}

function tinhThue(thuNhap, phanTram) {
    return thuNhap * phanTram / 100;
}

//Bai tap 4
document.getElementById("loaiKH").onchange = function () {
    var loaiKH = document.getElementById("loaiKH").value;
    switch (loaiKH) {
        case "1": {
            document.getElementById("txtSoKetNoi").setAttribute("disabled", "");
            break;
        }
        default: {
            document.getElementById("txtSoKetNoi").removeAttribute("disabled");
            break;
        }
    }
}
document.getElementById("btnBaiTap4").onclick = function () {
    var maKH = document.getElementById("txtMaKH").value;
    var soKetNoi = document.getElementById("txtSoKetNoi").value;
    var kenhCaoCap = Number(document.getElementById("txtKenhCaoCap").value);
    var loaiKH = document.getElementById("loaiKH").value;
    var tienCap = 0;
    switch (loaiKH) {
        case "1": {
            tienCap = tinhTienCap(4.5, 20.5, kenhCaoCap, 7.5);
            break;
        }
        case "2": {
            tienCap = tinhTienCap(15, 75, kenhCaoCap, 50);
            if (Number(soKetNoi) > 10) {
                tienCap += (Number(soKetNoi) - 10) * 5;
            }
            break;
        }
        default: {
            alert("Chưa chọn loại KH");
            return;
        }
    }
    document.getElementById("result4").innerHTML = "👉 KH: " + maKH + " phải trả " + tienCap.toLocaleString() + "$";
}

function tinhTienCap(phiXuLy, phiDichVuCoBan, soKenhCaoCap, giaKenhCaoCap) {
    return phiXuLy + phiDichVuCoBan + soKenhCaoCap * giaKenhCaoCap;
}