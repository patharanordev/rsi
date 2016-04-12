var tools = require('./rsi.js')

// :
// : Do something
// :

var priceObj = [];
priceObj.push({date:'2009-12-14', data:44.34, gain:0.00, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-15', data:44.09, gain:0.00, loss:0.25, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-16', data:44.15, gain:0.06, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-17', data:43.61, gain:0.00, loss:0.54, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-18', data:44.33, gain:0.72, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});

priceObj.push({date:'2009-12-21', data:44.83, gain:0.50, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-22', data:45.10, gain:0.27, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-23', data:45.42, gain:0.33, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-24', data:45.84, gain:0.42, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-28', data:46.08, gain:0.24, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});

priceObj.push({date:'2009-12-29', data:45.89, gain:0.00, loss:0.19, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-30', data:46.03, gain:0.14, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-12-31', data:45.61, gain:0.00, loss:0.42, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-04', data:46.28, gain:0.67, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-05', data:46.28, gain:0.00, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});

priceObj.push({date:'2009-01-06', data:46.00, gain:0.00, loss:0.28, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-07', data:46.03, gain:0.03, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-08', data:46.41, gain:0.38, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-11', data:46.22, gain:0.00, loss:0.19, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-12', data:45.64, gain:0.00, loss:0.58, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});

priceObj.push({date:'2009-01-13', data:46.21, gain:0.57, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-14', data:46.25, gain:0.04, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-15', data:45.71, gain:0.00, loss:0.54, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-19', data:46.45, gain:0.74, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-20', data:45.78, gain:0.00, loss:0.67, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});

priceObj.push({date:'2009-01-21', data:45.35, gain:0.00, loss:0.43, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-22', data:44.03, gain:0.00, loss:1.33, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-25', data:44.18, gain:0.15, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-26', data:44.22, gain:0.04, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-27', data:44.57, gain:0.35, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});

priceObj.push({date:'2009-01-28', data:43.42, gain:0.00, loss:1.15, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-01-29', data:42.66, gain:0.00, loss:0.76, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:0.00});
priceObj.push({date:'2009-02-01', data:43.13, gain:0.47, loss:0.00, avgGain:0.00, avgLoss:0.00, rs:0.00, rsi:null});

tools.rsi(priceObj, (priceObj.length-1), 14)

for(var i=0;i<priceObj.length;i++){
	console.log(
		priceObj[i].date + ' | ' + 
		parseFloat(priceObj[i].data).toFixed(2) + ' | ' + 
		parseFloat(priceObj[i].avgGain).toFixed(2) + ' | ' + 
		parseFloat(priceObj[i].avgLoss).toFixed(2) + ' | ' + 
		parseFloat(priceObj[i].rsi).toFixed(2));
}
