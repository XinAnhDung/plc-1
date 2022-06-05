// Hàm chức năng ghi giá trị tag
function setTag(tag,val) {
    var tag_Link = '"Web_Comm".' + tag;
    var url = "IO.html";
    sdata = tag_Link + '=' + val;
    $.post(url, sdata, function (result2) { });
}
// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    url = "IO.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}
// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
    // IO Field - Màn hình chính (Actual value)
    if(tag_Edit_Enable == false){
    // HIỂN THỊ CÀI ĐẶT THỜI GIAN
    IOField("tbx_SET_TS_LL", "SET_TS_LL");
    IOField("tbx_SET_TCE_LL", "SET_TCE_LL");
    IOField("tbx_SET_TBS_LL", "SET_TBS_LL");
    IOField("tbx_SET_TCN_LL", "SET_TCN_LL");

    IOField("tbx_SET_TS_LG", "SET_TS_LG");
    IOField("tbx_SET_TCE_LG", "SET_TCE_LG");
    IOField("tbx_SET_TBS_LG", "SET_TBS_LG");
    IOField("tbx_SET_TCN_LG", "SET_TCN_LG");
    IOField("tbx_SET_TGOFF", "SET_TGOFF");
    }   
    
    IOField("Screen2_tbx_V1N", "READ_DATA.V1N"); 
    IOField("Screen2_tbx_V2N", "READ_DATA.V2N"); 
    IOField("Screen2_tbx_F1", "READ_DATA.F");
    IOField("Screen2_tbx_F2", "READ_DATA.F");
    IOField("Screen2_tbx_I1", "READ_DATA.I1"); 
    IOField("Screen2_tbx_I2", "READ_DATA.I2"); 
    IOField("Screen2_tbx_P1", "READ_DATA.P1"); 
    IOField("Screen2_tbx_P2", "READ_DATA.P2");

    IOField("Screen3_tbx_V1N", "READ_DATA.V1N"); 
    IOField("Screen3_tbx_V3N", "READ_DATA.V3N"); 
    IOField("Screen3_tbx_F1", "READ_DATA.F"); 
    IOField("Screen3_tbx_F2", "READ_DATA.F"); 
    IOField("Screen3_tbx_I1", "READ_DATA.I1"); 
    IOField("Screen3_tbx_I3", "READ_DATA.I3"); 
    IOField("Screen3_tbx_P1", "READ_DATA.P1"); 
    IOField("Screen3_tbx_P3", "READ_DATA.P3");
// HIển thị symbol
    fn_SymbolStatus('Line1_Light', 'L1', 'LINE_1');
    fn_SymbolStatus('Line2_Light', 'L1', 'LINE_2');
    fn_SymbolStatus('PRIORITY_LOAD', 'L1', 'PL');
    fn_SymbolStatus('NON_PRIORITY_LOAD', 'L1', 'NPL');

    fn_SymbolStatus('Line1_Light_LG', 'L1', 'LINE_1');
    fn_SymbolStatus('Line_G_Light', 'L1', 'LINE_GEN');
    fn_SymbolStatus('PRIORITY_LOAD_LG', 'L1', 'PL_LG');;
    fn_SymbolStatus('NON_PRIORITY_LOAD_LG', 'L1', 'NPL_LG');
    fn_SymbolStatus('ALARM', 'L1', 'ALARM');
    fn_SymbolStatus('RELAY_FUEL', 'L1', 'FUEL');

    //}
}, 1000);



// Hàm chức năng chuyển trang
function fn_ScreenChange(scr_1, scr_2)
{
    document.getElementById(scr_1).style.visibility = 'visible';   // Hiển thị trang được chọn
    document.getElementById(scr_2).style.visibility = 'hidden';    // Ẩn trang 1
}

// Hàm chức năng nút sửa/lưu dữ liệu
function fn_DataEdit(button1, button2)
{
    document.getElementById(button1).style.zIndex='1';  // Hiển nút 1
    document.getElementById(button2).style.zIndex='0';  // Ẩn nút 2
}
// Tag Edit
var tag_Edit_Enable = false;
// Hàm báo đang sửa dữ liệu screen2
function fn_Edditing(){
    fn_DataEdit("Screen2_btt_Save", "Screen2_btt_Edit")
    tag_Edit_Enable = true;
    // Enable chức năng IO Field
    document.getElementById("tbx_SET_TS_LL").disabled = false;
    document.getElementById("tbx_SET_TCE_LL").disabled = false;
    document.getElementById("tbx_SET_TBS_LL").disabled = false;
    document.getElementById("tbx_SET_TCN_LL").disabled = false;
}

// Hàm báo đang sửa dữ liệu screen3
function fn_Edditing1(){
    fn_DataEdit("Screen3_btt_Save", "Screen3_btt_Edit")
    tag_Edit_Enable = true;
    // Enable chức năng IO Field
    document.getElementById("tbx_SET_TS_LG").disabled = false;
    document.getElementById("tbx_SET_TCE_LG").disabled = false;
    document.getElementById("tbx_SET_TBS_LG").disabled = false;
    document.getElementById("tbx_SET_TCN_LG").disabled = false;
    document.getElementById("tbx_SET_TGOFF").disabled = false;
}

// Hàm báo đã sửa dữ liệu screen2
function fn_Saving(){
    fn_DataEdit("Screen2_btt_Edit", "Screen2_btt_Save")
    tag_Edit_Enable = false;
    // Set giá trị tag
    var tag_1 = document.getElementById("tbx_SET_TS_LL").value; // Lấy giá trị từ textbox
    var tag_2 = document.getElementById("tbx_SET_TCE_LL").value;
    var tag_3 = document.getElementById("tbx_SET_TBS_LL").value; 
    var tag_4 = document.getElementById("tbx_SET_TCN_LL").value;
    // Ghi dữ liệu thời gian xuống plc
    setTag('SET_TS_LL',tag_1);         
    setTag('SET_TCE_LL',tag_2);
    setTag('SET_TBS_LL',tag_3);         
    setTag('SET_TCN_LL',tag_4);
    // Disable chức năng IO field
    document.getElementById("tbx_SET_TS_LL").disabled = true;
    document.getElementById("tbx_SET_TCE_LL").disabled = true;
    document.getElementById("tbx_SET_TBS_LL").disabled = true;
    document.getElementById("tbx_SET_TCN_LL").disabled = true;
    alert('Dữ liệu đã được lưu!');
}
// Hàm báo đã sửa dữ liệu screen3
function fn_Saving1(){
    fn_DataEdit("Screen3_btt_Edit", "Screen3_btt_Save")
    tag_Edit_Enable = false;
    // Set giá trị tag
    var tag_5 = document.getElementById("tbx_SET_TS_LG").value; // Lấy giá trị từ textbox
    var tag_6 = document.getElementById("tbx_SET_TCE_LG").value;
    var tag_7 = document.getElementById("tbx_SET_TBS_LG").value; 
    var tag_8 = document.getElementById("tbx_SET_TCN_LG").value;
    var tag_9 = document.getElementById("tbx_SET_TGOFF").value;
    // Ghi dữ liệu thời gian xuống plc 
    setTag('SET_TS_LG',tag_5);       
    setTag('SET_TCE_LG',tag_6);
    setTag('SET_TBS_LG',tag_7);        
    setTag('SET_TCN_LG',tag_8);
    setTag('SET_TGOFF',tag_9);
    // Disable chức năng IO field
    document.getElementById("tbx_SET_TS_LG").disabled = true;
    document.getElementById("tbx_SET_TCE_LG").disabled = true;
    document.getElementById("tbx_SET_TBS_LG").disabled = true;
    document.getElementById("tbx_SET_TCN_LG").disabled = true;
    document.getElementById("tbx_SET_TGOFF").disabled = true;
    alert('Dữ liệu đã được lưu!');
}
// Hàm chức năng hiển thị trạng thái symbol
function fn_SymbolStatus(ObjectID, SymName, Tag)
{
    var imglink_0 = "images/Symbol/" + SymName + "_0.png"; // Trạng thái tag = 0
    var imglink_1 = "images/Symbol/" + SymName + "_1.png"; // Trạng thái tag = 1
    var imglink_2 = "images/Symbol/" + SymName + "_2.png"; // Trạng thái tag = 2
    var imglink_3 = "images/Symbol/" + SymName + "_3.png"; // Trạng thái tag = 3
    var imglink_4 = "images/Symbol/" + SymName + "_4.png"; // Trạng thái tag = 4
    url = "IO.html";
    $.getJSON(url, function (result) {
        if (result[Tag] == 0)
        {
            document.getElementById(ObjectID).src = imglink_0;
        }
        else if (result[Tag] == 1)
        {
            document.getElementById(ObjectID).src = imglink_1;
        }
        else if (result[Tag] == 2)
        {
            document.getElementById(ObjectID).src = imglink_2;
        }
        else if (result[Tag] == 3)
        {
            document.getElementById(ObjectID).src = imglink_3;
        }
        else if (result[Tag] == 4)
        {
            document.getElementById(ObjectID).src = imglink_4;
        }
        else
        {
            document.getElementById(ObjectID).src = imglink_0;
        }
    });
}


