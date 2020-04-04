function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  var name = ""
  if (line.length > 0){
    name = line[0]
    line = line.shift(1)
    return `Currently serving ${name}.`
    
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  let position = 1
  var newLine = ""
  if (line.length > 0){
    while (position > line.length){
      newLine += `${position}. ${line[position-1]},`
      position++
    }
    newLine += `${position}. ${line[position-1]}`
  }
  else{
    return "The line is currently empty."
  }
}