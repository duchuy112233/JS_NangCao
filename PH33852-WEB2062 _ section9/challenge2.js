const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0', // tỷ số
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'], //một mảng chứa tên của các cầu thủ ghi bàn
    date: 'Nov 9th, 2037',

    //đối tượng chứa tỷ lệ cược 
    //tỷ lệ cược cho team1, team2, và tỷ lệ cược hòa (x).
    odds: {
        team1: 1.33, //team 1 < team 2
        x: 3.25,
        team2: 6.5,
    },
};


// 1 Hiển Thị Tên Cầu Thủ Ghi Bàn:
/* Dùng vòng lặp để duyệt qua mảng game.scored chứa tên của các cầu thủ ghi bàn
và hiển thị thông tin về mỗi bàn thắng trên console. 
*/
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);

//2 Tính Tổng Trung Bình Các Tỷ Lệ Cược:
// Tính tổng trung bình của tất cả các tỷ lệ cược trong game.odds và hiển thị kết quả trên console.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3 Hiển Thị Tỷ Lệ Cược Cho Mỗi Đội:
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
/*
Dùng vòng lặp để duyệt qua game.odds và hiển thị thông tin về tỷ lệ cược cho mỗi đội hoặc kết quả hòa trên console. 
Biến teamStr được sử dụng để xác định liệu có phải là trận hòa không, và nếu không thì hiển thị tên đội chiến thắng.
*/