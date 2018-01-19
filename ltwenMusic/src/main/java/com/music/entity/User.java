package com.music.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class User {
	@Id
	@GeneratedValue
	
	int id;
	String username; //用户名，主键用户自定义
	
	String password; //密码

	
	public User() {
	}

	

	public User(int id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + "]";
	}

	
	
}
