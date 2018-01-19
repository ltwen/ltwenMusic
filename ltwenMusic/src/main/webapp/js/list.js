$('#usersInfo').datagrid({    
	fitColumns:true,
	url:'user/list',  
	singleSelect:true,
	pagination:true,
	pageList: [5,7,10],
	columns:[[ 
	          {field:'id',title:'编号',width:100,align:'center'},    
	          {field:'name',title:'姓名',width:120,align:'center'},
	          {field:'birthday',title:'生日',width:120,align:'center'},
	          {field:'gender',title:'性别',width:100,align:'center'},
	          {field:'career',title:'职位',width:110,align:'center'},
	          {field:'address',title:'地址',width:130,align:'center'},
	          {field:'mobile',title:'电话',width:140,align:'center'},
	          {field:'pic',title:'图像',width:150,align:'center',
		        	formatter:function(value,row,index){
		        		//alert(row.picPath);
		        		var str;
		        		if(row.picPath==null){
		        			str='<img src="image/5.png"/>';
		        		}else{
		        			str='<img src="'+row.picPath+'"/>';
		        		}
		        		return str;
		        	}
	          },
	          {field:'operator',title:'操作',width:120,align:'center',
	        	formatter:function(value,row,index){
	        		var str = '<a class="operatorBtn1" href="javaScript:void(0)" onClick="openMU('+row.id+')">修改</a>&nbsp;'
	        			+ '<a class="operatorBtn2" href="javaScript:void(0)" onClick="openDU('+row.id+')">详情</a>'+
	        			'<script>$(".operatorBtn1").linkbutton({iconCls: "icon-edit"});'+
	        			'$(".operatorBtn2").linkbutton({iconCls:"icon-search"})</script>';
	        		return str;
	        	}  
	          },
	          ]]
});


var uid;
function openDU(id){
	uid=id;
	$("#detail").dialog({
		title:'用户详情',
		width:250,
		height:300,
		left:650,
		modal:true,
		href:'page/detailUser.jsp?'
	});
}

function openMU(id){
	uid=id;
	$("#modifyDiv").dialog({
		title:'修改用户',
		closable:false,
		width:350,
		height:600,
		left:650,
		modal:true,
		href:'page/modifyUser.jsp?'
	});
}	

function closeMU(){
	$('#modifyDiv').dialog('close',true);
}
