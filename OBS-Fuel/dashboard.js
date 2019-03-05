Funbit.Ets.Telemetry.Dashboard.prototype.filter = function (data, utils) {
    data.truck.fuel = Math.round(data.truck.fuel) + 'L';
    data.truck.fuelCapacity = Math.round(data.truck.fuelCapacity) + 'L';
    return data
};
