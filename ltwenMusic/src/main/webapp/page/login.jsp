<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<base href="/ltwenMusic/">
<meta charset="UTF-8">
<title>用户登录</title>
<link type="text/css" rel="stylesheet" href="./easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="./easyui/themes/default/easyui.css">
<link type="text/css" rel="stylesheet" href="./css/login.css">
</head>
<body>
	<div id="loginDiv">
		<form method="post" id="loginForm" style="text-align:center;">
			<span id="error">${sessionScope.errorMsg}</span><c:remove var="errorMsg"/><br>
			<input name="username" required="required" placeholder="请输入编号..." value=""/> &nbsp;&nbsp; 
			<input name="password" required="required" placeholder="请输入姓名..." value=""/><br>
			<a id="btnLogin" href="javascript:void(0)" >登录</a>
		</form>
	</div>
	
	
	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="js/login.js"></script>

</body>
</html>