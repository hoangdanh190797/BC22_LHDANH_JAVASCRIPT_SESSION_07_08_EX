//Đưa mảng lên đầu nó mới chạy được nhen, ngồi sáng giờ:
var mang__A = [];
/*-----------------------------------------------------------------------------------*/ 
//Đưa giá trị vào mảng trước, bớt ôm đồm nhiều việc:
document.getElementById("btnThemgiatri").onclick = function () {
    var giaTriduocThem = +document.getElementById("so__Nguyen__duoc_Nhap").value;
    mang__A.push(giaTriduocThem);

    var giaTriduong = so__Duong__trong__Mang(mang__A);
    var giaTriam = so__Am__trong__Mang(mang__A);

    //console.log(mang__A);

    document.getElementById("footer__phanTutrongMang").innerHTML = "Phần tử có trong mảng là: " + mang__A;
    document.getElementById("footer__soDuong").innerHTML = "Các phần từ Dương có trong mảng là: " + giaTriduong;
    document.getElementById("footer__soAm").innerHTML = "Các phần từ Dương có trong mảng là: " + giaTriam;
}
//Xử lý thì dưới này:
/*----------------------------------------------------------------------*/ 
                        //Question 01:
/*----------------------------------------------------------------------*/ 
document.getElementById("btn__Question__01").onclick = function () {
    var so__Duong = so__Duong__trong__Mang(mang__A);
    var tinh__Tong__soDuong = tinh__Tong__so__Duong(so__Duong);
    document.getElementById("footer__Question__01").innerHTML = "Tổng các số Dương có trong mảng bằng: " + tinh__Tong__soDuong;
}
/*----------------------------------------------------------------------*/ 
function tinh__Tong__so__Duong(a){
    var tong__Duong = 0;
    for(var i = 0; i < a.length; i++)
    {
        tong__Duong += a[i];
    }
    return tong__Duong;
};
/*----------------------------------------------------------------------*/ 
function so__Duong__trong__Mang(a) {
    var mang__Duong = [];
    for(var i = 0; i < a.length; i++)
    {
        if(a[i] > 0)
        {
            mang__Duong.push(a[i]);
        }
    }
    return mang__Duong;
}
/*----------------------------------------------------------------------*/ 
function so__Am__trong__Mang(a) {
    var mang__Am = [];
    for(var i = 0; i < a.length; i++)
    {
        if(a[i] < 0)
        {
            mang__Am.push(a[i]);
        }
    }
    return mang__Am;
}
/*----------------------------------------------------------------------*/ 
                        //Question 02:
/*----------------------------------------------------------------------*/
document.getElementById("btn__Question__02").onclick = function () {
    var soLuongsoDuong = dem__So__duong(mang__A);
    document.getElementById("footer__Question__02").innerHTML = "Số lượng số Dương có trong mảng là " + soLuongsoDuong;
} 
/*----------------------------------------------------------------------*/ 
function dem__So__duong(a){
    var count__So__duong = 0;
    for(var i = 0; i < a.length; i++)
    {
        if(a[i] > 0)
        {
            count__So__duong++;
        }
    }
    return count__So__duong;
}
/*----------------------------------------------------------------------*/
                        //Question 03:
/*----------------------------------------------------------------------*/ 
document.getElementById("btn__Question__03").onclick = function () {
    var so_Nho_nhat = so__Nho__nhat(mang__A);
    document.getElementById("footer__Question__03").innerHTML = "Số nhỏ nhất có giá trị là: " + so_Nho_nhat;
}
/*----------------------------------------------------------------------*/ 
function so__Nho__nhat(a) {
    var f0 = a[0];
    for(var i = 1; i < a.length; i++)
    {
        if(f0 > a[i])
        {
            f0 = a[i];
        }
    }
    return f0;
}
/*----------------------------------------------------------------------*/
                        //Question 04:
/*----------------------------------------------------------------------*/ 
document.getElementById("btn__Question__04").onclick = function () {
    var so_Duong_nho_Nhat = so__Duong__nho__Nhat(mang__A);
    document.getElementById("footer__Question__04").innerHTML = "Số Dương nhỏ nhất có giá trị là: " + so_Duong_nho_Nhat;
}
/*----------------------------------------------------------------------*/ 
function so__Duong__nho__Nhat(a) {
    var b = so__Duong__trong__Mang(a);
    var f0 = b[0];
    for(var i = 1; i < b.length; i++)
    {
        if(f0 > b[i])
        {
            f0 = b[i];
        }
    }
    return f0;
}
/*----------------------------------------------------------------------*/
                        //Question 05:
/*----------------------------------------------------------------------*/ 
document.getElementById("btn__Question__05").onclick = function () {
    var so_Chan_cuoiCung = so__Chan__cuoiCung(mang__A);
    document.getElementById("footer__Question__05").innerHTML = "Chẵn cuối cùng trong mảng có giá trị là: " + so_Chan_cuoiCung;
}
function so__Chan__cuoiCung(a) {
    var f0 = a.pop();
    if(f0 % 2 === 0)
    {
        return f0;
    }
    else
    {
        return -1;
    }    
}
/*----------------------------------------------------------------------*/
                        //Question 06:
/*----------------------------------------------------------------------*/ 
document.getElementById("btn__Question__07").onclick = function () {
    var viTri__a = +document.getElementById("viTri__Candoi__a").value;
    var viTri__b = +document.getElementById("viTri__Duocdoi__b").value;

    var giaTri__a;
    var giaTri__b;
    var giaTri__c;

    //Lôi vị trí ra luôn;

    var vitricuthe_a;
    var vitricuthe_b;

    console.log(mang__A);

    //lấy được giá trị;
    for(var i = 0; i < mang__A.length; i++)
    {
        if(i == viTri__a)
        {
            giaTri__a = mang__A[i];
            vitricuthe_a = i;
        }
        else if(i == viTri__b)
        {
            giaTri__b = mang__A[i];
            vitricuthe_b = i;
        }
    }

    console.log(giaTri__a);
    console.log(giaTri__b);

    //Tới đây là đúng rồi nè;

    //đổi nè
    // for(var j = 0; j < mang__A.length; j++)
    // {
    //     if(j == viTri__a)
    //     {
    //         mang__A[j] == giaTri__b;
    //     }
    //     else if(j == viTri__b)
    //     {
    //         mang__A[j] == giaTri__a;
    //     }
    //     return mang__A;
    // }

    mang__A[vitricuthe_a] = giaTri__b;
    mang__A[vitricuthe_b] = giaTri__a;

    console.log(mang__A);

    //Giờ đổi Giá trị;
    //Lấy được vị trí;
    //Chạy mảng lấy giá trị, xong gán ngược lại;

    // var doi__Vitri = mang__A.map(function (viTri__a, viTri__b) {
    //     var luuGiatri__a;
    //     var luuGiatri__b;
    //     var luuGiatri__c;
    //     for(var i = 0; i < mang__A.length; i++)
    //     {
    //     if(i === viTri__a)
    //     {
    //         luuGiatri__a = mang__A[i];
    //     }
    //     else if(i === viTri__b)
    //     {
    //         luuGiatri__b = mang__A[i]
    //     }
    //     }
    //     luuGiatri__c = luuGiatri__a;
    //     luuGiatri__a = luuGiatri__b;
    //     luuGiatri__b = luuGiatri__c;
    // })

    // console.log(doi__Vitri);

    // giaTri__c = giaTri__a;
    // giaTri__a = giaTri__b;
    // giaTri__b = giaTri__c;

    // console.log(mang__A);

   document.getElementById("footer__Question__06").innerHTML = "Mảng sau Sau thay đổi 2 vị trí là: " + mang__A;
}
/*----------------------------------------------------------------------*/
                        //Question 07:
/*----------------------------------------------------------------------*/ 
document.getElementById("btn__Question__07").onclick = function () {
    var tangDan = mang__A.sort();
    document.getElementById("footer__Question__07").innerHTML = "Mảng sau khi được sắp xếp tăng dần là: " + tangDan;
}
/*----------------------------------------------------------------------*/
                        //Question 08:
/*----------------------------------------------------------------------*/
document.getElementById("btn__Question__08").onclick = function () {
    
    var mangNguyento = xet__So_nguyenTo(mang__A);

    if(mangNguyento[0] > 0)
    {
        var inKqQ08 = "Số nguyên Tố đầu tiên trong mảng là: " + mangNguyento[0];
    }
    else
    {
        var inKqQ08 = "Số nguyên Tố đầu tiên trong mảng là: " + -1;
    }

    document.getElementById("footer__Question__08").innerHTML = inKqQ08;
}
/*----------------------------------------------------------------------*/
function xet__So_nguyenTo (a) {
    var soNguyento;
    var mang__SonguyenTo = [];
    for(var i = 0; i <= a.length; i++)
    {
        if(a[i] == 1 || a[i] == 2 || a[i] == 3 || a[i] == 5 || a[i] == 7)
        {
            soNguyento = a[i];
            mang__SonguyenTo.push(a[i]);
        }
        else
        {
            if(a[i] % 2 == 0)
            {
            }
            else
            {
                if(a[i] % 3 == 0 || a[i] % 5 == 0 || a[i] % 7 == 0 || a[i] % 9 == 0)
                {
                }
                else
                {
                    soNguyento = a[i];
                    mang__SonguyenTo.push(a[i]);
                }
            }
        }
    }
    return mang__SonguyenTo;
}
/*----------------------------------------------------------------------*/
                        //Question 09:
/*----------------------------------------------------------------------*/
/*
    READ-ME
    Luồng xử lý của Câu 09: Khi thêm số nguyên rồi; Thực hiện thêm số thực;
     thì nó sẽ trả ra đúng kết quả;
    Nhưng:
    Khi lại thêm số Nguyên ở ban đầu; thì phải click nút bấm "THÊM SỐ THỰC";
     nó mới nhận giá trị số nguyên vừa được thêm; rồi mới xử lý đúng;
*/
var mang__B = [];
var mang__C = [];
document.getElementById("btn__themSothuc__09").onclick = function () {
    var soThuc = +document.getElementById("so__Thuc__duoc_Nhap").value;
    mang__C.push(soThuc);

    mang__B = mang__A.concat(mang__C);

    //console.log(mang__B);
    //console.log(mang__A);

    //Cho 1 biến đếm số Nguyên;
    //var count__Nguyen = 0;

    //Xét số nguyên;
    // for(var i = 0; i < mang__B.length; i++)
    // {
    //     if(Number.isInteger(mang__B[i]) == true)
    //     {
    //         count__Nguyen++;
    //     }
    // }

    // console.log(count__Nguyen);
    document.getElementById("footer__phanTutrongMagsauKhithemSothuc").innerHTML = "Mảng sau khi được thêm số thực: " + mang__B;
}
document.getElementById("btn__Question__09").onclick = function () {

    var count__Nguyen = 0;

    for(var i = 0; i < mang__B.length; i++)
    {
        if(Number.isInteger(mang__B[i]) == true)
        {
            count__Nguyen++;
        }
    }
    document.getElementById("footer__Question__09").innerHTML = "Số lượng số Nguyên sau khi thêm số thực là: " + count__Nguyen; 
}
/*----------------------------------------------------------------------*/
                        //Question 10:
/*----------------------------------------------------------------------*/
/*
    READ-ME
    Luồng xử lý của Câu 10: Cũng giống như câu 09, vì mình dùng mảng cuối
    cùng để thực hiện phép đếm cho số Âm, số Dương, khi được nạp thêm ở 
    phần số thực;
*/
document.getElementById("btn__Question__10").onclick = function () {
    var count__Duong__Q10 = 0;
    var count__Am__Q10 = 0;
    for(var i = 0; i < mang__B.length; i++)
    {
        if(mang__B[i] > 0)
        {
            count__Duong__Q10++;
        }
        else
        {
            count__Am__Q10++;
        }
    }
    var inKqQ10;
    if(count__Duong__Q10 > count__Am__Q10)
    {
        inKqQ10 = 
        "SL Dương: " + count__Duong__Q10 + "<br>" +
        "SL Âm: " + count__Am__Q10 + "<br>" +
        "SL số Dương lớn hơn SL số Âm";
    }
    else if(count__Duong__Q10 < count__Am__Q10)
    {
        inKqQ10 = 
        "SL Dương: " + count__Duong__Q10 + "<br>" +
        "SL Âm: " + count__Am__Q10 + "<br>" +
        "SL số Dương nhỏ hơn SL số Âm";
    }
    else
    {
        inKqQ10 = 
        "SL Dương: " + count__Duong__Q10 + "<br>" +
        "SL Âm: " + count__Am__Q10 + "<br>" +
        "SL số Dương bằng SL số Âm";
    }
    document.getElementById("footer__Question__10").innerHTML = inKqQ10;
}
/*----------------------------------------------------------------------*/
                        //DONE
/*----------------------------------------------------------------------*/

