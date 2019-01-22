// Rover Object Goes Here
// ======================
  function Rover(){
    this.direction = "N"; // Default direction: N
    this.x = 0; // Default x coordinate: 0
    this.y = 0; // Default y coordinate: 0
    this.travelLog = [];
  }
// ======================
function turnLeft(rover){
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("turnLeft was called and the rover is now facing: " + rover.direction);
}

function turnRight(rover){
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called and the rover is now facing: " + rover.direction);
}

function moveForward(rover){
  switch(rover.direction){
    case "N":
      if(rover.y !== 0){
        rover.y--;
      }
      else{
        console.log("moveForward failed, the rover is at the edge of the grid");
      }
      break;
    case "E":
      if(rover.x !== 9){
        rover.x++;
      }
      else{
        console.log("moveForward failed, the rover is at the edge of the grid");
      }
      break;
    case "S":
      if(rover.y !== 9){
        rover.y++;
      }
      else{
        console.log("moveForward failed, the rover is at the edge of the grid");
      }
      break;
    case "W":
      if(rover.x !== 0){
        rover.x--;
      }
      else{
        console.log("moveForward failed, the rover is at the edge of the grid");
      }
      break;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log("moveForward was called and the rover's position is now [" + rover.x + "," + rover.y + "]");
}

function instructRover(commandString, rover){
  for(var i = 0; i < commandString.length; i++){
    switch (commandString.charAt(i)){
      case 'f':
        moveForward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log("Invalid command, proceeding to next command");
        break;
    }
  }
  console.log(rover.travelLog.join('->'));
}
