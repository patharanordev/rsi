
var tools = function(){

	return {
		rsi: function(dataObjArr, focusIndex, timePeriods){
			var result = { isSuccess:false, msg:null };

			try{
				if(dataObjArr.length>timePeriods && focusIndex>=timePeriods){
					var avg_gain0 = dataObjArr[timePeriods].gain;
					var avg_loss0 = dataObjArr[timePeriods].loss;
					var prevAVGGain = -1;
					var prevAVGLoss = -1;

					for(var i=0; i<timePeriods; i++){
						avg_gain0 += dataObjArr[i].gain;
						avg_loss0 += dataObjArr[i].loss;
					}

					//console.log('|   Date   | Data | Gain | Loss | AVG Gain | AVG Loss | RS | RSI |');

					dataObjArr[timePeriods].avgGain = parseFloat(avg_gain0) / timePeriods;
					dataObjArr[timePeriods].avgLoss = parseFloat(avg_loss0) / timePeriods;
					dataObjArr[timePeriods].rs = parseFloat(dataObjArr[timePeriods].avgGain) / parseFloat(dataObjArr[timePeriods].avgLoss);
					dataObjArr[timePeriods].rsi = 100 - (100/(1+dataObjArr[timePeriods].rs));

					prevAVGGain = dataObjArr[timePeriods].avgGain;
					prevAVGLoss = dataObjArr[timePeriods].avgLoss;

					// console.log('| ' +
					// 		dataObjArr[i].date + ' | ' +
					// 		parseFloat(dataObjArr[i].data).toFixed(2) + ' | ' +
					// 		parseFloat(dataObjArr[i].gain).toFixed(2) + ' | ' +
					// 		parseFloat(dataObjArr[i].loss).toFixed(2) + ' | ' +
					// 		parseFloat(dataObjArr[i].avgGain).toFixed(2) + ' | ' +
					// 		parseFloat(dataObjArr[i].avgLoss).toFixed(2) + ' | ' +
					// 		parseFloat(dataObjArr[i].rs).toFixed(2) + ' | ' +
					// 		parseFloat(dataObjArr[i].rsi).toFixed(2) + ' | ');

					for(var i=timePeriods+1; i<=focusIndex; i++){
						dataObjArr[i].avgGain = parseFloat(((prevAVGGain*(timePeriods-1)) + dataObjArr[i].gain)) / timePeriods;
						dataObjArr[i].avgLoss = parseFloat(((prevAVGLoss*(timePeriods-1)) + dataObjArr[i].loss)) / timePeriods;

						dataObjArr[i].rs = parseFloat(dataObjArr[i].avgGain) / parseFloat(dataObjArr[i].avgLoss);
						dataObjArr[i].rsi = 100 - (100/(1+dataObjArr[i].rs));

						prevAVGGain = dataObjArr[i].avgGain;
						prevAVGLoss = dataObjArr[i].avgLoss;

						// console.log('| ' +
						// 	dataObjArr[i].date + ' | ' +
						// 	parseFloat(dataObjArr[i].data).toFixed(2) + ' | ' +
						// 	parseFloat(dataObjArr[i].gain).toFixed(2) + ' | ' +
						// 	parseFloat(dataObjArr[i].loss).toFixed(2) + ' | ' +
						// 	parseFloat(dataObjArr[i].avgGain).toFixed(2) + ' | ' +
						// 	parseFloat(dataObjArr[i].avgLoss).toFixed(2) + ' | ' +
						// 	parseFloat(dataObjArr[i].rs).toFixed(2) + ' | ' +
						// 	parseFloat(dataObjArr[i].rsi).toFixed(2) + ' | ');
					}

					prevAVGGain = null;
					prevAVGLoss = null;
					avg_gain0 = null;
					avg_loss0 = null;

					result.isSuccess = true;
				} else {
					result.isSuccess = false;
					result.msg = "'timePeriods' must less than the amount of data!!!";
				}
			} catch(e) {
				result.isSuccess = false;
				result.msg = e.stack;
			}
		}
	}
};

module.exports = tools();
