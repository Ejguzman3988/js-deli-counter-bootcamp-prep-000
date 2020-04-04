function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0){
    
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  let position = 1
  var newLine = ""
  if (line.length > 0){
    while (position >= line.length){
      newLine += `${position}. ${line[position-1]}
    }
  }
}