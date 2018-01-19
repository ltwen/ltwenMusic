$("#loginDiv").dialog({
	title: '登录',
	width: 380,
	height: 260,
	closable: false,
	top: 80
});


$('#btnLogin').linkbutton({
	iconCls : 'icon-man',
	onClick : function() {
		$('#loginForm').submit();
	}
});

$('#loginForm').form({
	url : "user/login",
	success : function(data) {
		if (data.trim() =="true") {
			location.replace("page/list.jsp")
		}else{
			$.messager.show({
				title:'登录信息',
				msg:'登录失败,编号或者账号错误!!',
				showType:'show',
				style:{
					top:document.body.scrollTop+document.documentElement.scrollTop,
					bottom:''
				}
			});

		}
	}

});