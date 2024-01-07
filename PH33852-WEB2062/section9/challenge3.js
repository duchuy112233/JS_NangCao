const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);


/*
1 Lấy Danh Sách Các Loại Sự Kiện (Events):
tạo một mảng events chứa tất cả các loại sự kiện khác nhau, 
không lặp lại, bằng cách sử dụng Set để loại bỏ 
các giá trị trùng lặp từ gameEvents.values(). Kết quả được in ra console.
*/
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2 xoá
gameEvents.delete(64);

/*
3 Tính Toán Thống Kê Thời Gian Trung Bình Giữa Các Sự Kiện:
Tính và in ra console thời gian trung bình giữa các sự kiện trong trận đấu. 
Lưu ý rằng 90 là thời gian của một trận đấu.
*/
console.log(`an event hepped, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
/*
thời gian cuối cùng của sự kiện được lấy ra từ các khóa của gameEvents 
và sau đó sử dụng để tính thời gian trung bình giữa các sự kiện.
*/
console.log(time);
console.log(`an event hepped, on average, every ${time / gameEvents.size} minutes`);

//4 Hiển Thị Thông Tin về Sự Kiện:
/*
Dùng vòng lặp để duyệt qua mỗi cặp khóa-giá trị trong gameEvents 
và in ra console thông tin về sự kiện, bao gồm cả thời gian, nửa thời gian và loại sự kiện.
*/
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`)
}



