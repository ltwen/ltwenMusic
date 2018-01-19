package com.music.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.music.dao.UserDao;
import com.music.entity.User;
import com.music.service.UserService;

@Service("userService")
public class UserServiceimpl implements UserService {
	@Autowired
	private UserDao userDao;
	
	@Override
	public User userLogin(User user) {
		
		return userDao.userLogin(user);
	}

}
