package com.music.controll;

import javax.servlet.http.HttpSession;

import org.apache.catalina.connector.Request;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.music.entity.User;
import com.music.service.UserService;

@Controller
@RequestMapping("/user")
public class UserHandle {
		@Autowired
		private UserService userService;
		
		@RequestMapping("/login")
		@ResponseBody
		public boolean userLogin(User user,HttpSession session){
			LogManager.getLogger().debug("进入userLogin()处理...");
			user = userService.userLogin(user);
			session.setAttribute("loginUser", user);
			StringBuffer bf= new StringBuffer();
			bf.append("");
			return user!=null;
		}
		
}
