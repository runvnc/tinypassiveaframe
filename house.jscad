function _2x4() {
  return cube({size:[2,4,96]});
}

function main() {
  return [
    color('yellow', _2x4().rotateX(30)) 
  ];
}
