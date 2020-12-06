
var readlineSync = require('readline-sync');
var fs = require('fs');
	

var students = [];

function loadData() {
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
	//console.log(students);
};

function showMenu(){
	console.log('------------------------------------End----------------------------------------');
	console.log('1.Nhập thông tin sinh viên mới.');
	console.log('2.Sửa thông tin sinh viên.');
	console.log('3.Xóa sinh viên.');
	console.log('4.Tìm sinh viên (nhập mã sv).');
	console.log('5.Tất cả sinh viên.');
	console.log('6.Lưu lại');
	var option = readlineSync.question('> ');
	switch (option) {
		case '1':
		 	creatStudent();
		 	console.log('Đã thêm!')
		 	showMenu();
			break;
		case '2':
			editInformation();
			console.log('Đã chỉnh sửa!')
			showMenu();
			break;
		case '3':
			deleteStudent();
			console.log('Đã xoá!')
			showMenu();
			break;
		case '4':
			findStudent();
			showMenu();
			break;
		case '5':
			console.log('Sinh viên hiện có là: ')
			showStudents();
			showMenu();
			break;
		case '6':
			console.log('Đã lưu và kết thúc chương  trình!')
			saveAndExit();
			break;
		default:
			console.log('Vui lòng nhập lại!!!');
			showMenu();
			break;
	};
};


function editInformation(){
	var code = readlineSync.question('Sinh vien can thay doi thong tin (Nhap ma sv): ');
	console.log('Nhap 1 để thay đổi mã sv');
	console.log('Nhap 2 để thay đổi Họ và tên');
	console.log('Nhap 3 để thay đổi số điện thoại (+84)');
	console.log('Nhap 4 để thay đổi toàn bộ');
	for ( var x of students) {
		if (x.Ma_sinh_vien == code ){
	var key = readlineSync.question('> ')
	switch (key) {
		case '1':
		var action1 = readlineSync.question('Ma sinh vien moi: ');
		x.Ma_sinh_vien = action1;
		break;
		case '2':
		var action2 = readlineSync.question('Ho va ten moi: ');
		x.Ho_va_ten = action2;
		break;
		case '3':
		var action3 = readlineSync.question('So dien thoai moi (+84): ');
		x.So_dien_thoai = parseInt(action3);
		break;
		case '4':
		var action1 = readlineSync.question('Ma sinh vien moi: ');
		x.Ma_sinh_vien = action1;
		var action2 = readlineSync.question('Ho va ten moi: ');
		x.Ho_va_ten = action2;
		var action3 = readlineSync.question('So dien thoai moi (+84): ');
		x.So_dien_thoai = parseInt(action3);
		break;
		default:
		console.log('Vui lòng nhập lại!!')
		break;
	}
}
}



}

function creatStudent() {
	var Ma_sinh_vien = readlineSync.question('Ma sinh vien: ');
	var Ho_va_ten = readlineSync.question('Ho Va Ten: ');
	var So_dien_thoai = readlineSync.question('So dien thoai (+84): ');
	var student = {
	 Ma_sinh_vien: Ma_sinh_vien,
	 Ho_va_ten: Ho_va_ten,
	 So_dien_thoai: parseInt(So_dien_thoai)
	};
	students.push(student);
}

function findStudent(){
	var change = readlineSync.question('Ma sinh vien: ');
	for ( var x of students){
		if ( x.Ma_sinh_vien === change){
			console.log('Sinh viên cần tìm là: ',x.Ma_sinh_vien, x.Ho_va_ten, x.So_dien_thoai);
		} else {console.log('Sinh viên không tồn tại!'); break;}
	}
}

function deleteStudent(){
	var z = -1;
	var out = readlineSync.question('Ma sinh vien: ');
	for ( var x of students){
		z += 1;
		if ( x.Ma_sinh_vien == out){
			delete x.Ma_sinh_vien;
			delete x.Ho_va_ten;
			delete x.So_dien_thoai;
			break;
		}
	}
}

function showStudents(){
	for (var student of students){
		console.log(student.Ma_sinh_vien, student.Ho_va_ten, student.So_dien_thoai);
	}
}

function saveAndExit(){
	var fileContent = JSON.stringify(students);
  fs.writeFileSync('./data.json', fileContent, { encoding: 'utf8' });
}

function main() {
	loadData();
	showMenu();
};

main();
