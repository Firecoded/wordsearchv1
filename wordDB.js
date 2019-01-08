const wordDB = {
    football: ['fieldgoal', 'touchdown', 'kicker', 'penalty', 'down', 'mascot', 'hailmary', 'run', 'blitz', 'helmet']   
}

let gameboardSize = 10;

const directionCheck = {
    'up': {'y': -1, 'x': 0},
    'upRight': {'y': -1, 'x': 1},
    'right': {'y': 0, 'x': 1},
    'downRight': {'y': 1, 'x': 1},
    'down' : {'y': 1, 'x': 0},
    'downLeft': {'y': 1, 'x': -1},
    'left' : {'y': 0, 'x': -1},
    'upLeft': {'y': -1, 'x': -1}
}

