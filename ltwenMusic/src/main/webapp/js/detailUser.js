$.get("user/detail?uid="+uid,function(data){
	$("#uid").val(data.id);
	$("#uname").val(data.name);
	$("#ubirthday").val(data.birthday);
	$("#usex").val(data.gender);
	$("#ucarr").val(data.career);
	$("#uaddress").val(data.address);
	$("#uphone").val(data.mobile);
},"json");