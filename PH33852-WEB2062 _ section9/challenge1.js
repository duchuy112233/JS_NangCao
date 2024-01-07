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


//1 Lấy ra các giá trị từ game.players và gán chúng vào players1 và players2.
const [players1, players2] = game.players;
console.log(players1, players2);

//2 Lấy ra thủ môn (gk) từ players1 và gán phần còn lại vào mảng fieldPlayers.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3 Tạo ra mảng allPlayers bằng cách kết hợp players1 và players2.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4 Thêm các cầu thủ mới vào players1Final.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5 Lấy ra các giá trị từ game.odds và gán chúng vào các biến team1, draw, và team2.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6 Hàm printGoal nhận vào một số lượng tham số không xác định (Rest Parameter) 
//  và in ra số lượng bàn thắng và danh sách cầu thủ ghi bàn.
const printGoal = function (...players) {
    console.log(players);
    console.log(`${players.length} bàn thắng đã được ghi`);
};
// printGoal('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoal('Davies', 'Muller');
printGoal(...game.scored);

//7 In ra kết quả dựa trên tỷ lệ cược (odds).
team1 < team2 && console.log('team 1 thắng');
team1 > team2 && console.log('team 2 thắng');

