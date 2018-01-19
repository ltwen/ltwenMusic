$.get("user/detail?uid="+uid,function(data){
	$("#mid").val(data.id);
	$("#mname").val(data.name);
	$("#mbirthday").val(data.birthday);
	$("#msex").val(data.gender);
	$("#mcareer").val(data.career);
	$("#maddress").val(data.address);
	$("#mobile").val(data.mobile);
	//alert(data.picPath);
	if(data.picPath==null){
		$("#pic").attr("src","image/5.png");
	}else{
		$("#pic").attr("src",data.picPath);
	}
},"json");

$('.modifyBtn').linkbutton({
	iconCls: 'icon-edit',
	onClick:function(){
		$("#modifyForm").submit();
	}	
});

$('.closeBtn').linkbutton({
	iconCls: 'icon-no',
	onClick:function(){
		closeMU();
	}
});

$("#modifyForm").form({
	url : "user/modify",
	success : function(data) {
		
		if(data.trim() ==""){
			$.messager.alert('用户信息修改','您没有修改权限！','warning');
			closeMU();
			return false;
		}
		
		
		if (data.trim() =="true") {
			closeMU();
			$('#usersInfo').datagrid("reload");
			$.messager.show({
				title:'修改信息',
				msg:'修改成功',
				showType:'show',
				style:{
					top:document.body.scrollTop+document.documentElement.scrollTop,
					bottom:''
				}
			});
		}else{
			$.messager.show({
				title:'修改信息',
				msg:'修改失败!!',
				showType:'show',
				style:{
					top:document.body.scrollTop+document.documentElement.scrollTop,
					bottom:''
				}
			});
		}
	}
});


function changePic(obj){
	$("#pic").attr("src",window.URL.createObjectURL(obj.files[0]));
}

