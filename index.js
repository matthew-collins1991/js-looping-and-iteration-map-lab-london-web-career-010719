// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const result = drivers.map(name => name.toLowerCase())
  return result
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const driver1 = driver.split(' ')[0];
    const driver2 = driver.split(' ')[1];

    return { firstName: driver1, lastName: driver2 };
  });
}

function attributesToPhrase(drivers){
  const result = drivers.map(name => `${name.name} is from ${name.hometown}` )
  return result
}
