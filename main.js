const team = {
  _players: [
    {
      firstName: 'Harry',
      lastName: 'Kane',
      age: 28
    },
    {
      firstName: 'Bukayo',
      lastName: 'Saka',
      age: 20
    },
    {
      firstName: 'Marcus',
      lastName: 'Rashford',
      age: 24
    }
  ], 
 
  _games: [
    {
      opponent: 'Germany',
      teamPoints: 3,
      opponentPoints:2
    },
    {
      opponent: 'France',
      teamPoints: 4,
      opponentPoints: 2
    },
    {
      opponent: 'Italy',
      teamPoints: 2,
      opponentPoints: 4
    }
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.players.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('USA', 5, 0);
team.addGame('Russia', 2, 4);
team.addGame('Scotland', 3, 3);

console.log(team._players);
console.log(team._games);

