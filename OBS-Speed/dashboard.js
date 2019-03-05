Funbit.Ets.Telemetry.Dashboard.prototype.filter = function (data, utils) {
    data.truck.speed = Math.round(data.truck.speed) + ' KM/H';
    return data
};
