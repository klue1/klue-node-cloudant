
/*
 * GET users listing.
 */

exports.list = function(req, res){
  //res.send("respond with a resource");
	var list = [
		{name: '1', value: "one"},
		{name: '2', value: "two"},
	]
	res.render('pages/simple', { title: 'Simple EJS example' , elements: list});
};