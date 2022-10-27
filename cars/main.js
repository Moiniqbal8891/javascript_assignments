const cars = {}
function car_info(manufacturerName,modelName,arbitaryNo,color,optionalfeatures)
    {cars.manfName = manufacturerName,
    cars.modName = modelName,
    cars.arbitNo = arbitaryNo,
    cars.colName = color,
    cars.optFeature = optionalfeatures
};
function show_info(){
    console.log(cars.manfName);
    console.log(cars.modName);
    console.log(cars.arbitNo);
    console.log(cars.colName);
};

car_info("toyta","1998",123,"red"); //for adding value to object cars
show_info();