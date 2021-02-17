const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { EmpDetailsSet } = this.entities;
	const service = await cds.connect.to('LSH');
	this.on('READ', EmpDetailsSet, request => {
		return service.tx(request).run(request.query);
	});
});